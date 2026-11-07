/* =========================================================
   THE COLLECTIVE.CO — SHOP SYSTEM
   Connected directly to Firebase Firestore
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

(async function () {
    try {
        const { initializeApp } = await import(
            "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"
        );

        const {
            getFirestore,
            collection,
            getDocs
        } = await import(
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

async function loadProductsFromFirebase() {
    const grid = document.getElementById("productGrid");
    const noProducts = document.querySelector(".no-products");

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
                category: data.category || "",
                price: Number(data.price || 0),
                image: data.imageUrl || data.image || ''
            };
        });

        renderProducts(productCatalog);

    } catch (error) {
        console.error("Could not load products from Firebase:", error);
        if (noProducts) noProducts.style.display = "block";
        if (grid) grid.innerHTML = `<p style="text-align:center; grid-column: 1/-1; padding: 40px; color:#6F858A;">Error loading products.</p>`;
    }
}

function renderProducts(products = productCatalog) {
    const grid = document.getElementById("productGrid");
    const noProducts = document.querySelector(".no-products");

    if (!grid) return;

    grid.innerHTML = "";

    if (!products || products.length === 0) {
        if (noProducts) noProducts.style.display = "block";
        grid.innerHTML = `<p style="text-align:center; grid-column: 1/-1; padding: 40px; color:#6F858A;">No products available right now.</p>`;
        return;
    }

    if (noProducts) noProducts.style.display = "none";

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.style.cssText = "background:#FFFDF8; border:1px solid #DCEFF2; border-radius:18px; padding:15px; box-sizing:border-box;";

        card.innerHTML = `
            <div style="width:100%; height:220px; background:#E8F1F2; border-radius:12px; overflow:hidden; display:flex; align-items:center; justify-content:center;">
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
                    class="add-to-cart"
                    data-product-id="${product.id}"
                    style="display:block; width:100%; margin-top:12px; padding:10px; background:#304B52; color:white; border:none; border-radius:15px; font-weight:bold; cursor:pointer;"
                >
                    ADD TO CART
                </button>
            </div>
        `;

        card.querySelector(".add-to-cart").addEventListener("click", () => {
            addToCart(product);
        });

        grid.appendChild(card);
    });
}

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

function updateCartDisplay() {
    const count = document.getElementById("cartCount");
    if (count) {
        count.textContent = getCart().reduce((total, item) => total + Number(item.quantity || 1), 0);
    }
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

// Search functionality wiring
document.addEventListener("DOMContentLoaded", () => {
    updateCartDisplay();

    const searchInput = document.getElementById("productSearch");
    const searchBtn = document.getElementById("searchButton");

    if (searchInput) {
        const filterProducts = () => {
            const query = searchInput.value.toLowerCase().trim();
            const filtered = productCatalog.filter(p => 
                p.name.toLowerCase().includes(query) || 
                (p.category && p.category.toLowerCase().includes(query))
            );
            renderProducts(filtered);
        };

        searchInput.addEventListener("input", filterProducts);
        if (searchBtn) searchBtn.addEventListener("click", filterProducts);
    }
});
