/* =========================================================
   THE COLLECTIVE.CO — SHOP SYSTEM (Design-Safe & Interactive)
========================================================= */

const firebaseConfig = {
    apiKey: "AIzaSyAiFa8h-LM0tKlfLZ9OyqlsgkMtDU5oj1s",
    authDomain: "the-collectiveco-orders.firebaseapp.com",
    projectId: "the-collectiveco-orders",
    storageBucket: "the-collectiveco-orders.firebasestorage.app",
    messagingSenderId: "543435699346",
    appId: "1:543435699346:web:886ff03c71fb546dc7a24b",
    measurementId: "G-7GP25TW6JH"
};

let firebaseDB = null;
let productCatalog = [];
let activeCategory = "all";

// --- FIREBASE INITIALIZATION ---
(async function () {
    try {
        const { initializeApp } = await import(
            "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"
        );
        const { getFirestore, collection, getDocs } = await import(
            "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"
        );

        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        firebaseDB = { db, collection, getDocs };

        await loadProductsFromFirebase();
    } catch (error) {
        console.error("Firebase connection error:", error);
    }
})();

// --- FETCH PRODUCTS FROM FIRESTORE ---
async function loadProductsFromFirebase() {
    if (!firebaseDB?.db) return;

    try {
        const snapshot = await firebaseDB.getDocs(
            firebaseDB.collection(firebaseDB.db, "products")
        );

        productCatalog = snapshot.docs.map(docSnap => {
            const data = docSnap.data() || {};
            return {
                id: docSnap.id,
                name: data.name || data.listing || "Product",
                category: (data.category || "others").toLowerCase(),
                price: Number(data.price || 0),
                image: data.imageUrl || data.image || '',
                description: data.description || "No description available for this item."
            };
        });

        setupCategoryMenu();
        filterAndRenderProducts();
    } catch (error) {
        console.error("Could not load products:", error);
        renderProducts([]);
    }
}

// --- CATEGORY SETUP ---
function setupCategoryMenu() {
    const categoryMenu = document.getElementById("categoryMenu");
    if (!categoryMenu) return;

    const rawCategories = [...new Set(productCatalog.map(p => p.category))];
    const categories = ["all", ...rawCategories.filter(Boolean)];

    categoryMenu.innerHTML = categories.map(cat => `
        <button type="button" class="category-chip ${cat === activeCategory ? 'active' : ''}" data-category="${cat}">
            ${cat === "all" ? "All Items" : cat}
        </button>
    `).join("");

    categoryMenu.querySelectorAll(".category-chip").forEach(chip => {
        chip.addEventListener("click", (e) => {
            activeCategory = e.target.getAttribute("data-category");
            setupCategoryMenu();
            filterAndRenderProducts();
        });
    });
}

