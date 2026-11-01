/* =========================================================
   THE COLLECTIVE.CO — SHOP SYSTEM
   Products are managed through the Admin Dashboard.
========================================================= */

/* ========================= FIREBASE ========================= */

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

(async function () {
    try {
        const { initializeApp } = await import(
            "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js"
        );

        const {
            getFirestore,
            collection,
            addDoc,
            getDocs,
            query,
            where,
            updateDoc,
            setDoc,
            doc
        } = await import(
            "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js"
        );

        const app = initializeApp(firebaseConfig);

        firebaseDB = {
            db: getFirestore(app),
            collection,
            addDoc,
            getDocs,
            query,
            where,
            updateDoc,
            setDoc,
            doc
        };

        console.log("Firebase connected.");

        await loadProductsFromFirebase();

        startOrderStatusSync();

    } catch (error) {
        console.error("Firebase connection error:", error);
    }
})();


/* ========================= FIRESTORE PRODUCTS ========================= */

/*
   Products are created and managed in admin.html.
   The shop loads products from the Firestore products collection.
*/

let productCatalog = [];

window.collectiveProductCatalog = productCatalog;

async function loadProductsFromFirebase() {
    if (!firebaseDB?.db) return;

    try {
        const snapshot = await firebaseDB.getDocs(
            firebaseDB.collection(firebaseDB.db, "products")
        );

        productCatalog = snapshot.docs.map(docSnap => {
            const data = docSnap.data() || {};

            return {
                ...data,
                id: data.id || docSnap.id
            };
        }).filter(product => product && product.id);

        window.collectiveProductCatalog = productCatalog;

        renderProducts(productCatalog);

    } catch (error) {
        console.error(
            "Could not load products from Firebase:",
            error
        );

        productCatalog = [];

        window.collectiveProductCatalog = productCatalog;

        renderProducts(productCatalog);
    }
}


/* ========================= STORAGE ========================= */

const CART_KEY = "collectiveCart";

const ORDER_KEY = "collectiveCurrentOrder";

const ORDER_NUMBER_KEY = "collectiveCurrentOrderNumber";


/* ========================= HELPERS ========================= */

function getCart() {
    try {
        const cart = JSON.parse(
            localStorage.getItem(CART_KEY) || "[]"
        );

        return Array.isArray(cart) ? cart : [];

    } catch {
        return [];
    }
}


function saveCart(cart) {
    localStorage.setItem(
        CART_KEY,
        JSON.stringify(cart)
    );

    updateCartDisplay();
}


function getCartTotal() {
    return getCart().reduce(
        (total, item) => {
            return total +
                Number(item.price || 0) *
                Number(item.quantity || 1);
        },
        0
    );
}


/* ========================= ORDER NUMBER ========================= */

function generateOrderNumber() {
    const now = new Date();

    const date =
        now.getFullYear().toString().slice(-2) +
        String(now.getMonth() + 1).padStart(2, "0") +
        String(now.getDate()).padStart(2, "0");

    const random = Math.floor(
        100000 + Math.random() * 900000
    );

    return `TC-${date}-${random}`;
}


/* ========================= CART ========================= */

function updateCartDisplay() {
    const cart = getCart();

    const count = document.getElementById("cartCount");

    const items = document.getElementById("cartItems");

    const totalElement = document.getElementById("cartTotal");

    if (count) {
        count.textContent = cart.reduce(
            (total, item) =>
                total + Number(item.quantity || 1),
            0
        );
    }

    if (items) {
        items.innerHTML = "";

        if (cart.length === 0) {
            items.innerHTML = `
                <p class="empty-cart">
                    Your cart is empty.
                </p>
            `;
        }

        cart.forEach((item, index) => {
            const quantity = Number(item.quantity || 1);

            const itemTotal =
                Number(item.price || 0) * quantity;

            const div = document.createElement("div");

            div.className = "cart-item";

            div.innerHTML = `
                <div class="cart-item-info">

                    <h3>
                        ${item.name || item.listing || "Product"}
                    </h3>

                    <small>
                        ${item.category || ""}
                    </small>

                    ${
                        item.size
                            ? `<small>Size: ${item.size}</small>`
                            : ""
                    }

                    ${
                        item.color
                            ? `<small>Shade: ${item.color}</small>`
                            : ""
                    }

                    <strong>
                        ₦${Number(
                            item.price || 0
                        ).toLocaleString()}
                    </strong>

                </div>

                <div class="cart-item-actions">

                    <div class="cart-quantity">

                        <button
                            type="button"
                            data-action="minus"
                            data-index="${index}"
                        >
                            −
                        </button>

                        <span>
                            ${quantity}
                        </span>

                        <button
                            type="button"
                            data-action="plus"
                            data-index="${index}"
                        >
                            +
                        </button>

                    </div>

                    <strong class="cart-item-total">
                        ₦${itemTotal.toLocaleString()}
                    </strong>

                    <button
                        type="button"
                        class="remove-cart-item"
                        data-index="${index}"
                    >
                        Remove
                    </button>

                </div>
            `;

            items.appendChild(div);
        });
    }

    if (totalElement) {
        totalElement.textContent =
            `₦${getCartTotal().toLocaleString()}`;
    }
}


