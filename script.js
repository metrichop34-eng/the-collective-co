// ======================================================
// THE COLLECTIVE.CO
// COMPLETE SHOP SYSTEM
// CART + CHECKOUT + POINTS + FREE GIFTS + LOGIN
// FIREBASE ORDERS
// ======================================================


// ======================================================
// FIREBASE CONNECTION
// ======================================================

const firebaseReady = Promise.all([
    import("https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js"),
    import("https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js")
]).then(([firebaseApp, firestore]) => {

    const firebaseConfig = {
        apiKey: "AIzaSyCkavvOeD4GEtUsq4S-QuTU4ejedf8CiL8",
        authDomain: "the-collectiveco-orders.firebaseapp.com",
        projectId: "the-collectiveco-orders",
        storageBucket: "the-collectiveco-orders.firebasestorage.app",
        messagingSenderId: "543435699346",
        appId: "1:543435699346:web:886ff03c71fb546dc7a24b",
        measurementId: "G-7GP25TW6JH"
    };

    const app = firebaseApp.initializeApp(firebaseConfig);
    const db = firestore.getFirestore(app);

    return {
        db,
        addDoc: firestore.addDoc,
        collection: firestore.collection,
        getDocs: firestore.getDocs
    };
});


// ======================================================
// PRODUCT CATALOGUE
// ======================================================

const productCatalog = [

    // =========================
    // SKINCARE
    // =========================

    {
        name: "Men's Perfume",
        category: "Skincare",
        min: 12000,
        max: 20000,
        size: "100 ml",
        description: "A masculine perfume."
    },
    {
        name: "Body Butter",
        category: "Skincare",
        min: 5000,
        max: 9500
    },
    {
        name: "Sunscreen",
        category: "Skincare",
        min: 4000,
        max: 9000
    },
    {
        name: "Face Cleanser",
        category: "Skincare",
        min: 7500,
        max: 10000
    },
    {
        name: "Body Scrub",
        category: "Skincare",
        min: 4000,
        max: 8000
    },
    {
        name: "Face Serum",
        category: "Skincare",
        min: 1500,
        max: 4500
    },
    {
        name: "Lip Mask",
        category: "Skincare",
        min: 1000,
        max: 3000
    },
    {
        name: "Rhode Lip Gloss",
        category: "Skincare",
        min: 10000,
        max: 15000,
        colors: ["Clear", "Pink", "Brown"]
    },
    {
        name: "SHEGLAM Lip Gloss",
        category: "Skincare",
        min: 10000,
        max: 15000,
        colors: ["Clear", "Pink", "Nude", "Brown"]
    },
    {
        name: "USHAS Lip Gloss",
        category: "Skincare",
        min: 10000,
        max: 15000,
        colors: ["Clear", "Pink", "Nude", "Brown"]
    },
    {
        name: "Clear Normal Lip Gloss",
        category: "Skincare",
        min: 1000,
        max: 2000,
        colors: ["Clear"]
    },
    {
        name: "Lip Balm",
        category: "Skincare",
        min: 1000,
        max: 2000
    },
    {
        name: "Shower Gel",
        category: "Skincare",
        min: 12000,
        max: 12000
    },
    {
        name: "Men's Fragrance Perfume",
        category: "Skincare",
        min: 9000,
        max: 10000,
        size: "50 ml"
    },
    {
        name: "Women's Fragrance Perfume",
        category: "Skincare",
        min: 9000,
        max: 10000,
        size: "50 ml"
    },
    {
        name: "Body Lotion",
        category: "Skincare",
        min: 8000,
        max: 12000
    },
    {
        name: "Face Moisturizer",
        category: "Skincare",
        min: 3000,
        max: 7000
    },
    {
        name: "Face Toner",
        category: "Skincare",
        min: 6500,
        max: 10000
    },
    {
        name: "Body Oil",
        category: "Skincare",
        min: 6000,
        max: 10000
    },
    {
        name: "Face Mask",
        category: "Skincare",
        min: 1000,
        max: 4500
    },
    {
        name: "Lip Oil",
        category: "Skincare",
        min: 1000,
        max: 2000
    },
    {
        name: "Pimple Patch",
        category: "Skincare",
        min: 500,
        max: 1800
    },

    // =========================
    // ACCESSORIES
    // =========================

    {
        name: "Bead Bracelet Set",
        category: "Accessories",
        min: 3000,
        max: 6000,
        colors: ["Gold", "Silver", "Pink", "Black", "Mixed"]
    },
    {
        name: "Masculine Chain Bracelet",
        category: "Accessories",
        min: 1000,
        max: 3500,
        colors: ["Silver", "Gold", "Black"]
    },
    {
        name: "Chrome Heart Glasses",
        category: "Accessories",
        min: 15000,
        max: 20000,
        colors: ["Black", "Brown", "Clear"]
    },
    {
        name: "Glasses",
        category: "Accessories",
        min: 2000,
        max: 5000,
        colors: ["Black", "Brown", "Clear"]
    },
    {
        name: "Glasses Set of 3",
        category: "Accessories",
        min: 4000,
        max: 5000
    },
    {
        name: "Glasses Set of 5",
        category: "Accessories",
        min: 5000,
        max: 10000
    },
    {
        name: "Scrunchies",
        category: "Accessories",
        min: 1200,
        max: 1200,
        colors: ["Pink", "Black", "White", "Brown", "Mixed"]
    },
    {
        name: "Stanley Cup",
        category: "Accessories",
        min: 15000,
        max: 15000,
        colors: ["Pink", "Cream", "Blue", "Black", "Green"]
    },
    {
        name: "Body Floral Stanley Cup",
        category: "Accessories",
        min: 20000,
        max: 20000,
        colors: ["Pink", "Cream", "Blue", "Green"]
    },
    {
        name: "Headband",
        category: "Accessories",
        min: 1600,
        max: 1600,
        colors: ["Black", "White", "Pink", "Brown"]
    },
    {
        name: "Tote Bag",
        category: "Accessories",
        min: 10000,
        max: 20000,
        colors: ["Black", "Cream", "Brown", "Pink"]
    },
    {
        name: "Claw Clip",
        category: "Accessories",
        min: 2000,
        max: 2500,
        colors: ["Black", "Brown", "Cream", "Pink"]
    },
    {
        name: "Anklet",
        category: "Accessories",
        min: 1000,
        max: 2000,
        colors: ["Gold", "Silver"]
    },
    {
        name: "Necklace",
        category: "Accessories",
        min: 1000,
        max: 3500,
        colors: ["Gold", "Silver"]
    },
    {
        name: "Silver Bracelet",
        category: "Accessories",
        min: 3500,
        max: 3500
    },
    {
        name: "Gold Bracelet",
        category: "Accessories",
        min: 3500,
        max: 3500
    },
    {
        name: "Vacuum Cups",
        category: "Accessories",
        min: 10000,
        max: 20000,
        colors: ["Pink", "Blue", "Cream", "Black"]
    },

    // =========================
    // CLOTHING
    // =========================

    {
        name: "Plain Tops",
        category: "Clothing",
        min: 6500,
        max: 8000,
        sizes: ["S", "M", "L"],
        colors: ["Black", "White", "Grey", "Cream", "Pink", "Blue"]
    },
    {
        name: "Graphic Tops",
        category: "Clothing",
        min: 8000,
        max: 10000,
        sizes: ["S", "M", "L"],
        colors: ["Black", "White", "Grey", "Pink", "Blue"]
    },
    {
        name: "Tube Tops",
        category: "Clothing",
        min: 5000,
        max: 15000,
        sizes: ["S", "M", "L"],
        colors: ["Black", "White", "Pink", "Brown", "Cream"]
    },
    {
        name: "Jersey Tops",
        category: "Clothing",
        min: 8500,
        max: 8500,
        sizes: ["S", "M", "L"],
        colors: ["Black", "White", "Blue", "Red", "Green"]
    },
    {
        name: "Hoodies",
        category: "Clothing",
        min: 9500,
        max: 10000,
        sizes: ["S", "M", "L"],
        colors: ["Black", "White", "Grey", "Cream", "Brown"]
    },
    {
        name: "Zip-Up Hoodies",
        category: "Clothing",
        min: 9000,
        max: 15000,
        sizes: ["S", "M", "L"],
        colors: ["Black", "White", "Grey", "Cream", "Brown"]
    },
    {
        name: "Plain Sweatpants",
        category: "Clothing",
        min: 10000,
        max: 10000,
        sizes: ["S", "M", "L"],
        colors: ["Black", "Grey", "Cream", "Brown"]
    },
    {
        name: "Leopard Sweatpants",
        category: "Clothing",
        min: 15000,
        max: 15000,
        sizes: ["S", "M", "L"],
        colors: ["Brown", "Black"]
    },
    {
        name: "Designer Sweatpants",
        category: "Clothing",
        min: 20000,
        max: 20000,
        sizes: ["S", "M", "L"],
        colors: ["Black", "Grey", "Cream"]
    },
    {
        name: "Shorts",
        category: "Clothing",
        min: 10000,
        max: 10000,
        sizes: ["S", "M", "L"],
        colors: ["Black", "White", "Grey", "Blue"]
    },
    {
        name: "Jean Bum Shorts",
        category: "Clothing",
        min: 5000,
        max: 5000,
        sizes: ["S", "M", "L"],
        colors: ["Light Blue", "Dark Blue", "Black"]
    },
    {
        name: "Jeans",
        category: "Clothing",
        min: 10000,
        max: 10000,
        sizes: ["S", "M", "L"],
        colors: ["Light Blue", "Dark Blue", "Black"]
    },
    {
        name: "Designed Jeans",
        category: "Clothing",
        min: 20000,
        max: 20000,
        sizes: ["S", "M", "L"],
        colors: ["Light Blue", "Dark Blue", "Black"]
    },
    {
        name: "Bootcut Jeans",
        category: "Clothing",
        min: 10000,
        max: 10000,
        sizes: ["S", "M", "L"],
        colors: ["Light Blue", "Dark Blue", "Black"]
    },
    {
        name: "Jeans Skirt",
        category: "Clothing",
        min: 6500,
        max: 6500,
        sizes: ["S", "M", "L"],
        colors: ["Light Blue", "Dark Blue", "Black"]
    },
    {
        name: "Pleated Jeans Skirt",
        category: "Clothing",
        min: 6000,
        max: 6000,
        sizes: ["S", "M", "L"],
        colors: ["Light Blue", "Dark Blue", "Black"]
    },
    {
        name: "Normal Shorts",
        category: "Clothing",
        min: 4000,
        max: 4000,
        sizes: ["S", "M", "L"],
        colors: ["Black", "White", "Grey", "Blue"]
    },

    // =========================
    // SHOES
    // =========================

    {
        name: "Shoes",
        category: "Shoes",
        min: 15000,
        max: 30000,
        shoeSizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
        colors: ["Black", "White", "Brown", "Cream"]
    },
    {
        name: "Adidas Sambas",
        category: "Shoes",
        min: 30000,
        max: 50000,
        shoeSizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
        colors: ["Black", "White", "Cream", "Brown"]
    },
    {
        name: "Adidas Campus",
        category: "Shoes",
        min: 30000,
        max: 50000,
        shoeSizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
        colors: ["Black", "White", "Grey", "Pink", "Blue"]
    },
    {
        name: "Slides",
        category: "Shoes",
        min: 9000,
        max: 9000,
        shoeSizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
        colors: ["Black", "White", "Brown", "Cream", "Pink"]
    },
    {
        name: "Crocs",
        category: "Shoes",
        min: 10000,
        max: 10000,
        shoeSizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
        colors: ["Black", "White", "Cream", "Pink", "Green"]
    },
    {
        name: "Loafers",
        category: "Shoes",
        min: 15000,
        max: 30000,
        shoeSizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
        colors: ["Black", "Brown", "Cream"]
    },
    {
        name: "Clogs",
        category: "Shoes",
        min: 35000,
        max: 70000,
        shoeSizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
        colors: ["Black", "Cream", "Brown", "Grey"]
    },
    {
        name: "Timberland",
        category: "Shoes",
        min: 5000,
        max: 40000,
        shoeSizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
        colors: ["Brown", "Black", "Wheat"]
    },
    {
        name: "Vans",
        category: "Shoes",
        min: 5000,
        max: 40000,
        shoeSizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
        colors: ["Black", "White", "Checkerboard", "Brown"]
    },
    {
        name: "Puma",
        category: "Shoes",
        min: 25000,
        max: 50000,
        shoeSizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
        colors: ["Black", "White", "Grey", "Pink", "Blue"]
    },

    // =========================
    // BAGS
    // =========================

    {
        name: "Hermes Bags",
        category: "Bags",
        min: 35000,
        max: 50000,
        colors: ["Black", "Brown", "Cream", "White"]
    },
    {
        name: "Mini Gucci Bags",
        category: "Bags",
        min: 20000,
        max: 50000,
        colors: ["Black", "Brown", "Cream", "Pink"]
    },
    {
        name: "Gucci Bags",
        category: "Bags",
        min: 35000,
        max: 60000,
        colors: ["Black", "Brown", "Cream"]
    },
    {
        name: "Prada Bags",
        category: "Bags",
        min: 35000,
        max: 60000,
        colors: ["Black", "White", "Brown"]
    },
    {
        name: "Dior Bags",
        category: "Bags",
        min: 35000,
        max: 70000,
        colors: ["Black", "White", "Brown", "Cream"]
    },
    {
        name: "Chanel Bags",
        category: "Bags",
        min: 45000,
        max: 70000,
        colors: ["Black", "White", "Pink", "Cream"]
    },
    {
        name: "Louis Vuitton Bags",
        category: "Bags",
        min: 25000,
        max: 70000,
        colors: ["Brown", "Black", "Cream"]
    },
    {
        name: "Cartier Watches",
        category: "Bags",
        min: 20000,
        max: 35000,
        colors: ["Gold", "Silver", "Rose Gold"]
    },
    {
        name: "Cartier Glasses",
        category: "Bags",
        min: 15000,
        max: 25000,
        colors: ["Black", "Brown", "Clear"]
    }

];