function filterAndRenderProducts() {
    const searchInput = document.getElementById("productSearch");
    const searchQuery = (searchInput?.value || "").toLowerCase().trim();

    const filtered = productCatalog.filter(product => {
        const matchesCategory = activeCategory === "all" || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery) || 
                              product.category.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    renderProducts(filtered);
}

// --- RENDER PRODUCTS GRID ---
function renderProducts(products = productCatalog) {
    const grid = document.getElementById("productGrid");
    const noProducts = document.querySelector(".no-products");

    if (!grid) return;
    grid.innerHTML = "";

    if (!products || products.length === 0) {
        if (noProducts) noProducts.style.display = "block";
        return;
    }

    if (noProducts) noProducts.style.display = "none";

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image">
                ${
                    product.image
                        ? `<img src="${product.image}" alt="${product.name}">`
                        : `<span>🛍️</span>`
                }
            </div>
            <div class="product-info">
                <small class="product-category">${product.category || ""}</small>
                <h3 class="product-title">${product.name}</h3>
                <strong class="product-price">₦${product.price.toLocaleString()}</strong>
                <button type="button" class="add-to-cart-btn">ADD TO CART</button>
            </div>
        `;

        // Click card to open description/detail view
        card.addEventListener("click", (e) => {
            if (!e.target.classList.contains("add-to-cart-btn")) {
                openProductModal(product);
            }
        });

        // Add to cart button
        card.querySelector(".add-to-cart-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            addToCart(product);
        });

        grid.appendChild(card);
    });
}

// --- PRODUCT DETAIL MODAL ---
function openProductModal(product) {
    const existing = document.getElementById("productDetailModal");
    if (existing) existing.remove();

    const modal = document.createElement("div");
    modal.id = "productDetailModal";
    modal.className = "modal-overlay";

    modal.innerHTML = `
        <div class="modal-content">
            <button id="closeProductModal" class="modal-close">&times;</button>
            <div class="modal-image">
                ${product.image ? `<img src="${product.image}" alt="${product.name}">` : `<span>🛍️</span>`}
            </div>
            <small>${product.category}</small>
            <h2>${product.name}</h2>
            <strong>₦${product.price.toLocaleString()}</strong>
            <p>${product.description}</p>
            <button id="modalAddToCart" class="checkout-button">ADD TO CART</button>
        </div>
    `;

    document.body.appendChild(modal);

    const closeModal = () => modal.remove();
    document.getElementById("closeProductModal").addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

    document.getElementById("modalAddToCart").addEventListener("click", () => {
        addToCart(product);
        closeModal();
    });
}

// --- CART MANAGEMENT ---
function getCart() {
    try {
        return JSON.parse(localStorage.getItem("collectiveCart") || "[]");
    } catch {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem("collectiveCart", JSON.stringify(cart));
    updateCartDisplay();
    renderCartPopup();
}

function addToCart(product) {
    const cart = getCart();
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
        existing.quantity = Math.min(Number(existing.quantity || 1) + 1, 10);
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCart(cart);
    showSmallMessage(`${product.name} added to cart.`);
}

function removeFromCart(id) {
    const cart = getCart().filter(item => item.id !== id);
    saveCart(cart);
}

function updateCartDisplay() {
    const count = document.getElementById("cartCount");
    if (count) {
        count.textContent = getCart().reduce((total, item) => total + Number(item.quantity || 1), 0);
    }
}

function renderCartPopup() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    const cart = getCart();

    if (!cartItems || !cartTotal) return;

    if (cart.length === 0) {
        cartItems.innerHTML = `<p style="text-align:center;">Your cart is empty.</p>`;
        cartTotal.textContent = "₦0";
        return;
    }

    let total = 0;
    cartItems.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        return `
            <div class="cart-item-row">
                <img src="${item.image || ''}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span>₦${item.price.toLocaleString()} x ${item.quantity}</span>
                </div>
                <strong>₦${itemTotal.toLocaleString()}</strong>
                <button type="button" class="remove-cart-item" data-id="${item.id}">&times;</button>
            </div>
        `;
    }).join("");

    cartTotal.textContent = `₦${total.toLocaleString()}`;

    cartItems.querySelectorAll(".remove-cart-item").forEach(btn => {
        btn.addEventListener("click", (e) => {
            removeFromCart(e.target.getAttribute("data-id"));
        });
    });
}

function showSmallMessage(message) {
    const old = document.getElementById("collectiveSmallMessage");
    if (old) old.remove();

    const box = document.createElement("div");
    box.id = "collectiveSmallMessage";
    box.className = "toast-message";
    box.textContent = message;
    document.body.appendChild(box);

    setTimeout(() => { if (box.parentNode) box.remove(); }, 2200);
}

// --- EVENT LISTENERS ---
document.addEventListener("DOMContentLoaded", () => {
    updateCartDisplay();

    // Cart Popup Toggles (uses active class for your CSS)
    const cartBtn = document.getElementById("cartBtn");
    const cartPopup = document.getElementById("cartPopup");
    const closeCart = document.getElementById("closeCart");

    if (cartBtn && cartPopup) {
        cartBtn.addEventListener("click", () => {
            renderCartPopup();
            cartPopup.classList.add("active");
            cartPopup.style.display = "block"; // Fallback
        });
    }

    if (closeCart && cartPopup) {
        closeCart.addEventListener("click", () => {
            cartPopup.classList.remove("active");
            cartPopup.style.display = "none";
        });
    }

    // Category Menu Toggle
    const categoryBtn = document.getElementById("categoryBtn");
    const categoryMenu = document.getElementById("categoryMenu");
    if (categoryBtn && categoryMenu) {
        categoryBtn.addEventListener("click", (e) => {
            e.preventDefault();
            categoryMenu.classList.toggle("active");
            categoryMenu.style.display = categoryMenu.style.display === "flex" ? "none" : "flex";
        });
    }

    // Search
    const searchInput = document.getElementById("productSearch");
    if (searchInput) {
        searchInput.addEventListener("input", filterAndRenderProducts);
    }
});
