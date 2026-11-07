/* =========================================================
   THE COLLECTIVE.CO — COMPLETE SHOP SYSTEM
   Connected to Firebase Firestore with Full Interactivity
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

        console.log("Shop connected to Firebase.");
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
        console.error("Could not load products from Firebase:", error);
        renderProducts([]);
    }
}

// --- CATEGORY SETUP & FILTERING ---
function setupCategoryMenu() {
    const categoryMenu = document.getElementById("categoryMenu");
    if (!categoryMenu) return;

    // Get unique categories from catalog
    const rawCategories = [...new Set(productCatalog.map(p => p.category))];
    const categories = ["all", ...rawCategories.filter(Boolean)];

    categoryMenu.innerHTML = categories.map(cat => `
        <button type="button" class="category-chip ${cat === activeCategory ? 'active' : ''}" data-category="${cat}" style="padding:8px 16px; margin:4px; border:1px solid #304B52; border-radius:20px; background:${cat === activeCategory ? '#304B52' : 'transparent'}; color:${cat === activeCategory ? '#FFFDF8' : '#304B52'}; font-weight:bold; cursor:pointer; text-transform:capitalize;">
            ${cat === "all" ? "All Items" : cat}
        </button>
    `).join("");

    categoryMenu.querySelectorAll(".category-chip").forEach(chip => {
        chip.addEventListener("click", (e) => {
            activeCategory = e.target.getAttribute("data-category");
            setupCategoryMenu(); // Refresh chip active states
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
                              product.category.toLowerCase().includes(searchQuery) ||
                              product.description.toLowerCase().includes(searchQuery);
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
        card.style.cssText = "background:#FFFDF8; border:1px solid #DCEFF2; border-radius:18px; padding:15px; box-sizing:border-box; cursor:pointer;";

        card.innerHTML = `
            <div class="product-img-wrap" style="width:100%; height:220px; background:#E8F1F2; border-radius:12px; overflow:hidden; display:flex; align-items:center; justify-content:center;">
                ${
                    product.image
                        ? `<img src="${product.image}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover;">`
                        : `<span style="font-size:40px;">🛍️</span>`
                }
            </div>

            <div style="padding: 12px 0 5px 0;">
                <small style="color:#6F858A; text-transform:uppercase; font-size:11px; font-weight:bold;">${product.category || ""}</small>
                <h3 style="color:#304B52; margin: 6px 0; font-size: 15px;">${product.name}</h3>
                <strong style="color:#304B52; font-size:15px;">₦${product.price.toLocaleString()}</strong>
                
                <button
                    type="button"
                    class="add-to-cart-btn"
                    style="display:block; width:100%; margin-top:12px; padding:10px; background:#304B52; color:white; border:none; border-radius:15px; font-weight:bold; cursor:pointer;"
                >
                    ADD TO CART
                </button>
            </div>
        `;

        // Click on product card (except button) opens product detail description modal
        card.addEventListener("click", (e) => {
            if (!e.target.classList.contains("add-to-cart-btn")) {
                openProductModal(product);
            }
        });

        // Add to Cart button
        card.querySelector(".add-to-cart-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            addToCart(product);
        });

        grid.appendChild(card);
    });
}

// --- PRODUCT DESCRIPTION MODAL ---
function openProductModal(product) {
    const existing = document.getElementById("productDetailModal");
    if (existing) existing.remove();

    const modal = document.createElement("div");
    modal.id = "productDetailModal";
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(0,0,0,0.6); display: flex; align-items: center;
        justify-content: center; z-index: 10000; padding: 20px; box-sizing: border-box;
    `;

    modal.innerHTML = `
        <div style="background: #FFFDF8; border-radius: 24px; padding: 30px; max-width: 450px; width: 100%; position: relative; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
            <button id="closeProductModal" style="position: absolute; top: 15px; right: 20px; background: none; border: none; font-size: 24px; cursor: pointer; color: #304B52;">×</button>
            <div style="width: 100%; height: 260px; background: #E8F1F2; border-radius: 16px; overflow: hidden; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                ${
                    product.image
                        ? `<img src="${product.image}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover;">`
                        : `<span style="font-size:50px;">🛍️</span>`
                }
            </div>
            <small style="color:#6F858A; text-transform:uppercase; font-size:12px; font-weight:bold;">${product.category}</small>
            <h2 style="color:#304B52; margin: 6px 0 10px 0; font-size: 20px;">${product.name}</h2>
            <strong style="color:#304B52; font-size: 18px;">₦${product.price.toLocaleString()}</strong>
            <p style="color:#6F858A; margin: 15px 0; font-size: 14px; line-height: 1.5;">${product.description}</p>
            <button id="modalAddToCart" style="width: 100%; padding: 14px; background: #304B52; color: white; border: none; border-radius: 20px; font-weight: bold; font-size: 15px; cursor: pointer;">ADD TO CART</button>
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

// --- CART FUNCTIONS ---
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
        cartItems.innerHTML = `<p style="text-align:center; color:#6F858A;">Your cart is empty.</p>`;
        cartTotal.textContent = "₦0";
        return;
    }

    let total = 0;
    cartItems.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        return `
            <div style="display:flex; align-items:center; gap:12px; background:#FFFDF8; padding:12px; border:1px solid #DCEFF2; border-radius:14px;">
                <img src="${item.image || ''}" style="width:50px; height:50px; object-fit:cover; border-radius:8px; background:#E8F1F2;" alt="${item.name}">
                <div style="flex:1;">
                    <h4 style="margin:0; font-size:14px; color:#304B52;">${item.name}</h4>
                    <small style="color:#6F858A;">₦${item.price.toLocaleString()} x ${item.quantity}</small>
                </div>
                <strong style="color:#304B52; font-size:14px;">₦${itemTotal.toLocaleString()}</strong>
                <button type="button" class="remove-cart-item" data-id="${item.id}" style="background:none; border:none; color:#dc3545; font-weight:bold; cursor:pointer; font-size:18px;">×</button>
            </div>
        `;
    }).join("");

    cartTotal.textContent = `₦${total.toLocaleString()}`;

    cartItems.querySelectorAll(".remove-cart-item").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.target.getAttribute("data-id");
            removeFromCart(id);
        });
    });
}

function showSmallMessage(message) {
    const old = document.getElementById("collectiveSmallMessage");
    if (old) old.remove();

    const box = document.createElement("div");
    box.id = "collectiveSmallMessage";
    box.style.cssText = `
        position:fixed; bottom:25px; left:50%; transform:translateX(-50%);
        z-index:20000; background:#304B52; color:white; padding:12px 22px;
        border-radius:25px; font-size:13px; box-shadow:0 8px 25px rgba(0,0,0,.15);
    `;
    box.textContent = message;
    document.body.appendChild(box);

    setTimeout(() => { if (box.parentNode) box.remove(); }, 2200);
}

// --- INITIAL EVENT LISTENERS ---
document.addEventListener("DOMContentLoaded", () => {
    updateCartDisplay();

    // Cart Popup Listeners
    const cartBtn = document.getElementById("cartBtn");
    const cartPopup = document.getElementById("cartPopup");
    const closeCart = document.getElementById("closeCart");

    if (cartBtn && cartPopup) {
        cartBtn.addEventListener("click", () => {
            renderCartPopup();
            cartPopup.style.display = "flex";
        });
    }

    if (closeCart && cartPopup) {
        closeCart.addEventListener("click", () => {
            cartPopup.style.display = "none";
        });
    }

    // Category Button Toggle Listener
    const categoryBtn = document.getElementById("categoryBtn");
    const categoryMenu = document.getElementById("categoryMenu");
    if (categoryBtn && categoryMenu) {
        categoryBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const currentDisplay = window.getComputedStyle(categoryMenu).display;
            categoryMenu.style.display = currentDisplay === "none" ? "flex" : "none";
        });
    }

    // Search Input & Button Listeners
    const searchInput = document.getElementById("productSearch");
    const searchBtn = document.getElementById("searchButton");

    if (searchInput) {
        searchInput.addEventListener("input", filterAndRenderProducts);
    }
    if (searchBtn) {
        searchBtn.addEventListener("click", filterAndRenderProducts);
    }
});