// ======================================================
// CREATE PRODUCTS
// ======================================================

const products = [];

function makePrice(min, max, number) {

    if (min === max) {
        return min;
    }

    const step = (max - min) / 29;

    return Math.round(
        (min + step * (number - 1)) / 100
    ) * 100;
}

productCatalog.forEach(product => {

    for (let i = 1; i <= 30; i++) {

        products.push({

            id: `${product.name}-${i}`,

            name: product.name,

            listing: i,

            category: product.category,

            price: makePrice(
                product.min,
                product.max,
                i
            ),

            size: product.size || "Not specified",

            sizes: product.sizes || [],

            shoeSizes: product.shoeSizes || [],

            description: product.description || "",

            colors: product.colors || [],

            stock: 10

        });

    }

});


// ======================================================
// SHUFFLE PRODUCTS
// ======================================================

function shuffleProducts(array) {

    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {

        const randomIndex =
            Math.floor(
                Math.random() * (i + 1)
            );

        [copy[i], copy[randomIndex]] =
            [copy[randomIndex], copy[i]];

    }

    return copy;
}

const shuffledProducts =
    shuffleProducts(products);


// ======================================================
// CART
// ======================================================

let cart = [];

function loadCart() {

    try {

        const saved =
            JSON.parse(
                localStorage.getItem(
                    "collectiveCart"
                ) || "[]"
            );

        cart =
            Array.isArray(saved)
                ? saved
                : [];

    } catch (error) {

        cart = [];

    }

}

function saveCart() {

    localStorage.setItem(
        "collectiveCart",
        JSON.stringify(cart)
    );

}

function getCartQuantity() {

    return cart.reduce(
        (total, item) =>
            total +
            Number(item.quantity || 0),
        0
    );

}

function getCartTotal() {

    return cart.reduce(
        (total, item) =>
            total +
            Number(item.price || 0) *
            Number(item.quantity || 0),
        0
    );

}


// ======================================================
// FREE GIFT STORAGE
// ======================================================

function getSelectedFreeGiftProducts() {

    try {

        let saved =
            localStorage.getItem(
                "collectiveSelectedFreeGifts"
            );

        if (!saved) {

            saved =
                localStorage.getItem(
                    "collectiveFreeGifts"
                );

        }

        if (!saved) {
            return [];
        }

        const gifts =
            JSON.parse(saved);

        if (!Array.isArray(gifts)) {
            return [];
        }

        return gifts
            .map(gift => {

                if (typeof gift === "string") {

                    return products.find(
                        product =>
                            product.id === gift
                    );

                }

                if (
                    gift &&
                    typeof gift === "object"
                ) {

                    if (gift.id) {

                        const realProduct =
                            products.find(
                                product =>
                                    product.id ===
                                    gift.id
                            );

                        if (realProduct) {
                            return realProduct;
                        }

                    }

                    if (gift.name) {

                        const realProduct =
                            products.find(
                                product =>
                                    product.name ===
                                    gift.name
                            );

                        if (realProduct) {
                            return realProduct;
                        }

                    }

                }

                return null;

            })
            .filter(Boolean);

    } catch (error) {

        console.error(
            "FREE GIFT LOAD ERROR:",
            error
        );

        return [];

    }

}