function changeCartQuantity(index, amount) {
    const cart = getCart();

    if (!cart[index]) return;

    const next =
        Number(cart[index].quantity || 1) + amount;

    if (next <= 0) {
        cart.splice(index, 1);
    } else {
        cart[index].quantity = Math.min(next, 10);
    }

    saveCart(cart);
}


function removeCartItem(index) {
    const cart = getCart();

    cart.splice(index, 1);

    saveCart(cart);
}


/* ========================= ADD TO CART ========================= */

function addToCart(product, color = "", size = "") {
    const cart = getCart();

    const existing = cart.find(
        item =>
            item.id === product.id &&
            item.color === color &&
            item.size === size
    );

    if (existing) {
        existing.quantity = Math.min(
            Number(existing.quantity || 1) + 1,
            10
        );
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            listing: product.listing,
            category: product.category,
            price: product.price,
            size,
            color,
            quantity: 1
        });
    }

    saveCart(cart);

    showSmallMessage(
        `${product.name} added to cart.`
    );
}


/* ========================= MESSAGE ========================= */

function showSmallMessage(message) {
    const old = document.getElementById(
        "collectiveSmallMessage"
    );

    if (old) old.remove();

    const box = document.createElement("div");

    box.id = "collectiveSmallMessage";

    box.style.cssText = `
        position:fixed;
        bottom:25px;
        left:50%;
        transform:translateX(-50%);
        z-index:20000;
        background:#304B52;
        color:white;
        padding:12px 22px;
        border-radius:25px;
        font-size:13px;
        box-shadow:0 8px 25px rgba(0,0,0,.15);
    `;

    box.textContent = message;

    document.body.appendChild(box);

    setTimeout(() => {
        if (box.parentNode) {
            box.remove();
        }
    }, 2200);
}


/* ========================= MIX PRODUCTS ========================= */

function shuffleProducts(products) {
    const array = [...products];

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {
        const j = Math.floor(
            Math.random() * (i + 1)
        );

        [
            array[i],
            array[j]
        ] = [
            array[j],
            array[i]
        ];
    }

    return array;
}


/* ========================= PRODUCT DISPLAY ========================= */