function saveSelectedFreeGiftProducts(gifts) {

    const safeGifts =
        Array.isArray(gifts)
            ? gifts
                .map(gift => {

                    if (
                        typeof gift ===
                        "string"
                    ) {

                        return products.find(
                            product =>
                                product.id === gift
                        );

                    }

                    if (
                        gift &&
                        typeof gift === "object"
                    ) {

                        return products.find(
                            product =>
                                product.id === gift.id
                        ) || gift;

                    }

                    return null;

                })
                .filter(Boolean)
            : [];

    localStorage.setItem(
        "collectiveSelectedFreeGifts",
        JSON.stringify(safeGifts)
    );

    localStorage.setItem(
        "collectiveFreeGifts",
        JSON.stringify(safeGifts)
    );

}

function clearSelectedFreeGiftProducts() {

    localStorage.removeItem(
        "collectiveSelectedFreeGifts"
    );

    localStorage.removeItem(
        "collectiveFreeGifts"
    );

}


// ======================================================
// GIFT FLOW
// ======================================================

function getGiftTarget() {

    const gifts =
        getSelectedFreeGiftProducts();

    if (gifts.length === 10) {
        return 100000;
    }

    if (gifts.length === 5) {
        return 50000;
    }

    return 0;
}

function isGiftShoppingActive() {

    return getGiftTarget() > 0;

}

function activateGiftFlow() {

    const target =
        getGiftTarget();

    const bar =
        document.getElementById(
            "giftSpendBar"
        );

    if (!target) {

        deactivateGiftFlow();

        return;

    }

    localStorage.setItem(
        "collectiveGiftFlowActive",
        "true"
    );

    localStorage.setItem(
        "collectiveGiftTarget",
        String(target)
    );

    document.body.classList.add(
        "gift-shopping-active"
    );

    if (bar) {
        bar.style.display = "block";
    }

}

function deactivateGiftFlow() {

    localStorage.removeItem(
        "collectiveGiftFlowActive"
    );

    localStorage.removeItem(
        "collectiveGiftTarget"
    );

    document.body.classList.remove(
        "gift-shopping-active"
    );

    const bar =
        document.getElementById(
            "giftSpendBar"
        );

    if (bar) {
        bar.style.display = "none";
    }

}


// ======================================================
// GIFT POPUP
// ======================================================

function showGiftPickedPopup(
    selectedCount,
    unlocked
) {

    if (
        selectedCount !== 5 &&
        selectedCount !== 10
    ) {
        return;
    }

    if (selectedCount !== unlocked) {
        return;
    }

    const old =
        document.getElementById(
            "giftPickedPopup"
        );

    if (old) {
        old.remove();
    }

    const target =
        selectedCount === 5
            ? 50000
            : 100000;

    const popup =
        document.createElement(
            "div"
        );

    popup.id =
        "giftPickedPopup";

    popup.style.cssText = `
        position:fixed;
        inset:0;
        z-index:999999;
        background:rgba(48,75,82,.45);
        display:flex;
        align-items:center;
        justify-content:center;
        padding:20px;
        box-sizing:border-box;
    `;

    popup.innerHTML = `

        <div
            style="
                width:min(440px,100%);
                background:#FFFDF8;
                border-radius:23px;
                padding:32px 25px;
                text-align:center;
                box-shadow:0 18px 50px rgba(0,0,0,.2);
            "
        >

            <div
                style="
                    font-size:45px;
                    margin-bottom:10px;
                "
            >
                🎁
            </div>

            <h2
                style="
                    color:#304B52;
                    margin:8px 0 12px;
                "
            >
                Your ${selectedCount} gifts are saved!
            </h2>

            <p
                style="
                    color:#71858A;
                    line-height:1.6;
                "
            >
                Spend
                <strong>
                    ₦${target.toLocaleString()}
                </strong>
                on your purchases to take away
                your ${selectedCount} free gifts.
            </p>

            <p
                style="
                    color:#71858A;
                    line-height:1.6;
                "
            >
                Your free gifts do not count
                toward your spending target.
            </p>

            <button
                type="button"
                id="giftPopupClose"
                class="checkout-button"
            >
                OK
            </button>

        </div>
    `;

    document.body.appendChild(
        popup
    );

    document
        .getElementById(
            "giftPopupClose"
        )
        ?.addEventListener(
            "click",
            () => popup.remove()
        );

}


// ======================================================
// GIFT PROGRESS BAR
// ======================================================

let giftCheckoutTriggered = false;

function updateGiftShoppingProgress() {

    const target =
        getGiftTarget();

    const bar =
        document.getElementById(
            "giftSpendBar"
        );

    const amount =
        document.getElementById(
            "giftSpendAmount"
        );

    const fill =
        document.getElementById(
            "giftSpendFill"
        );

    const message =
        document.getElementById(
            "giftSpendMessage"
        );

    // NORMAL SHOPPER
    if (!target) {

        giftCheckoutTriggered = false;

        if (bar) {
            bar.style.display = "none";
        }

        document.body.classList.remove(
            "gift-shopping-active"
        );

        return;

    }

    activateGiftFlow();

    const total =
        getCartTotal();

    const percentage =
        Math.min(
            (total / target) * 100,
            100
        );

    if (amount) {

        amount.textContent =
            `₦${total.toLocaleString()} / ₦${target.toLocaleString()}`;

    }

    if (fill) {

        fill.style.width =
            `${percentage}%`;

    }

    if (total < target) {

        giftCheckoutTriggered = false;

        const remaining =
            target - total;

        if (message) {

            message.textContent =
                `Spend ₦${remaining.toLocaleString()} more to take away your ${target === 50000 ? 5 : 10} gifts.`;

        }

        return;

    }

    // TARGET REACHED

    if (message) {

        message.textContent =
            `✓ ₦${target.toLocaleString()} reached! Taking you to checkout...`;

    }

    // HIDE BAR BEFORE CHECKOUT
    if (bar) {
        bar.style.display = "none";
    }

    document.body.classList.remove(
        "gift-shopping-active"
    );

    localStorage.removeItem(
        "collectiveGiftFlowActive"
    );

    if (!giftCheckoutTriggered) {

        giftCheckoutTriggered = true;

        setTimeout(
            function() {

                checkout();

            },
            350
        );

    }

}


// ======================================================
// CART DISPLAY
// ======================================================

function updateCartCount() {

    const count =
        document.getElementById(
            "cartCount"
        );

    if (count) {

        count.textContent =
            getCartQuantity();

    }

}

function updateCartDisplay() {

    updateCartCount();

    const cartItems =
        document.getElementById(
            "cartItems"
        );

    const cartTotal =
        document.getElementById(
            "cartTotal"
        );

    if (!cartItems) {
        return;
    }

    const selectedGifts =
        getSelectedFreeGiftProducts();

    let html = "";


    // PAID PRODUCTS

    if (cart.length === 0) {

        html += `
            <div class="empty-cart">
                Your cart is empty.
            </div>
        `;

    } else {

        cart.forEach(
            (item, index) => {

                const quantity =
                    Number(
                        item.quantity || 1
                    );

                const price =
                    Number(
                        item.price || 0
                    );

                const itemTotal =
                    price * quantity;

                html += `

                    <div class="cart-item">

                        <div class="cart-item-info">

                            <h3>
                                ${item.name || "Product"}
                            </h3>

                            ${
                                item.size &&
                                item.size !== "Not specified"
                                    ? `
                                        <small>
                                            Size: ${item.size}
                                        </small>
                                    `
                                    : ""
                            }

                            ${
                                item.color
                                    ? `
                                        <small>
                                            Shade: ${item.color}
                                        </small>
                                    `
                                    : ""
                            }

                            <strong>
                                ₦${itemTotal.toLocaleString()}
                            </strong>

                        </div>

                        <div class="cart-item-actions">

                            <div class="cart-quantity">

                                <button
                                    type="button"
                                    class="cart-minus"
                                    data-index="${index}"
                                >
                                    −
                                </button>

                                <span>
                                    ${quantity}
                                </span>

                                <button
                                    type="button"
                                    class="cart-plus"
                                    data-index="${index}"
                                >
                                    +
                                </button>

                            </div>

                            <button
                                type="button"
                                class="remove-cart-item"
                                data-index="${index}"
                            >
                                Remove
                            </button>

                        </div>

                    </div>
                `;

            }
        );

    }


    // FREE GIFTS

    if (selectedGifts.length > 0) {

        html += `

            <div
                class="selected-free-gifts"
                style="
                    margin-top:18px;
                    padding-top:18px;
                    border-top:1px solid #DCEFF2;
                "
            >

                <h3
                    style="
                        color:#304B52;
                        margin:0 0 12px;
                    "
                >
                    🎁 FREE GIFTS
                </h3>

                <div
                    style="
                        background:#F7F4EE;
                        border-radius:14px;
                        padding:8px 14px;
                    "
                >

                    ${selectedGifts.map(
                        gift => `

                        <div
                            style="
                                display:flex;
                                justify-content:space-between;
                                align-items:center;
                                gap:10px;
                                padding:10px 0;
                                border-bottom:1px solid #E8F1F2;
                            "
                        >

                            <span style="color:#304B52;">
                                🎁 ${gift.name || "Free Gift"}
                            </span>

                            <strong style="color:#304B52;">
                                FREE
                            </strong>

                        </div>
                    `
                    ).join("")}

                </div>

                <p
                    style="
                        color:#71858A;
                        font-size:12px;
                        text-align:center;
                        margin:10px 0 0;
                    "
                >
                    Your selected gifts are FREE and do not
                    increase your order total.
                </p>

            </div>
        `;

    }

    cartItems.innerHTML =
        html;

    if (cartTotal) {

        cartTotal.textContent =
            `₦${getCartTotal().toLocaleString()}`;

    }

}


// ======================================================
// OPEN / CLOSE CART
// ======================================================

function openCart() {

    const popup =
        document.getElementById(
            "cartPopup"
        );

    if (!popup) {
        return;
    }

    updateCartDisplay();

    popup.classList.add("open");

    popup.style.display =
        "flex";

    document.body.classList.add(
        "cart-open"
    );

}

function closeCart() {

    const popup =
        document.getElementById(
            "cartPopup"
        );

    if (!popup) {
        return;
    }

    popup.classList.remove(
        "open"
    );

    popup.style.display =
        "none";

    document.body.classList.remove(
        "cart-open"
    );

}


// ======================================================
// CART EVENTS
// ======================================================

function setupCartEvents() {

    const cartButton =
        document.getElementById(
            "cartBtn"
        );

    const closeButton =
        document.getElementById(
            "closeCart"
        );

    const popup =
        document.getElementById(
            "cartPopup"
        );

    cartButton?.addEventListener(
        "click",
        function(event) {

            event.preventDefault();
            event.stopPropagation();

            openCart();

        }
    );

    closeButton?.addEventListener(
        "click",
        function(event) {

            event.preventDefault();
            event.stopPropagation();

            closeCart();

        }
    );

    popup?.addEventListener(
        "click",
        function(event) {

            if (
                event.target === popup
            ) {

                closeCart();

            }

        }
    );

}


// ======================================================
// CART ITEM CONTROLS
// ======================================================

function setupCartItemEvents() {

    document.addEventListener(
        "click",
        function(event) {

            const target =
                event.target instanceof Element
                    ? event.target
                    : null;

            if (!target) {
                return;
            }

            const removeButton =
                target.closest(
                    ".remove-cart-item"
                );

            if (removeButton) {

                const index =
                    Number(
                        removeButton.dataset.index
                    );

                if (
                    Number.isInteger(index) &&
                    cart[index]
                ) {

                    cart.splice(
                        index,
                        1
                    );

                    saveCart();

                    updateCartDisplay();

                    updateGiftShoppingProgress();

                }

                return;

            }

            const minusButton =
                target.closest(
                    ".cart-minus"
                );

            if (minusButton) {

                const index =
                    Number(
                        minusButton.dataset.index
                    );

                if (
                    Number.isInteger(index) &&
                    cart[index]
                ) {

                    const quantity =
                        Number(
                            cart[index].quantity || 1
                        );

                    if (quantity > 1) {

                        cart[index].quantity =
                            quantity - 1;

                    }

                    saveCart();

                    updateCartDisplay();

                    updateGiftShoppingProgress();

                }

                return;

            }

            const plusButton =
                target.closest(
                    ".cart-plus"
                );

            if (plusButton) {

                const index =
                    Number(
                        plusButton.dataset.index
                    );

                if (
                    Number.isInteger(index) &&
                    cart[index]
                ) {

                    const quantity =
                        Number(
                            cart[index].quantity || 1
                        );

                    if (quantity < 10) {

                        cart[index].quantity =
                            quantity + 1;

                    }

                    saveCart();

                    updateCartDisplay();

                    updateGiftShoppingProgress();

                }

            }

        }
    );

}


// ======================================================
// ESCAPE
// ======================================================

function setupEscapeKey() {

    document.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Escape") {

                closeCart();

                const checkoutModal =
                    document.getElementById(
                        "checkoutModal"
                    );

                if (checkoutModal) {
                    checkoutModal.remove();
                }

            }

        }
    );

}


// ======================================================
// POINTS
// ======================================================

function getPoints() {

    return Number(
        localStorage.getItem(
            "collectivePoints"
        ) || "0"
    );

}

function savePoints(points) {

    localStorage.setItem(
        "collectivePoints",
        String(
            Math.max(
                0,
                Number(points) || 0
            )
        )
    );

}

function calculatePoints(amount) {

    return Math.floor(
        Number(amount || 0) / 1000
    );

}

function pointsToNaira(points) {

    return Number(points || 0) * 100;

}

function getMaxPointsUsable(points) {

    return Math.min(
        Number(points) || 0,
        200
    );

}

function updatePointsDisplay() {

    const points =
        getPoints();

    document
        .querySelectorAll(
            ".points-balance"
        )
        .forEach(element => {

            element.textContent =
                `${points} points`;

        });

    const profilePoints =
        document.getElementById(
            "profilePoints"
        );

    if (profilePoints) {

        profilePoints.textContent =
            points;

    }

}


// ======================================================
// TOTAL SPENT
// ======================================================

function getTotalSpent() {

    return Number(
        localStorage.getItem(
            "collectiveTotalSpent"
        ) || "0"
    );

}

function saveTotalSpent(amount) {

    localStorage.setItem(
        "collectiveTotalSpent",
        String(
            Math.max(
                0,
                Number(amount) || 0
            )
        )
    );

}

function addPurchasePoints(amount) {

    const earned =
        calculatePoints(amount);

    savePoints(
        getPoints() + earned
    );

    updatePointsDisplay();

    return earned;

}


// ======================================================
// REWARDS
// ======================================================

function updateRewardStatus() {

    const totalSpent =
        getTotalSpent();

    if (totalSpent >= 50000) {

        localStorage.setItem(
            "collectiveGift1",
            "true"
        );

    }

    if (totalSpent >= 100000) {

        localStorage.setItem(
            "collectiveGift2",
            "true"
        );

    }

    const gift1Status =
        document.getElementById(
            "gift1Status"
        );

    const gift2Status =
        document.getElementById(
            "gift2Status"
        );

    if (gift1Status) {

        gift1Status.textContent =
            totalSpent >= 50000
                ? "✓ UNLOCKED"
                : "NOT UNLOCKED";

    }

    if (gift2Status) {

        gift2Status.textContent =
            totalSpent >= 100000
                ? "✓ UNLOCKED"
                : "NOT UNLOCKED";

    }

}


// ======================================================
// SEARCH
// ======================================================

let currentCategory = "All";

function filterProducts() {

    const searchInput =
        document.getElementById(
            "productSearch"
        );

    const search =
        searchInput
            ? searchInput.value
                .toLowerCase()
                .trim()
            : "";

    const cards =
        document.querySelectorAll(
            ".product-card"
        );

    let visible = 0;

    cards.forEach(card => {

        const name =
            (
                card.dataset.name || ""
            ).toLowerCase();

        const category =
            card.dataset.category || "";

        const matchesSearch =
            name.includes(search);

        const matchesCategory =
            currentCategory === "All" ||
            category === currentCategory;

        if (
            matchesSearch &&
            matchesCategory
        ) {

            card.style.display = "";
            visible++;

        } else {

            card.style.display = "none";

        }

    });

    const message =
        document.querySelector(
            ".no-products"
        );

    if (message) {

        message.style.display =
            visible === 0
                ? "block"
                : "none";

    }

}