function renderProducts(products = productCatalog) {
    const grid =
        document.getElementById("productGrid") ||
        document.getElementById("productsGrid") ||
        document.querySelector(".product-grid") ||
        document.querySelector(".products-grid");

    const noProducts = document.querySelector(".no-products");

    if (!grid) {
        console.error("Product grid was not found.");
        return;
    }

    grid.innerHTML = "";

    if (!products || products.length === 0) {
        if (noProducts) {
            noProducts.style.display = "block";
        }

        return;
    }

    if (noProducts) {
        noProducts.style.display = "none";
    }

    const displayProducts =
        products === productCatalog
            ? shuffleProducts(products)
            : products;

    displayProducts.slice(0, 60).forEach(product => {
        const card = document.createElement("div");

        card.className = "product-card";

        let colorHTML = "";

        if (
            Array.isArray(product.colors) &&
            product.colors.length
        ) {
            colorHTML = `
                <select
                    class="product-color"
                    data-product-id="${product.id}"
                >

                    <option value="">
                        Select color
                    </option>

                    ${product.colors.map(
                        color => `
                            <option value="${color}">
                                ${color}
                            </option>
                        `
                    ).join("")}

                </select>
            `;
        }

        let sizeHTML = "";

        if (
            Array.isArray(product.sizes) &&
            product.sizes.length
        ) {
            sizeHTML = `
                <select
                    class="product-size"
                    data-product-id="${product.id}"
                >

                    <option value="">
                        Select size
                    </option>

                    ${product.sizes.map(
                        size => `
                            <option value="${size}">
                                ${size}
                            </option>
                        `
                    ).join("")}

                </select>
            `;
        } else if (product.size) {
            sizeHTML = `<p>Size: ${product.size}</p>`;
        }

        const stock = Number(product.stock ?? 10);

        card.innerHTML = `
            <div class="product-image">
                ${
                    product.image || product.imageUrl
                        ? `<img
                            src="${product.image || product.imageUrl}"
                            alt="${product.name}"
                            style="width:100%;height:100%;object-fit:cover;border-radius:inherit;"
                        >`
                        : `🛍️`
                }
            </div>

            <div class="product-information">

                <small>
                    ${product.category || ""}
                </small>

                <h3>
                    ${product.name || ""}
                </h3>

                <p>
                    ${product.description || ""}
                </p>

                ${sizeHTML}

                <strong class="product-price">
                    ₦${Number(
                        product.price || 0
                    ).toLocaleString()}
                </strong>

                <div class="stock-status">
                    ${
                        stock > 0
                            ? "In stock"
                            : "Out of stock"
                    }
                </div>

                ${colorHTML}

                <button
                    type="button"
                    class="add-to-cart"
                    data-product-id="${product.id}"
                    ${
                        stock <= 0
                            ? "disabled"
                            : ""
                    }
                >
                    ${
                        stock > 0
                            ? "ADD TO CART"
                            : "OUT OF STOCK"
                    }
                </button>

            </div>
        `;

        card.querySelector(".add-to-cart")
            ?.addEventListener("click", () => {
                const colorSelect =
                    card.querySelector(".product-color");

                const sizeSelect =
                    card.querySelector(".product-size");

                const color =
                    colorSelect ? colorSelect.value : "";

                const size =
                    sizeSelect ? sizeSelect.value : "";

                if (colorSelect && !color) {
                    alert("Please select a color.");
                    return;
                }

                if (sizeSelect && !size) {
                    alert("Please select a size.");
                    return;
                }

                addToCart(product, color, size);
            });

        grid.appendChild(card);
    });
}


/* ========================= SEARCH ========================= */

function setupSearch() {
    const input = document.getElementById("productSearch");

    const button = document.getElementById("searchButton");

    if (!input) return;

    function search() {
        const term = input.value.trim().toLowerCase();

        const results = productCatalog.filter(
            product =>
                (product.name || "")
                    .toLowerCase()
                    .includes(term) ||
                (product.category || "")
                    .toLowerCase()
                    .includes(term)
        );

        renderProducts(
            term ? results : productCatalog
        );
    }

    input.addEventListener("input", search);

    button?.addEventListener("click", search);
}


/* ========================= CATEGORY ========================= */

function setupCategories() {
    const menu = document.getElementById("categoryMenu");

    const button = document.getElementById("categoryBtn");

    if (!menu) return;

    const categories = [
        "All Products",
        "Skincare",
        "Accessories",
        "Clothing",
        "Shoes",
        "Bags",
        "Others"
    ];

    menu.innerHTML = "";

    categories.forEach(category => {
        const btn = document.createElement("button");

        btn.className = "category-button";

        if (category === "All Products") {
            btn.classList.add("selected");
        }

        btn.textContent = category;

        btn.addEventListener("click", () => {
            document.querySelectorAll(".category-button")
                .forEach(item => {
                    item.classList.remove("selected");
                });

            btn.classList.add("selected");

            if (category === "All Products") {
                renderProducts(productCatalog);
            } else {
                renderProducts(
                    productCatalog.filter(
                        product =>
                            product.category === category
                    )
                );
            }
        });

        menu.appendChild(btn);
    });

    button?.addEventListener("click", event => {
        event.preventDefault();

        menu.style.display =
            menu.style.display === "flex"
                ? "none"
                : "flex";
    });
}


/* ========================= CART POPUP ========================= */

function openCart() {
    document
        .getElementById("cartPopup")
        ?.classList.add("open");
}


function closeCart() {
    document
        .getElementById("cartPopup")
        ?.classList.remove("open");
}