// ======================================================
// CATEGORY
// ======================================================

function createCategoryMenu() {

    const container =
        document.querySelector(
            ".collective-categories"
        );

    if (!container) {
        return;
    }

    container.innerHTML = "";

    const categories = [
        "All",
        "Skincare",
        "Shoes",
        "Clothing",
        "Accessories",
        "Bags"
    ];

    categories.forEach(
        category => {

            const button =
                document.createElement(
                    "button"
                );

            button.type = "button";

            button.className =
                "category-button";

            button.textContent =
                category === "All"
                    ? "ALL PRODUCTS"
                    : category.toUpperCase();

            if (
                category ===
                currentCategory
            ) {

                button.classList.add(
                    "selected"
                );

            }

            button.addEventListener(
                "click",
                function() {

                    currentCategory =
                        category;

                    document
                        .querySelectorAll(
                            ".category-button"
                        )
                        .forEach(
                            btn =>
                                btn.classList.remove(
                                    "selected"
                                )
                        );

                    button.classList.add(
                        "selected"
                    );

                    filterProducts();

                }
            );

            container.appendChild(
                button
            );

        }
    );

}

function setupCategoryButton() {

    const button =
        document.getElementById(
            "categoryBtn"
        );

    const menu =
        document.querySelector(
            ".collective-categories"
        );

    if (!button || !menu) {
        return;
    }

    button.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            menu.style.display =
                menu.style.display === "flex"
                    ? "none"
                    : "flex";

        }
    );

}


// ======================================================
// SEARCH EVENT
// ======================================================

function setupSearch() {

    const search =
        document.getElementById(
            "productSearch"
        );

    if (!search) {
        return;
    }

    search.addEventListener(
        "input",
        filterProducts
    );

}


// ======================================================
// PRODUCT OPTION HTML
// ======================================================

function createProductOptions(product) {

    let html = "";

    // CLOTHING SIZE

    if (
        product.category === "Clothing"
    ) {

        html += `

            <div
                class="product-option"
                style="margin:10px 0;"
            >

                <label>
                    Size
                </label>

                <select
                    class="product-size-select"
                    style="
                        width:100%;
                        padding:9px;
                        border:1px solid #C8D5D8;
                        border-radius:8px;
                        background:#FFFDF8;
                        color:#304B52;
                    "
                >

                    ${(product.sizes || ["S", "M", "L"])
                        .map(
                            size => `
                                <option value="${size}">
                                    ${size}
                                </option>
                            `
                        )
                        .join("")}

                </select>

            </div>
        `;

    }

    // SHOES SIZE

    if (
        product.category === "Shoes"
    ) {

        html += `

            <div
                class="product-option"
                style="margin:10px 0;"
            >

                <label>
                    Shoe Size
                </label>

                <select
                    class="product-shoe-size"
                    style="
                        width:100%;
                        padding:9px;
                        border:1px solid #C8D5D8;
                        border-radius:8px;
                        background:#FFFDF8;
                        color:#304B52;
                    "
                >

                    ${(product.shoeSizes || [
                        "36","37","38","39","40",
                        "41","42","43","44","45"
                    ])
                        .map(
                            size => `
                                <option value="${size}">
                                    ${size}
                                </option>
                            `
                        )
                        .join("")}

                </select>

            </div>
        `;

    }

    // COLORS

    if (
        product.colors &&
        product.colors.length > 0
    ) {

        html += `

            <div
                class="product-colors"
                style="margin:10px 0;"
            >

                <label>
                    Color
                </label>

                <select
                    class="product-color"
                    style="
                        width:100%;
                        padding:9px;
                        border:1px solid #C8D5D8;
                        border-radius:8px;
                        background:#FFFDF8;
                        color:#304B52;
                    "
                >

                    ${product.colors.map(
                        color => `
                            <option value="${color}">
                                ${color}
                            </option>
                        `
                    ).join("")}

                </select>

            </div>
        `;

    }

    return html;

}


// ======================================================
// RENDER PRODUCTS
// ======================================================

function renderProducts() {

    const container =
        document.getElementById(
            "productGrid"
        ) ||
        document.querySelector(
            ".product-grid"
        );

    if (!container) {
        return;
    }

    container.innerHTML = "";

    // SCATTER PRODUCTS
    shuffledProducts
        .slice(0, 60)
        .forEach(product => {

            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "product-card";

            card.dataset.name =
                product.name;

            card.dataset.category =
                product.category;

            card.innerHTML = `

                <div class="product-image">

                    <span>
                        ${product.name}
                    </span>

                </div>

                <div class="product-info">

                    <p class="product-category">
                        ${product.category}
                    </p>

                    <h3>
                        ${product.name}
                    </h3>

                    <p class="product-description">
                        ${product.description || ""}
                    </p>

                    ${
                        product.size &&
                        product.size !== "Not specified"
                            ? `
                                <p class="product-size">
                                    ${product.size}
                                </p>
                            `
                            : ""
                    }

                    <p class="product-price">
                        ₦${Number(
                            product.price
                        ).toLocaleString()}
                    </p>

                    ${createProductOptions(product)}

                    <button
                        type="button"
                        class="add-to-cart"
                        data-product-id="${product.id}"
                    >
                        ADD TO CART
                    </button>

                </div>
            `;

            container.appendChild(
                card
            );

        });

    filterProducts();

}


// ======================================================
// ADD TO CART
// ======================================================

function setupAddToCart() {

    document.addEventListener(
        "click",
        function(event) {

            const target =
                event.target instanceof Element
                    ? event.target
                    : null;

            if (!target) {
                return;
            }

            const button =
                target.closest(
                    ".add-to-cart"
                );

            if (!button) {
                return;
            }

            event.preventDefault();

            const productId =
                button.dataset.productId;

            const product =
                products.find(
                    item =>
                        item.id === productId
                );

            if (!product) {
                return;
            }

            const card =
                button.closest(
                    ".product-card"
                );

            const colorSelect =
                card?.querySelector(
                    ".product-color"
                );

            const sizeSelect =
                card?.querySelector(
                    ".product-size-select"
                );

            const shoeSizeSelect =
                card?.querySelector(
                    ".product-shoe-size"
                );

            const selectedColor =
                colorSelect
                    ? colorSelect.value
                    : "";

            let selectedSize =
                product.size ||
                "Not specified";

            if (sizeSelect) {
                selectedSize =
                    sizeSelect.value;
            }

            if (shoeSizeSelect) {
                selectedSize =
                    shoeSizeSelect.value;
            }

            const existing =
                cart.find(
                    item =>
                        item.id === product.id &&
                        (item.color || "") ===
                            selectedColor &&
                        (item.size || "") ===
                            selectedSize
                );

            if (existing) {

                const quantity =
                    Number(
                        existing.quantity || 1
                    );

                if (quantity < 10) {

                    existing.quantity =
                        quantity + 1;

                }

            } else {

                cart.push({

                    id: product.id,

                    name: product.name,

                    category: product.category,

                    price: product.price,

                    size: selectedSize,

                    color: selectedColor,

                    quantity: 1

                });

            }

            saveCart();

            updateCartDisplay();

            updateGiftShoppingProgress();

            button.textContent =
                "ADDED ✓";

            setTimeout(
                function() {

                    button.textContent =
                        "ADD TO CART";

                },
                1000
            );

        }
    );

}


// ======================================================
// FREE GIFT LEVEL
// ======================================================

function getFreeGiftLevel() {

    const totalSpent =
        getTotalSpent();

    if (totalSpent >= 100000) {
        return 10;
    }

    if (totalSpent >= 50000) {
        return 5;
    }

    return 0;

}


// ======================================================
// GIFT OPTIONS
// ======================================================

function renderGiftOptions() {

    const container =
        document.getElementById(
            "giftOptions"
        );

    if (!container) {
        return;
    }

    const unlocked =
        getFreeGiftLevel();

    if (unlocked <= 0) {

        container.innerHTML = `
            <p>
                Spend ₦50,000 to unlock free gifts.
            </p>
        `;

        return;

    }

    /*
     * Give the customer enough different products
     * to choose 5 or 10 gifts from.
     */

    const giftProducts =
        shuffleProducts(
            products.filter(
                product =>
                    product.category === "Accessories" ||
                    product.category === "Skincare"
            )
        ).slice(
            0,
            unlocked === 10 ? 20 : 12
        );

    const selected =
        getSelectedFreeGiftProducts();

    container.innerHTML =
        giftProducts
            .map(
                product => `

                    <label
                        class="gift-option"
                        style="
                            display:flex;
                            align-items:center;
                            gap:10px;
                            margin:8px 0;
                        "
                    >

                        <input
                            type="checkbox"
                            class="gift-checkbox"
                            value="${product.id}"
                            ${
                                selected.some(
                                    gift =>
                                        gift.id ===
                                        product.id
                                )
                                    ? "checked"
                                    : ""
                            }
                        >

                        <span>
                            ${product.name || "Free Gift"}
                        </span>

                    </label>
                `
            )
            .join("");

    container
        .querySelectorAll(
            ".gift-checkbox"
        )
        .forEach(
            checkbox => {

                checkbox.addEventListener(
                    "change",
                    function() {

                        let gifts =
                            getSelectedFreeGiftProducts();

                        const product =
                            products.find(
                                item =>
                                    item.id ===
                                    checkbox.value
                            );

                        if (!product) {
                            return;
                        }

                        if (checkbox.checked) {

                            const max =
                                unlocked;

                            if (
                                gifts.length >= max
                            ) {

                                checkbox.checked =
                                    false;

                                alert(
                                    `You can select up to ${max} free items.`
                                );

                                return;

                            }

                            if (
                                !gifts.some(
                                    gift =>
                                        gift.id ===
                                        product.id
                                )
                            ) {

                                gifts.push(
                                    product
                                );

                            }

                        } else {

                            gifts =
                                gifts.filter(
                                    gift =>
                                        gift.id !==
                                        product.id
                                );

                        }

                        saveSelectedFreeGiftProducts(
                            gifts
                        );

                        updateCartDisplay();

                        if (
                            gifts.length === 5 ||
                            gifts.length === 10
                        ) {

                            showGiftPickedPopup(
                                gifts.length,
                                unlocked
                            );

                        }

                        updateGiftShoppingProgress();

                    }
                );

            }
        );

}


// ======================================================
// LOGIN
// ======================================================

function isLoggedIn() {

    return (
        localStorage.getItem(
            "collectiveLoggedIn"
        ) === "true"
    );

}

function getCurrentUser() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "collectiveUser"
            ) || "null"
        );

    } catch (error) {

        return null;

    }

}

function requireLogin() {

    if (isLoggedIn()) {
        return true;
    }

    alert(
        "Please log in before checking out."
    );

    window.location.href =
        "login.html";

    return false;

}


// ======================================================
// CHECKOUT ITEMS
// ======================================================

function getCheckoutItems() {

    const paidItems =
        cart.map(
            item => ({
                ...item,
                isFreeGift: false
            })
        );

    const gifts =
        getSelectedFreeGiftProducts();

    const freeItems =
        gifts.map(
            product => ({

                id:
                    "FREE-GIFT-" +
                    product.id,

                name:
                    product.name || "Free Gift",

                category:
                    product.category,

                price: 0,

                quantity: 1,

                color: null,

                size:
                    product.size ||
                    "Not specified",

                isFreeGift: true,

                originalGiftPrice:
                    Number(
                        product.price || 0
                    )

            })
        );

    return [
        ...paidItems,
        ...freeItems
    ];

}


// ======================================================
// CHECKOUT
// ======================================================

function checkout() {

    // If automatic gift checkout happens,
    // the progress bar is removed first.

    const bar =
        document.getElementById(
            "giftSpendBar"
        );

    if (bar) {
        bar.style.display = "none";
    }

    document.body.classList.remove(
        "gift-shopping-active"
    );

    createCheckoutModal();

}


// IMPORTANT:
// Make checkout globally available to the
// old inline shop flow as well.

window.checkout =
    checkout;


// ======================================================
// CREATE CHECKOUT MODAL
// ======================================================

function createCheckoutModal() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty."
        );

        return;

    }

    if (!requireLogin()) {
        return;
    }

    const oldModal =
        document.getElementById(
            "checkoutModal"
        );

    if (oldModal) {
        oldModal.remove();
    }

    const user =
        getCurrentUser() || {};

    const total =
        getCartTotal();

    const selectedGifts =
        getSelectedFreeGiftProducts();

    const availablePoints =
        getPoints();

    const maxUsablePoints =
        getMaxPointsUsable(
            availablePoints
        );

    const maxDiscount =
        pointsToNaira(
            maxUsablePoints
        );

    const modal =
        document.createElement(
            "div"
        );

    modal.id =
        "checkoutModal";

    modal.className =
        "checkout-modal";

    modal.style.cssText = `
        position:fixed;
        inset:0;
        z-index:1000000;
        background:rgba(48,75,82,.45);
        display:flex;
        align-items:center;
        justify-content:center;
        padding:20px;
        box-sizing:border-box;
    `;

    modal.innerHTML = `

        <div
            class="checkout-box"
            style="
                width:min(520px,100%);
                max-height:90vh;
                overflow-y:auto;
                background:#FFFDF8;
                border-radius:23px;
                padding:30px 25px;
                box-sizing:border-box;
                position:relative;
                box-shadow:0 18px 50px rgba(0,0,0,.2);
            "
        >

            <button
                type="button"
                class="checkout-close"
                id="checkoutClose"
                style="
                    position:absolute;
                    right:15px;
                    top:10px;
                    border:none;
                    background:none;
                    font-size:30px;
                    color:#304B52;
                    cursor:pointer;
                "
            >
                ×
            </button>

            <h2 style="color:#304B52;">
                Checkout
            </h2>

            <div class="checkout-summary">

                <p>
                    Order total:
                    <strong>
                        ₦${total.toLocaleString()}
                    </strong>
                </p>

                ${
                    selectedGifts.length > 0
                        ? `
                            <div
                                style="
                                    margin:15px 0;
                                    padding:14px;
                                    background:#F7F4EE;
                                    border-radius:14px;
                                "
                            >

                                <strong style="color:#304B52;">
                                    🎁 FREE GIFTS
                                </strong>

                                ${selectedGifts.map(
                                    gift => `
                                        <div
                                            style="
                                                display:flex;
                                                justify-content:space-between;
                                                padding:7px 0;
                                                color:#304B52;
                                            "
                                        >
                                            <span>
                                                🎁 ${gift.name || "Free Gift"}
                                            </span>

                                            <strong>
                                                FREE
                                            </strong>
                                        </div>
                                    `
                                ).join("")}

                            </div>
                        `
                        : ""
                }

                <p>
                    Available points:
                    <strong>
                        ${availablePoints}
                    </strong>
                </p>

                <p>
                    1 point = ₦100 discount
                </p>

            </div>

            <div class="checkout-form">

                <input
                    id="checkoutFirstName"
                    type="text"
                    placeholder="First name"
                    value="${user.firstName || ""}"
                >

                <input
                    id="checkoutLastName"
                    type="text"
                    placeholder="Last name"
                    value="${user.lastName || ""}"
                >

                <input
                    id="checkoutAddress"
                    type="text"
                    placeholder="House address"
                    value="${user.address || ""}"
                >

                <input
                    id="checkoutPhone"
                    type="tel"
                    placeholder="Phone number"
                    value="${user.phone || ""}"
                >

                <input
                    id="checkoutPoints"
                    type="number"
                    min="0"
                    max="${maxUsablePoints}"
                    value="0"
                    placeholder="Points to use"
                >

                <small>
                    Maximum discount:
                    ₦${maxDiscount.toLocaleString()}
                </small>

            </div>

            <button
                type="button"
                id="continuePayment"
                class="checkout-button"
            >
                CONTINUE TO PAYMENT
            </button>

        </div>
    `;

    document.body.appendChild(
        modal
    );

    document
        .getElementById(
            "checkoutClose"
        )
        ?.addEventListener(
            "click",
            () => modal.remove()
        );

    document
        .getElementById(
            "continuePayment"
        )
        ?.addEventListener(
            "click",
            function() {

                const firstName =
                    document
                        .getElementById(
                            "checkoutFirstName"
                        )
                        ?.value
                        .trim();

                const lastName =
                    document
                        .getElementById(
                            "checkoutLastName"
                        )
                        ?.value
                        .trim();

                const address =
                    document
                        .getElementById(
                            "checkoutAddress"
                        )
                        ?.value
                        .trim();

                const phone =
                    document
                        .getElementById(
                            "checkoutPhone"
                        )
                        ?.value
                        .trim();

                const pointsInput =
                    Number(
                        document
                            .getElementById(
                                "checkoutPoints"
                            )
                            ?.value || 0
                    );

                if (
                    !firstName ||
                    !lastName ||
                    !address ||
                    !phone
                ) {

                    alert(
                        "Please fill in all your details."
                    );

                    return;

                }

                const pointsUsed =
                    Math.min(
                        Math.max(
                            0,
                            pointsInput
                        ),
                        maxUsablePoints
                    );

                const discount =
                    pointsToNaira(
                        pointsUsed
                    );

                const finalTotal =
                    Math.max(
                        0,
                        total - discount
                    );

                const customer = {

                    firstName,
                    lastName,
                    address,
                    phone

                };

                showPaymentModal(
                    modal,
                    finalTotal,
                    pointsUsed,
                    customer
                );

            }
        );

}