function setupCart() {
    document
        .getElementById("cartBtn")
        ?.addEventListener("click", openCart);

    document
        .getElementById("closeCart")
        ?.addEventListener("click", closeCart);

    document
        .getElementById("cartItems")
        ?.addEventListener("click", event => {
            const button = event.target.closest("button");

            if (!button) return;

            const index = Number(button.dataset.index);

            if (button.dataset.action === "plus") {
                changeCartQuantity(index, 1);
            }

            if (button.dataset.action === "minus") {
                changeCartQuantity(index, -1);
            }

            if (button.classList.contains("remove-cart-item")) {
                removeCartItem(index);
            }
        });
}


/* ========================= CHECKOUT ========================= */

let checkoutOpening = false;

function checkout() {
    if (checkoutOpening) return;

    checkoutOpening = true;

    setTimeout(() => {
        checkoutOpening = false;
    }, 700);

    const cart = getCart();

    if (!cart.length) {
        showSmallMessage("Your cart is empty.");
        return;
    }

    const loggedIn =
        localStorage.getItem("collectiveLoggedIn") === "true" ||
        localStorage.getItem("loggedIn") === "true";

    if (!loggedIn) {
        alert("Please log in before checking out.");

        window.location.href = "login.html";

        return;
    }

    createCheckoutModal();
}


window.checkout = checkout;

window.getCartTotal = getCartTotal;

window.updateCartDisplay = updateCartDisplay;


/* ========================= CHECKOUT MODAL ========================= */