// ======================================================
// PAYMENT
// ======================================================

function showPaymentModal(
    checkoutModal,
    total,
    pointsUsed,
    customer
) {

    checkoutModal.innerHTML = `

        <div
            class="checkout-box"
            style="
                width:min(520px,100%);
                max-height:90vh;
                overflow-y:auto;
                background:#FFFDF8;
                border-radius:23px;
                padding:30px 25px;
                box-sizing:border-box;
                position:relative;
                box-shadow:0 18px 50px rgba(0,0,0,.2);
            "
        >

            <button
                type="button"
                class="checkout-close"
                id="paymentClose"
                style="
                    position:absolute;
                    right:15px;
                    top:10px;
                    border:none;
                    background:none;
                    font-size:30px;
                    color:#304B52;
                    cursor:pointer;
                "
            >
                ×
            </button>

            <h2 style="color:#304B52;">
                Payment
            </h2>

            <p>
                Amount to pay:
            </p>

            <h1>
                ₦${Number(
                    total
                ).toLocaleString()}
            </h1>

            <div class="payment-details">

                <h3>
                    GTBank
                </h3>

                <p>
                    Account Name:
                    <strong>
                        ADESANYA EYINJU CAYLA
                    </strong>
                </p>

                <p>
                    Account Number:
                    <strong>
                        0708648701
                    </strong>
                </p>

                <h3>
                    SmartCash PSB
                </h3>

                <p>
                    Account Name:
                    <strong>
                        Ololade Adesanya
                    </strong>
                </p>

                <p>
                    Account Number:
                    <strong>
                        9123930679
                    </strong>
                </p>

            </div>

            <button
                type="button"
                id="paidButton"
                class="checkout-button"
            >
                I HAVE PAID
            </button>

        </div>
    `;

    document
        .getElementById(
            "paymentClose"
        )
        ?.addEventListener(
            "click",
            () => checkoutModal.remove()
        );

    document
        .getElementById(
            "paidButton"
        )
        ?.addEventListener(
            "click",
            async function() {

                const button =
                    document.getElementById(
                        "paidButton"
                    );

                if (button) {

                    button.disabled = true;

                    button.textContent =
                        "SUBMITTING...";

                }

                const saved =
                    await createPendingOrder(
                        total,
                        pointsUsed,
                        customer
                    );

                if (!saved) {

                    if (button) {

                        button.disabled = false;

                        button.textContent =
                            "I HAVE PAID";

                    }

                    return;

                }

                checkoutModal.remove();

                showPaymentChecking();

            }
        );

}


// ======================================================
// FIREBASE ORDER
// ======================================================

async function createPendingOrder(
    total,
    pointsUsed,
    customer
) {

    const checkoutItems =
        getCheckoutItems();

    const originalPaidTotal =
        getCartTotal();

    const selectedGifts =
        getSelectedFreeGiftProducts();

    const order = {

        id:
            "ORDER-" +
            Date.now(),

        customer,

        items:
            checkoutItems,

        paidItems:
            cart.map(
                item => ({
                    ...item
                })
            ),

        freeGifts:
            selectedGifts.map(
                product => ({

                    id:
                        product.id,

                    name:
                        product.name || "Free Gift",

                    category:
                        product.category,

                    price: 0,

                    quantity: 1,

                    originalGiftPrice:
                        Number(
                            product.price || 0
                        )

                })
            ),

        originalTotal:
            originalPaidTotal,

        qualifyingSpend:
            originalPaidTotal,

        pointsUsed,

        total,

        status:
            "payment-checking",

        createdAt:
            new Date().toISOString()

    };

    try {

        const firebase =
            await firebaseReady;

        await firebase.addDoc(
            firebase.collection(
                firebase.db,
                "orders"
            ),
            order
        );

        let oldOrders = [];

        try {

            oldOrders =
                JSON.parse(
                    localStorage.getItem(
                        "collectiveOrders"
                    ) || "[]"
                );

            if (
                !Array.isArray(oldOrders)
            ) {

                oldOrders = [];

            }

        } catch (error) {

            oldOrders = [];

        }

        localStorage.setItem(
            "collectiveOrders",
            JSON.stringify([
                ...oldOrders,
                order
            ])
        );

        localStorage.setItem(
            "collectivePendingOrder",
            JSON.stringify(order)
        );

        localStorage.setItem(
            "collectiveOrderStatus",
            "payment-checking"
        );

        return true;

    } catch (error) {

        console.error(
            "FIREBASE ORDER ERROR:",
            error
        );

        alert(
            "Your order could not be submitted right now. Please try again."
        );

        return false;

    }

}


// ======================================================
// PAYMENT CHECKING
// ======================================================

function showPaymentChecking() {

    const old =
        document.getElementById(
            "paymentCheckingModal"
        );

    if (old) {
        old.remove();
    }

    const modal =
        document.createElement(
            "div"
        );

    modal.id =
        "paymentCheckingModal";

    modal.className =
        "checkout-modal";

    modal.style.cssText = `
        position:fixed;
        inset:0;
        z-index:1000000;
        background:rgba(48,75,82,.45);
        display:flex;
        align-items:center;
        justify-content:center;
        padding:20px;
        box-sizing:border-box;
    `;

    modal.innerHTML = `

        <div
            class="checkout-box"
            style="
                width:min(520px,100%);
                background:#FFFDF8;
                border-radius:23px;
                padding:30px 25px;
                text-align:center;
                box-shadow:0 18px 50px rgba(0,0,0,.2);
            "
        >

            <h2>
                Payment Checking
            </h2>

            <p>
                Your payment has been submitted.
            </p>

            <p>
                Your order is now waiting for approval.
            </p>

            <div class="payment-status">
                PAYMENT CHECKING
            </div>

            <button
                type="button"
                id="closePaymentChecking"
                class="checkout-button"
            >
                OK
            </button>

        </div>
    `;

    document.body.appendChild(
        modal
    );

    document
        .getElementById(
            "closePaymentChecking"
        )
        ?.addEventListener(
            "click",
            () => modal.remove()
        );

}


// ======================================================
// CHECKOUT BUTTON
// ======================================================

function setupCheckout() {

    document.addEventListener(
        "click",
        function(event) {

            const target =
                event.target instanceof Element
                    ? event.target
                    : null;

            if (!target) {
                return;
            }

            const button =
                target.closest(
                    "#checkoutBtn"
                );

            if (!button) {
                return;
            }

            event.preventDefault();

            event.stopPropagation();

            checkout();

        }
    );

}


// ======================================================
// LOGIN STATUS
// ======================================================

function updateLoginStatus() {

    const loggedIn =
        isLoggedIn();

    const user =
        getCurrentUser();

    document
        .querySelectorAll(
            ".login-required"
        )
        .forEach(
            element => {

                element.style.display =
                    loggedIn
                        ? "none"
                        : "";

            }
        );

    document
        .querySelectorAll(
            ".logout-button"
        )
        .forEach(
            element => {

                element.style.display =
                    loggedIn
                        ? ""
                        : "none";

            }
        );

    const accountName =
        document.getElementById(
            "accountName"
        );

    if (
        accountName &&
        user
    ) {

        accountName.textContent =
            `${user.firstName || ""} ${user.lastName || ""}`
                .trim();

    }

}


// ======================================================
// LOGOUT
// ======================================================