function createCheckoutModal() {
    const old = document.getElementById(
        "collectiveCheckoutModal"
    );

    if (old) old.remove();

    const cart = getCart();

    const paidTotal = getCartTotal();

    const shippingFee = 0;

    const finalTotal = paidTotal + shippingFee;

    const modal = document.createElement("div");

    modal.id = "collectiveCheckoutModal";

    modal.style.cssText = `
        position:fixed;
        inset:0;
        z-index:100000;
        background:rgba(48,75,82,.45);
        display:flex;
        align-items:center;
        justify-content:center;
        padding:20px;
        box-sizing:border-box;
    `;

    modal.innerHTML = `
        <div style="
            width:min(620px,100%);
            max-height:92vh;
            overflow-y:auto;
            background:#FFFDF8;
            border-radius:25px;
            padding:32px;
            box-sizing:border-box;
            box-shadow:0 18px 50px rgba(0,0,0,.2);
        ">

            <div style="
                display:flex;
                justify-content:space-between;
                align-items:center;
            ">

                <h2 style="color:#304B52;">
                    Checkout
                </h2>

                <button
                    id="closeCheckoutModal"
                    type="button"
                    style="
                        border:none;
                        background:none;
                        color:#304B52;
                        font-size:30px;
                        cursor:pointer;
                    "
                >
                    ×
                </button>

            </div>

            <div style="margin-top:20px;">

                <h3 style="
                    color:#304B52;
                    margin-bottom:15px;
                ">
                    Delivery information
                </h3>

                <label style="
                    display:block;
                    color:#71858A;
                    font-size:12px;
                    font-weight:bold;
                    margin-bottom:6px;
                ">
                    FULL NAME
                </label>

                <input
                    id="checkoutFullName"
                    type="text"
                    placeholder="Enter your full name"
                    style="
                        width:100%;
                        padding:13px;
                        border:1px solid #E6E1D8;
                        border-radius:12px;
                        background:#F7F4EE;
                        color:#304B52;
                        outline:none;
                        margin-bottom:15px;
                        box-sizing:border-box;
                    "
                >

                <label style="
                    display:block;
                    color:#71858A;
                    font-size:12px;
                    font-weight:bold;
                    margin-bottom:6px;
                ">
                    PHONE NUMBER
                </label>

                <input
                    id="checkoutPhone"
                    type="tel"
                    placeholder="Enter your phone number"
                    style="
                        width:100%;
                        padding:13px;
                        border:1px solid #E6E1D8;
                        border-radius:12px;
                        background:#F7F4EE;
                        color:#304B52;
                        outline:none;
                        margin-bottom:15px;
                        box-sizing:border-box;
                    "
                >

                <label style="
                    display:block;
                    color:#71858A;
                    font-size:12px;
                    font-weight:bold;
                    margin-bottom:6px;
                ">
                    DELIVERY ADDRESS
                </label>

                <textarea
                    id="checkoutAddress"
                    placeholder="Enter the address where your order should be delivered"
                    style="
                        width:100%;
                        min-height:100px;
                        padding:13px;
                        border:1px solid #E6E1D8;
                        border-radius:12px;
                        background:#F7F4EE;
                        color:#304B52;
                        outline:none;
                        margin-bottom:22px;
                        box-sizing:border-box;
                        resize:vertical;
                    "
                ></textarea>

                <h3 style="
                    color:#304B52;
                    margin-bottom:15px;
                ">
                    Your order
                </h3>

                ${cart.map(item => `
                    <div style="
                        display:flex;
                        justify-content:space-between;
                        gap:15px;
                        padding:12px 0;
                        border-bottom:1px solid #E8F1F2;
                        color:#304B52;
                    ">

                        <span>
                            ${item.name}
                            × ${item.quantity || 1}
                            ${
                                item.size
                                    ? ` • Size: ${item.size}`
                                    : ""
                            }
                            ${
                                item.color
                                    ? ` • ${item.color}`
                                    : ""
                            }
                        </span>

                        <strong>
                            ₦${(
                                Number(item.price || 0) *
                                Number(item.quantity || 1)
                            ).toLocaleString()}
                        </strong>

                    </div>
                `).join("")}

                <div style="
                    margin-top:25px;
                    padding-top:20px;
                    border-top:1px solid #DCEFF2;
                    color:#304B52;
                ">

                    <div style="
                        display:flex;
                        justify-content:space-between;
                        margin-bottom:10px;
                    ">
                        <span>Subtotal</span>
                        <strong>
                            ₦${paidTotal.toLocaleString()}
                        </strong>
                    </div>

                    <div style="
                        display:flex;
                        justify-content:space-between;
                        margin-bottom:10px;
                    ">
                        <span>Delivery</span>
                        <strong>
                            ₦${shippingFee.toLocaleString()}
                        </strong>
                    </div>

                    <div style="
                        display:flex;
                        justify-content:space-between;
                        font-size:19px;
                        margin-top:15px;
                    ">
                        <strong>Total</strong>
                        <strong>
                            ₦${finalTotal.toLocaleString()}
                        </strong>
                    </div>

                </div>

                <p
                    id="checkoutValidation"
                    style="
                        display:none;
                        color:#B23A48;
                        font-size:13px;
                        margin-top:15px;
                    "
                ></p>

                <button
                    id="continueToPayment"
                    type="button"
                    style="
                        width:100%;
                        margin-top:20px;
                        padding:15px;
                        border:none;
                        border-radius:25px;
                        background:#304B52;
                        color:white;
                        font-weight:bold;
                        cursor:pointer;
                    "
                >
                    CONTINUE TO PAYMENT
                </button>

            </div>
        </div>
    `;

    document.body.appendChild(modal);

    document
        .getElementById("closeCheckoutModal")
        ?.addEventListener("click", () => modal.remove());

    document
        .getElementById("continueToPayment")
        ?.addEventListener("click", () => {
            const fullName = document
                .getElementById("checkoutFullName")
                .value
                .trim();

            const phone = document
                .getElementById("checkoutPhone")
                .value
                .trim();

            const address = document
                .getElementById("checkoutAddress")
                .value
                .trim();

            const validation = document.getElementById(
                "checkoutValidation"
            );

            if (!fullName || !phone || !address) {
                validation.textContent =
                    "Please fill in your full name, phone number and delivery address.";

                validation.style.display = "block";

                return;
            }

            localStorage.setItem(
                "collectiveCheckoutCustomer",
                JSON.stringify({
                    fullName,
                    phone,
                    address
                })
            );

            localStorage.setItem(
                "collectiveCheckoutShippingFee",
                String(shippingFee)
            );

            modal.remove();

            showPaymentModal();
        });
}


/* ========================= PAYMENT ========================= */