function setupLogout() {

    document.addEventListener(
        "click",
        function(event) {

            const target =
                event.target instanceof Element
                    ? event.target
                    : null;

            if (!target) {
                return;
            }

            const button =
                target.closest(
                    "#logoutBtn, .logout-button"
                );

            if (!button) {
                return;
            }

            event.preventDefault();

            localStorage.removeItem(
                "collectiveLoggedIn"
            );

            localStorage.removeItem(
                "collectiveUser"
            );

            updateLoginStatus();

            window.location.href =
                "login.html";

        }
    );

}


// ======================================================
// PROFILE
// ======================================================

function updateProfile() {

    const user =
        getCurrentUser();

    const points =
        getPoints();

    const totalSpent =
        getTotalSpent();

    const firstName =
        document.getElementById(
            "profileFirstName"
        );

    const lastName =
        document.getElementById(
            "profileLastName"
        );

    const address =
        document.getElementById(
            "profileAddress"
        );

    const phone =
        document.getElementById(
            "profilePhone"
        );

    const profilePoints =
        document.getElementById(
            "profilePoints"
        );

    const profileSpent =
        document.getElementById(
            "profileTotalSpent"
        );

    if (firstName) {

        firstName.textContent =
            user?.firstName || "";

    }

    if (lastName) {

        lastName.textContent =
            user?.lastName || "";

    }

    if (address) {

        address.textContent =
            user?.address || "";

    }

    if (phone) {

        phone.textContent =
            user?.phone || "";

    }

    if (profilePoints) {

        profilePoints.textContent =
            points;

    }

    if (profileSpent) {

        profileSpent.textContent =
            `₦${totalSpent.toLocaleString()}`;

    }

    updateRewardStatus();

}


// ======================================================
// FREE ITEM CARDS
// ======================================================

function updateFreeItemCards() {

    const totalSpent =
        getTotalSpent();

    document
        .querySelectorAll(
            ".free-item-card"
        )
        .forEach(
            card => {

                const required =
                    Number(
                        card.dataset.required || 0
                    );

                if (
                    totalSpent >= required
                ) {

                    card.classList.add(
                        "unlocked"
                    );

                    card.classList.remove(
                        "locked"
                    );

                } else {

                    card.classList.add(
                        "locked"
                    );

                    card.classList.remove(
                        "unlocked"
                    );

                }

            }
        );

}


// ======================================================
// ORDER STATUS
// ======================================================

function getLocalOrderStatus() {

    return (
        localStorage.getItem(
            "collectiveOrderStatus"
        ) || ""
    );

}

function updateOrderStatusDisplay() {

    const status =
        getLocalOrderStatus();

    document
        .querySelectorAll(
            ".order-status"
        )
        .forEach(
            element => {

                if (
                    status === "approved"
                ) {

                    element.textContent =
                        "APPROVED";

                } else if (
                    status === "rejected"
                ) {

                    element.textContent =
                        "REJECTED";

                } else if (
                    status === "delivered"
                ) {

                    element.textContent =
                        "DELIVERED";

                } else if (
                    status ===
                    "payment-checking"
                ) {

                    element.textContent =
                        "PAYMENT CHECKING";

                } else {

                    element.textContent =
                        "NO ACTIVE ORDER";

                }

            }
        );

}


// ======================================================
// FIREBASE ORDER STATUS
// ======================================================

async function checkFirebaseOrderStatus() {

    const pending =
        localStorage.getItem(
            "collectivePendingOrder"
        );

    if (!pending) {
        return;
    }

    let pendingOrder;

    try {

        pendingOrder =
            JSON.parse(
                pending
            );

    } catch (error) {

        return;

    }

    if (!pendingOrder?.id) {
        return;
    }

    try {

        const firebase =
            await firebaseReady;

        const snapshot =
            await firebase.getDocs(
                firebase.collection(
                    firebase.db,
                    "orders"
                )
            );

        snapshot.forEach(
            documentSnapshot => {

                const order =
                    documentSnapshot.data();

                if (
                    order.id !==
                    pendingOrder.id
                ) {
                    return;
                }

                if (order.status) {

                    localStorage.setItem(
                        "collectiveOrderStatus",
                        order.status
                    );

                }

                if (
                    order.status ===
                        "approved" ||
                    order.status ===
                        "delivered"
                ) {

                    const previousStatus =
                        pendingOrder.status;

                    if (
                        previousStatus !== "approved" &&
                        previousStatus !== "delivered"
                    ) {

                        const qualifyingSpend =
                            Number(
                                order.qualifyingSpend ||
                                order.originalTotal ||
                                order.total ||
                                0
                            );

                        saveTotalSpent(
                            getTotalSpent() +
                            qualifyingSpend
                        );

                        savePoints(
                            getPoints() +
                            calculatePoints(
                                qualifyingSpend
                            )
                        );

                        cart = [];

                        saveCart();

                        clearSelectedFreeGiftProducts();

                        pendingOrder.status =
                            order.status;

                        localStorage.setItem(
                            "collectivePendingOrder",
                            JSON.stringify(
                                pendingOrder
                            )
                        );

                        updateCartDisplay();

                        updatePointsDisplay();

                        updateRewardStatus();

                        updateProfile();

                        updateFreeItemCards();

                        renderGiftOptions();

                        deactivateGiftFlow();

                    }

                }

                if (
                    order.status ===
                    "rejected"
                ) {

                    pendingOrder.status =
                        "rejected";

                    localStorage.setItem(
                        "collectivePendingOrder",
                        JSON.stringify(
                            pendingOrder
                        )
                    );

                }

            }
        );

        updateOrderStatusDisplay();

    } catch (error) {

        console.error(
            "FIREBASE STATUS CHECK ERROR:",
            error
        );

    }

}


// ======================================================
// STORAGE SYNC
// ======================================================

function setupStorageSync() {

    window.addEventListener(
        "storage",
        function(event) {

            if (
                event.key ===
                "collectiveCart"
            ) {

                loadCart();

                updateCartDisplay();

                updateGiftShoppingProgress();

            }

            if (
                event.key ===
                    "collectiveSelectedFreeGifts" ||
                event.key ===
                    "collectiveFreeGifts"
            ) {

                updateCartDisplay();

                renderGiftOptions();

                updateGiftShoppingProgress();

            }

            if (
                event.key ===
                "collectivePoints"
            ) {

                updatePointsDisplay();

                updateProfile();

            }

            if (
                event.key ===
                "collectiveTotalSpent"
            ) {

                updateRewardStatus();

                updateProfile();

                updateFreeItemCards();

                updateGiftShoppingProgress();

                renderGiftOptions();

            }

            if (
                event.key ===
                    "collectiveLoggedIn" ||
                event.key ===
                    "collectiveUser"
            ) {

                updateLoginStatus();

                updateProfile();

            }

            if (
                event.key ===
                "collectiveOrderStatus"
            ) {

                updateOrderStatusDisplay();

            }

        }
    );

}


// ======================================================
// KEEP GIFT BAR CORRECT
// This also prevents the old inline shop script
// from leaving the bar visible for normal shoppers.
// ======================================================

function startGiftFlowWatcher() {

    setInterval(
        function() {

            const gifts =
                getSelectedFreeGiftProducts();

            // NORMAL SHOPPING
            if (
                gifts.length !== 5 &&
                gifts.length !== 10
            ) {

                giftCheckoutTriggered = false;

                deactivateGiftFlow();

                return;

            }

            updateGiftShoppingProgress();

        },
        300
    );

}


// ======================================================
// INITIALIZE
// ======================================================

function initializeCollective() {

    loadCart();

    createCategoryMenu();

    renderProducts();

    setupCartEvents();

    setupCartItemEvents();

    setupEscapeKey();

    setupCategoryButton();

    setupSearch();

    setupAddToCart();

    setupCheckout();

    setupLogout();

    setupStorageSync();

    updateCartDisplay();

    updatePointsDisplay();

    updateRewardStatus();

    updateLoginStatus();

    updateProfile();

    updateFreeItemCards();

    updateOrderStatusDisplay();

    updateGiftShoppingProgress();

    renderGiftOptions();

    startGiftFlowWatcher();

    checkFirebaseOrderStatus();

    console.log(
        "THE COLLECTIVE.CO SHOP SYSTEM READY"
    );

}


// ======================================================
// START ONCE
// ======================================================

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeCollective,
        {
            once: true
        }
    );

} else {

    initializeCollective();

}


// ======================================================
// CHECK ORDER STATUS
// ======================================================

setInterval(
    checkFirebaseOrderStatus,
    5000
);