function showPaymentModal() {
    const old = document.getElementById(
        "collectivePaymentModal"
    );

    if (old) old.remove();

    const modal = document.createElement("div");

    modal.id = "collectivePaymentModal";

    const total = getCartTotal();

    const shippingFee = Number(
        localStorage.getItem(
            "collectiveCheckoutShippingFee"
        ) || "0"
    );

    const finalTotal = total + shippingFee;

    modal.style.cssText = `
        position:fixed;
        inset:0;
        z-index:100001;
        background:rgba(48,75,82,.45);
        display:flex;
        align-items:center;
        justify-content:center;
        padding:20px;
        box-sizing:border-box;
    `;

    modal.innerHTML = `
        <div style="
            width:min(550px,100%);
            max-height:90vh;
            overflow-y:auto;
            background:#FFFDF8;
            border-radius:25px;
            padding:32px;
            box-sizing:border-box;
            box-shadow:0 18px 50px rgba(0,0,0,.2);
        ">

            <h2 style="color:#304B52;">
                Payment
            </h2>

            <p style="color:#6F858A;">
                Amount to pay:
                <strong style="color:#304B52;">
                    ₦${finalTotal.toLocaleString()}
                </strong>
            </p>

            <div style="
                background:#E8F1F2;
                border-radius:18px;
                padding:20px;
                margin:20px 0;
                color:#304B52;
                line-height:1.8;
            ">

                <strong>GTBank</strong><br>

                Account Name:
                <strong>
                    ADESANYA EYINJU CAYLA
                </strong>

                <br>

                Account Number:
                <strong>
                    0708648701
                </strong>

                <br><br>

                <strong>SmartCash PSB</strong><br>

                Account Name:
                <strong>
                    Ololade Adesanya
                </strong>

                <br>

                Account Number:
                <strong>
                    9123930679
                </strong>

            </div>

            <p style="
                color:#6F858A;
                font-size:13px;
                line-height:1.6;
            ">
                After making your payment, click
                the button below so your order can
                be sent for approval.
            </p>

            <button
                id="paymentMadeButton"
                type="button"
                style="
                    width:100%;
                    padding:15px;
                    border:none;
                    border-radius:25px;
                    background:#304B52;
                    color:white;
                    font-weight:bold;
                    cursor:pointer;
                "
            >
                I HAVE MADE PAYMENT
            </button>

            <button
                id="cancelPaymentButton"
                type="button"
                style="
                    width:100%;
                    margin-top:10px;
                    padding:13px;
                    border:1px solid #304B52;
                    border-radius:25px;
                    background:transparent;
                    color:#304B52;
                    cursor:pointer;
                "
            >
                CANCEL
            </button>

        </div>
    `;

    document.body.appendChild(modal);

    document
        .getElementById("cancelPaymentButton")
        ?.addEventListener("click", () => modal.remove());

    document
        .getElementById("paymentMadeButton")
        ?.addEventListener("click", async () => {
            const button = document.getElementById(
                "paymentMadeButton"
            );

            if (!button) return;

            button.disabled = true;

            button.textContent = "SUBMITTING ORDER...";

            const success = await createPendingOrder();

            if (success) {
                modal.remove();

                showSmallMessage(
                    "Order submitted successfully."
                );

            } else {
                button.disabled = false;

                button.textContent = "I HAVE MADE PAYMENT";

                alert(
                    "The order could not be submitted. Please try again."
                );
            }
        });
}


/* =========================================================
   FIREBASE ORDER
========================================================= */

async function createPendingOrder() {
    const cart = getCart();

    const subtotal = getCartTotal();

    const shippingFee = Number(
        localStorage.getItem(
            "collectiveCheckoutShippingFee"
        ) || "0"
    );

    const total = subtotal + shippingFee;

    let checkoutCustomer = {};

    try {
        checkoutCustomer = JSON.parse(
            localStorage.getItem(
                "collectiveCheckoutCustomer"
            ) || "{}"
        );

    } catch {
        checkoutCustomer = {};
    }

    const storedUser =
        localStorage.getItem("collectiveUser") ||
        localStorage.getItem("user") ||
        "";

    const fullName =
        checkoutCustomer.fullName ||
        storedUser ||
        "Customer";

    const phone = checkoutCustomer.phone || "";

    const address = checkoutCustomer.address || "";

    const nameParts = fullName.trim().split(/\s+/);

    const firstName = nameParts.shift() || "";

    const lastName = nameParts.join(" ") || "";

    const orderNumber = generateOrderNumber();

    const createdAt = new Date().toISOString();

    const orderItems = cart.map(item => {
        const quantity = Number(item.quantity || 1);

        const unitPrice = Number(item.price || 0);

        return {
            id: item.id || "",

            name:
                item.name ||
                item.listing ||
                "Product",

            listing:
                item.listing ||
                item.name ||
                "",

            category:
                item.category ||
                "",

            quantity,

            unitPrice,

            price: unitPrice,

            size: item.size || "",

            color: item.color || "",

            lineTotal: unitPrice * quantity
        };
    });

    const customer = {
        fullName,
        firstName,
        lastName,
        phone,
        address
    };

    const order = {
        orderNumber,

        customer,

        firstName,

        lastName,

        fullName,

        phone,

        address,

        shippingAddress: address,

        deliveryAddress: address,

        items: orderItems,

        subtotal,

        originalTotal: subtotal,

        shippingFee,

        shipping: {
            fee: shippingFee,
            address,
            status: "processing"
        },

        total,

        paidTotal: total,

        paymentMethod: "Bank Transfer",

        paymentStatus: "payment-checking",

        status: "payment-checking",

        deliveryStatus: "processing",

        createdAt,

        orderDate: createdAt,

        updatedAt: createdAt
    };

    localStorage.setItem(
        ORDER_NUMBER_KEY,
        orderNumber
    );

    localStorage.setItem(
        ORDER_KEY,
        JSON.stringify(order)
    );

    if (!firebaseDB?.db) {
        localStorage.setItem(
            "collectivePendingOrder",
            JSON.stringify(order)
        );

        return true;
    }

    try {
        const orderRef = await firebaseDB.addDoc(
            firebaseDB.collection(
                firebaseDB.db,
                "orders"
            ),
            order
        );

        localStorage.setItem(
            "collectiveFirebaseOrderId",
            orderRef.id
        );

        localStorage.removeItem(CART_KEY);

        localStorage.removeItem(
            "collectiveCheckoutCustomer"
        );

        localStorage.removeItem(
            "collectiveCheckoutShippingFee"
        );

        updateCartDisplay();

        startOrderStatusSync();

        return true;

    } catch (error) {
        console.error(
            "Could not save order:",
            error
        );

        localStorage.setItem(
            "collectivePendingOrder",
            JSON.stringify(order)
        );

        return false;
    }
}


/* =========================================================
   ORDER STATUS SYNC
========================================================= */

let orderStatusSyncStarted = false;

async function checkCurrentOrderStatus() {
    if (!firebaseDB?.db) return;

    const orderNumber = localStorage.getItem(
        ORDER_NUMBER_KEY
    );

    if (!orderNumber) return;

    try {
        const ordersRef = firebaseDB.collection(
            firebaseDB.db,
            "orders"
        );

        const q = firebaseDB.query(
            ordersRef,
            firebaseDB.where(
                "orderNumber",
                "==",
                orderNumber
            )
        );

        const snapshot = await firebaseDB.getDocs(q);

        if (snapshot.empty) return;

        const orderDoc = snapshot.docs[0];

        const latestOrder = orderDoc.data();

        localStorage.setItem(
            ORDER_KEY,
            JSON.stringify(latestOrder)
        );

        localStorage.setItem(
            "collectiveOrderStatus",
            latestOrder.status || "payment-checking"
        );

        localStorage.setItem(
            "collectivePaymentStatus",
            latestOrder.paymentStatus ||
            latestOrder.status ||
            "payment-checking"
        );

        localStorage.setItem(
            "collectiveDeliveryStatus",
            latestOrder.deliveryStatus ||
            latestOrder.status ||
            "processing"
        );

        window.collectiveCurrentOrder = latestOrder;

    } catch (error) {
        console.error(
            "Could not check order status:",
            error
        );
    }
}


function startOrderStatusSync() {
    if (orderStatusSyncStarted) return;

    orderStatusSyncStarted = true;

    setTimeout(() => {
        checkCurrentOrderStatus();
    }, 1000);

    setInterval(() => {
        checkCurrentOrderStatus();
    }, 5000);
}


/* ========================= CHECKOUT BUTTON ========================= */

function setupCheckout() {
    const button = document.getElementById("checkoutBtn");

    if (!button) return;

    button.addEventListener("click", event => {
        event.preventDefault();

        event.stopPropagation();

        checkout();
    });
}


/* ========================= STORAGE SYNC ========================= */

function setupStorageSync() {
    window.addEventListener("storage", event => {
        if (
            [
                CART_KEY,
                ORDER_KEY
            ].includes(event.key)
        ) {
            updateCartDisplay();
        }
    });

    setInterval(() => {
        updateCartDisplay();
    }, 1000);
}


/* ========================= INITIALISE ========================= */

document.addEventListener("DOMContentLoaded", () => {
    console.log("THE COLLECTIVE.CO shop loaded.");

    renderProducts(productCatalog);

    setupSearch();

    setupCategories();

    setupCart();

    setupCheckout();

    updateCartDisplay();

    setupStorageSync();

    startOrderStatusSync();
});
