/* =========================================================
   THE COLLECTIVE.CO — COMPLETE SHOP SYSTEM
========================================================= */

/* ========================= FIREBASE ========================= */

const firebaseConfig = {
    apiKey: "AIzaSyCkavvOeD4GEtUsq4S-QuTU4ejedf8Ci8",
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
            addDoc
        } = await import(
            "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js"
        );

        const app = initializeApp(firebaseConfig);

        firebaseDB = {
            db: getFirestore(app),
            collection,
            addDoc
        };

        console.log("Firebase connected.");
    } catch (error) {
        console.error("Firebase connection error:", error);
    }
})();

/* ========================= PRODUCT CREATOR ========================= */

function makeProducts(category, products) {
    const result = [];

    products.forEach(item => {
        const count = item.count || 30;

        for (let i = 1; i <= count; i++) {
            let price = item.price;

            if (Array.isArray(item.price)) {
                const min = item.price[0];
                const max = item.price[1];
                const step = (max - min) / Math.max(count - 1, 1);

                price =
                    Math.round(
                        (min + step * (i - 1)) / 100
                    ) * 100;
            }

            result.push({
                id: `${item.name}-${i}`,
                name: item.name,
                listing: `${item.name} ${i}`,
                category,
                price,
                description: item.description || "",
                size: item.size || "",
                sizes: item.sizes || [],
                colors: item.colors || [],
                stock: 10
            });
        }
    });

    return result;
}

/* ========================= PRODUCT CATALOG ========================= */

const productCatalog = [

    ...makeProducts("Skincare", [
        { name:"Men's Perfume", price:[12000,20000], size:"100 ml", description:"A masculine perfume." },
        { name:"Body Butter", price:[5000,9500] },
        { name:"Sunscreen", price:[4000,9000] },
        { name:"Face Cleanser", price:[7500,10000] },
        { name:"Body Scrub", price:[4000,8000] },
        { name:"Face Serum", price:[1500,4500] },
        { name:"Lip Mask", price:[1000,3000] },
        { name:"Rhode Lip Gloss", price:[10000,15000], colors:["Clear","Pink","Brown"] },
        { name:"SHEGLAM Lip Gloss", price:[10000,15000], colors:["Clear","Pink","Nude","Brown"] },
        { name:"USHAS Lip Gloss", price:[10000,15000], colors:["Clear","Pink","Nude","Brown"] },
        { name:"Clear Normal Lip Gloss", price:[1000,2000], colors:["Clear"] },
        { name:"Lip Balm", price:[1000,2000] },
        { name:"Shower Gel", price:12000 },
        { name:"Men's Fragrance Perfume", price:[9000,10000], size:"50 ml" },
        { name:"Women's Fragrance Perfume", price:[9000,10000], size:"50 ml" },
        { name:"Body Lotion", price:[8000,12000] },
        { name:"Face Moisturizer", price:[3000,7000] },
        { name:"Face Toner", price:[6500,10000] },
        { name:"Body Oil", price:[6000,10000] },
        { name:"Face Mask", price:[1000,4500] },
        { name:"Lip Oil", price:[1000,2000] },
        { name:"Pimple Patch", price:[500,1800] }
    ]),

    ...makeProducts("Accessories", [
        { name:"Bead Bracelet Set", price:[3000,6000], colors:["Black","White","Pink","Brown","Blue"] },
        { name:"Masculine Chain Bracelet", price:[1000,3500], colors:["Silver","Gold","Black"] },
        { name:"Chrome Heart Glasses", price:[15000,20000], colors:["Black","White","Brown"] },
        { name:"Glasses", price:[2000,5000], colors:["Black","Brown","Clear"] },
        { name:"Glasses Set of 3", price:[4000,5000] },
        { name:"Glasses Set of 5", price:[5000,10000] },
        { name:"Scrunchies", price:1200, colors:["Black","White","Pink","Brown","Blue"] },
        { name:"Stanley Cup", price:15000, colors:["White","Pink","Black","Blue"] },
        { name:"Body Floral Stanley Cup", price:20000, colors:["Pink","White","Blue"] },
        { name:"Headband", price:1600, colors:["Black","White","Pink","Brown"] },
        { name:"Tote Bag", price:[10000,20000], colors:["Black","White","Brown","Pink"] },
        { name:"Claw Clip", price:[2000,2500], colors:["Black","White","Brown","Pink"] },
        { name:"Anklet", price:[1000,2000], colors:["Silver","Gold"] },
        { name:"Necklace", price:[1000,3500], colors:["Silver","Gold"] },
        { name:"Silver Bracelet", price:3500 },
        { name:"Gold Bracelet", price:3500 },
        { name:"Vacuum Cups", price:[10000,20000], colors:["White","Black","Pink","Blue"] }
    ]),

    ...makeProducts("Clothing", [
        { name:"Plain Tops", price:[6500,8000], sizes:["S","M","L"], colors:["Black","White","Grey","Brown","Pink","Blue"] },
        { name:"Graphic Tops", price:[8000,10000], sizes:["S","M","L"], colors:["Black","White","Grey","Brown","Pink","Blue"] },
        { name:"Tube Tops", price:[5000,15000], sizes:["S","M","L"], colors:["Black","White","Grey","Brown","Pink","Blue"] },
        { name:"Jersey Tops", price:8500, sizes:["S","M","L"], colors:["Black","White","Grey","Blue"] },
        { name:"Hoodies", price:[9500,10000], sizes:["S","M","L"], colors:["Black","White","Grey","Brown","Pink","Blue"] },
        { name:"Zip-Up Hoodies", price:[9000,15000], sizes:["S","M","L"], colors:["Black","White","Grey","Brown","Pink","Blue"] },
        { name:"Plain Sweatpants", price:10000, sizes:["S","M","L"], colors:["Black","White","Grey","Brown"] },
        { name:"Leopard Sweatpants", price:15000, sizes:["S","M","L"], colors:["Brown","Black"] },
        { name:"Designer Sweatpants", price:20000, sizes:["S","M","L"], colors:["Black","White","Grey","Brown"] },
        { name:"Shorts", price:10000, sizes:["S","M","L"], colors:["Black","White","Grey","Brown","Blue"] },
        { name:"Jean Bum Shorts", price:5000, sizes:["S","M","L"], colors:["Blue","Black","Grey"] },
        { name:"Jeans", price:10000, sizes:["S","M","L"], colors:["Blue","Black","Grey"] },
        { name:"Designed Jeans", price:20000, sizes:["S","M","L"], colors:["Blue","Black","Grey"] },
        { name:"Bootcut Jeans", price:10000, sizes:["S","M","L"], colors:["Blue","Black","Grey"] },
        { name:"Jeans Skirt", price:6500, sizes:["S","M","L"], colors:["Blue","Black","Grey"] },
        { name:"Pleated Jeans Skirt", price:6000, sizes:["S","M","L"], colors:["Blue","Black","Grey"] },
        { name:"Normal Shorts", price:4000, sizes:["S","M","L"], colors:["Black","White","Grey","Brown","Pink","Blue"] }
    ]),

    ...makeProducts("Shoes", [
        { name:"Shoes", price:[15000,30000], sizes:["36","37","38","39","40","41","42","43","44","45"], colors:["Black","White","Brown","Grey"] },
        { name:"Adidas Sambas", price:[30000,50000], sizes:["36","37","38","39","40","41","42","43","44","45"], colors:["Black","White","Brown"] },
        { name:"Adidas Campus", price:[30000,50000], sizes:["36","37","38","39","40","41","42","43","44","45"], colors:["Black","White","Grey","Brown"] },
        { name:"Slides", price:9000, sizes:["36","37","38","39","40","41","42","43","44","45"], colors:["Black","White","Brown"] },
        { name:"Crocs", price:10000, sizes:["36","37","38","39","40","41","42","43","44","45"], colors:["Black","White","Brown","Pink","Blue"] },
        { name:"Loafers", price:[15000,30000], sizes:["36","37","38","39","40","41","42","43","44","45"], colors:["Black","Brown"] },
        { name:"Clogs", price:[35000,70000], sizes:["36","37","38","39","40","41","42","43","44","45"], colors:["Black","White","Brown","Grey"] },
        { name:"Timberland", price:[5000,40000], sizes:["36","37","38","39","40","41","42","43","44","45"], colors:["Black","Brown","Wheat"] },
        { name:"Vans", price:[5000,40000], sizes:["36","37","38","39","40","41","42","43","44","45"], colors:["Black","White","Grey"] },
        { name:"Puma", price:[25000,50000], sizes:["36","37","38","39","40","41","42","43","44","45"], colors:["Black","White","Grey","Pink"] }
    ]),

    ...makeProducts("Bags", [
        { name:"Hermes Bags", price:[35000,50000], colors:["Black","White","Brown"] },
        { name:"Mini Gucci Bags", price:[20000,50000], colors:["Black","White","Brown","Pink"] },
        { name:"Gucci Bags", price:[35000,60000], colors:["Black","White","Brown"] },
        { name:"Prada Bags", price:[35000,60000], colors:["Black","White","Brown"] },
        { name:"Dior Bags", price:[35000,70000], colors:["Black","White","Brown"] },
        { name:"Chanel Bags", price:[45000,70000], colors:["Black","White","Brown","Pink"] },
        { name:"Louis Vuitton Bags", price:[25000,70000], colors:["Black","White","Brown"] },
        { name:"Cartier Watches", price:[20000,35000], colors:["Gold","Silver"] },
        { name:"Cartier Glasses", price:[15000,25000], colors:["Black","Brown","Clear"] }
    ])
];

/* ========================= STORAGE ========================= */

const CART_KEY = "collectiveCart";
const POINTS_KEY = "collectivePoints";
const TOTAL_SPENT_KEY = "collectiveTotalSpent";
const GIFT_KEY = "collectiveSelectedFreeGifts";
const OLD_GIFT_KEY = "collectiveFreeGifts";
const GIFT_FLOW_KEY = "collectiveGiftFlowActive";
const GIFT_POPUP_KEY = "collectiveGiftPopupShown";

let automaticGiftCheckoutStarted = false;

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
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartDisplay();
}

function getTotalSpent() {
    return Number(
        localStorage.getItem(TOTAL_SPENT_KEY) || "0"
    );
}

function getCartTotal() {
    return getCart().reduce(
        (total, item) =>
            total +
            Number(item.price || 0) *
            Number(item.quantity || 1),
        0
    );
}

/* ========================= FREE GIFTS ========================= */

function getSelectedFreeGiftProducts() {
    let gifts = [];

    try {
        gifts = JSON.parse(
            localStorage.getItem(GIFT_KEY) || "[]"
        );
    } catch {
        gifts = [];
    }

    if (!Array.isArray(gifts) || !gifts.length) {
        try {
            gifts = JSON.parse(
                localStorage.getItem(OLD_GIFT_KEY) || "[]"
            );
        } catch {
            gifts = [];
        }
    }

    if (!Array.isArray(gifts)) return [];

    return gifts
        .map(gift => {
            if (gift && typeof gift === "object" && gift.id) {
                return (
                    productCatalog.find(
                        product => product.id === gift.id
                    ) || gift
                );
            }

            if (typeof gift === "string") {
                return productCatalog.find(
                    product => product.id === gift
                );
            }

            return null;
        })
        .filter(Boolean);
}

function saveSelectedFreeGiftProducts(gifts) {
    localStorage.setItem(
        GIFT_KEY,
        JSON.stringify(gifts)
    );

    localStorage.setItem(
        OLD_GIFT_KEY,
        JSON.stringify(gifts)
    );

    updateGiftProgress();
    updateCartDisplay();
}

function clearSelectedFreeGiftProducts() {
    localStorage.removeItem(GIFT_KEY);
    localStorage.removeItem(OLD_GIFT_KEY);
    localStorage.removeItem(GIFT_FLOW_KEY);
    localStorage.removeItem(GIFT_POPUP_KEY);

    automaticGiftCheckoutStarted = false;

    const bar = document.getElementById("giftSpendBar");

    if (bar) bar.style.display = "none";

    document.body.classList.remove(
        "gift-shopping-active"
    );
}

function getFreeGiftLevel() {
    const spent = getTotalSpent();

    if (spent >= 100000) return 10;
    if (spent >= 50000) return 5;

    return 0;
}

/* ========================= GIFT PROGRESS ========================= */

function updateGiftProgress() {
    const selected = getSelectedFreeGiftProducts();
    const bar = document.getElementById("giftSpendBar");
    const amount = document.getElementById("giftSpendAmount");
    const fill = document.getElementById("giftSpendFill");
    const message = document.getElementById("giftSpendMessage");

    const giftFlow =
        localStorage.getItem(GIFT_FLOW_KEY) === "true";

    /*
       NORMAL SHOPPING:
       Absolutely no gift bar.
    */

    if (!giftFlow) {
        if (bar) bar.style.display = "none";

        document.body.classList.remove(
            "gift-shopping-active"
        );

        automaticGiftCheckoutStarted = false;
        return;
    }

    /*
       Gift flow only starts after all required
       gifts have been selected.
    */

    if (selected.length !== 5 && selected.length !== 10) {
        if (bar) bar.style.display = "none";
        return;
    }

    const target =
        selected.length === 10
            ? 100000
            : 50000;

    const total = getCartTotal();

    const percentage = Math.min(
        (total / target) * 100,
        100
    );

    if (bar) bar.style.display = "block";

    document.body.classList.add(
        "gift-shopping-active"
    );

    if (amount) {
        amount.textContent =
            `₦${total.toLocaleString()} / ₦${target.toLocaleString()}`;
    }

    if (fill) {
        fill.style.width = `${percentage}%`;
    }

    if (message) {
        if (total >= target) {
            message.textContent =
                `✓ ₦${target.toLocaleString()} reached!`;
        } else {
            message.textContent =
                `Spend ₦${(
                    target - total
                ).toLocaleString()} more to take away your ${selected.length} gifts.`;
        }
    }

    if (
        total >= target &&
        !automaticGiftCheckoutStarted
    ) {
        automaticGiftCheckoutStarted = true;

        if (bar) bar.style.display = "none";

        document.body.classList.remove(
            "gift-shopping-active"
        );

        setTimeout(() => {
            checkout();
        }, 500);
    }
}

/* ========================= GIFT POPUP ========================= */

function showGiftPickedPopup(selectedCount, unlocked) {
    if (
        selectedCount !== unlocked ||
        unlocked < 5
    ) return;

    const target =
        unlocked === 10
            ? 100000
            : 50000;

    const popup = document.createElement("div");

    popup.id = "giftPickedPopup";

    popup.style.cssText = `
        position:fixed;
        inset:0;
        z-index:100000;
        display:flex;
        align-items:center;
        justify-content:center;
        background:rgba(48,75,82,.45);
        padding:20px;
        box-sizing:border-box;
    `;

    popup.innerHTML = `
        <div style="
            width:min(450px,100%);
            background:#FFFDF8;
            border-radius:23px;
            padding:32px 25px;
            text-align:center;
            box-shadow:0 18px 50px rgba(0,0,0,.2);
        ">

            <div style="font-size:45px;">🎁</div>

            <h2 style="color:#304B52;">
                Your ${unlocked} gifts are saved!
            </h2>

            <p style="
                color:#71858A;
                line-height:1.6;
            ">
                Spend <strong>
                    ₦${target.toLocaleString()}
                </strong>
                on your purchases to take away
                your ${unlocked} free gifts.
            </p>

            <p style="
                color:#71858A;
                line-height:1.6;
                font-size:14px;
            ">
                Your free gifts do not count toward
                the ₦${target.toLocaleString()}.
            </p>

            <button
                id="giftPopupClose"
                type="button"
                style="
                    margin-top:12px;
                    border:none;
                    border-radius:25px;
                    padding:12px 28px;
                    background:#304B52;
                    color:white;
                    cursor:pointer;
                "
            >
                OK
            </button>

        </div>
    `;

    document.body.appendChild(popup);

    document
        .getElementById("giftPopupClose")
        ?.addEventListener(
            "click",
            () => popup.remove()
        );

    setTimeout(() => {
        if (popup.parentNode) popup.remove();
    }, 5000);
}

/* ========================= GIFT OPTIONS ========================= */

function renderGiftOptions() {
    const container =
        document.getElementById("giftOptions");

    if (!container) return;

    const unlocked = getFreeGiftLevel();

    container.innerHTML = "";

    if (unlocked === 0) {
        container.innerHTML = `
            <p style="
                color:#71858A;
                font-size:14px;
            ">
                Free gifts will appear here
                when you unlock them.
            </p>
        `;
        return;
    }

    const giftProducts =
        productCatalog
            .filter(
                product =>
                    product.category === "Accessories" ||
                    product.category === "Skincare"
            )
            .slice(0, unlocked);

    const selected =
        getSelectedFreeGiftProducts();

    giftProducts.forEach(product => {
        const label =
            document.createElement("label");

        label.style.cssText = `
            display:flex;
            align-items:center;
            gap:10px;
            margin:10px 0;
            cursor:pointer;
            color:#304B52;
        `;

        const checkbox =
            document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.checked =
            selected.some(
                gift => gift.id === product.id
            );

        checkbox.addEventListener(
            "change",
            function () {
                let gifts =
                    getSelectedFreeGiftProducts();

                if (this.checked) {
                    if (
                        !gifts.some(
                            gift =>
                                gift.id === product.id
                        )
                    ) {
                        gifts.push(product);
                    }
                } else {
                    gifts = gifts.filter(
                        gift =>
                            gift.id !== product.id
                    );
                }

                saveSelectedFreeGiftProducts(gifts);

                /*
                 * REQUIRED NUMBER OF GIFTS SELECTED.
                 */

                if (gifts.length === unlocked) {
                    localStorage.setItem(
                        GIFT_FLOW_KEY,
                        "true"
                    );

                    localStorage.removeItem(
                        GIFT_POPUP_KEY
                    );

                    automaticGiftCheckoutStarted =
                        false;

                    showGiftPickedPopup(
                        gifts.length,
                        unlocked
                    );

                    updateGiftProgress();

                } else {
                    /*
                     * If they haven't finished selecting
                     * gifts, they are NOT in spending mode.
                     */

                    localStorage.removeItem(
                        GIFT_FLOW_KEY
                    );

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
                }
            }
        );

        label.appendChild(checkbox);

        label.appendChild(
            document.createTextNode(product.name)
        );

        container.appendChild(label);
    });
}

/* ========================= CART ========================= */

function updateCartDisplay() {
    const cart = getCart();
    const gifts = getSelectedFreeGiftProducts();

    const count =
        document.getElementById("cartCount");

    const items =
        document.getElementById("cartItems");

    const totalElement =
        document.getElementById("cartTotal");

    if (count) {
        count.textContent =
            cart.reduce(
                (total, item) =>
                    total +
                    Number(item.quantity || 1),
                0
            );
    }

    if (items) {
        items.innerHTML = "";

        if (
            cart.length === 0 &&
            gifts.length === 0
        ) {
            items.innerHTML =
                `<p class="empty-cart">
                    Your cart is empty.
                </p>`;
        }

        cart.forEach((item, index) => {
            const quantity =
                Number(item.quantity || 1);

            const itemTotal =
                Number(item.price || 0) *
                quantity;

            const div =
                document.createElement("div");

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

        gifts.forEach(gift => {
            const div =
                document.createElement("div");

            div.className = "cart-item";

            div.innerHTML = `
                <div class="cart-item-info">

                    <h3>
                        🎁 ${gift.name || "Free Gift"}
                    </h3>

                    <small>
                        FREE GIFT
                    </small>

                    <strong>
                        ₦0
                    </strong>

                </div>

                <div>
                    <strong>FREE</strong>
                </div>
            `;

            items.appendChild(div);
        });
    }

    if (totalElement) {
        totalElement.textContent =
            `₦${getCartTotal().toLocaleString()}`;
    }

    updateGiftProgress();
}

function changeCartQuantity(index, amount) {
    const cart = getCart();

    if (!cart[index]) return;

    const next =
        Number(cart[index].quantity || 1) +
        amount;

    if (next <= 0) {
        cart.splice(index, 1);
    } else {
        cart[index].quantity =
            Math.min(next, 10);
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

    const existing =
        cart.find(
            item =>
                item.id === product.id &&
                item.color === color &&
                item.size === size
        );

    if (existing) {
        existing.quantity =
            Math.min(
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
    const old =
        document.getElementById(
            "collectiveSmallMessage"
        );

    if (old) old.remove();

    const box =
        document.createElement("div");

    box.id =
        "collectiveSmallMessage";

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
        if (box.parentNode) box.remove();
    }, 2200);
}

/* ========================= MIX PRODUCTS ========================= */

/*
   Creates a mixed/scattered product order.
   Products from different categories and different
   product types are spread throughout the shop.
*/

function shuffleProducts(products) {
    const array = [...products];

    for (let i = array.length - 1; i > 0; i--) {
        const j =
            Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] =
            [array[j], array[i]];
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

    const noProducts =
        document.querySelector(".no-products");

    if (!grid) {
        console.error("Product grid was not found.");
        return;
    }

    grid.innerHTML = "";

    if (!products || products.length === 0) {
        if (noProducts)
            noProducts.style.display = "block";

        return;
    }

    if (noProducts)
        noProducts.style.display = "none";

    /*
       IMPORTANT:
       Only MIX when displaying ALL PRODUCTS.
       Search/category results stay logically filtered.
    */

    const displayProducts =
        products === productCatalog
            ? shuffleProducts(products)
            : products;

    displayProducts
        .slice(0, 60)
        .forEach(product => {

            const card =
                document.createElement("div");

            card.className =
                "product-card";

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

                        ${product.colors
                            .map(
                                color =>
                                    `<option value="${color}">
                                        ${color}
                                    </option>`
                            )
                            .join("")}
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

                        ${product.sizes
                            .map(
                                size =>
                                    `<option value="${size}">
                                        ${size}
                                    </option>`
                            )
                            .join("")}
                    </select>
                `;
            } else if (product.size) {
                sizeHTML =
                    `<p>Size: ${product.size}</p>`;
            }

            card.innerHTML = `
                <div class="product-image">
                    🛍️
                </div>

                <div class="product-information">

                    <small>
                        ${product.category}
                    </small>

                    <h3>
                        ${product.name}
                    </h3>

                    <p>
                        ${product.description}
                    </p>

                    ${sizeHTML}

                    <strong class="product-price">
                        ₦${Number(
                            product.price
                        ).toLocaleString()}
                    </strong>

                    <div class="stock-status">
                        In stock
                    </div>

                    ${colorHTML}

                    <button
                        type="button"
                        class="add-to-cart"
                        data-product-id="${product.id}"
                    >
                        ADD TO CART
                    </button>

                </div>
            `;

            card
                .querySelector(".add-to-cart")
                ?.addEventListener(
                    "click",
                    () => {

                        const colorSelect =
                            card.querySelector(
                                ".product-color"
                            );

                        const sizeSelect =
                            card.querySelector(
                                ".product-size"
                            );

                        const color =
                            colorSelect
                                ? colorSelect.value
                                : "";

                        const size =
                            sizeSelect
                                ? sizeSelect.value
                                : product.size || "";

                        if (
                            product.sizes?.length &&
                            !size
                        ) {
                            showSmallMessage(
                                "Please select a size."
                            );
                            return;
                        }

                        if (
                            product.colors?.length &&
                            !color
                        ) {
                            showSmallMessage(
                                "Please select a color."
                            );
                            return;
                        }

                        addToCart(
                            product,
                            color,
                            size
                        );
                    }
                );

            grid.appendChild(card);
        });
}

/* ========================= SEARCH ========================= */

function setupSearch() {
    const input =
        document.getElementById(
            "productSearch"
        );

    const button =
        document.getElementById(
            "searchButton"
        );

    if (!input) return;

    function search() {
        const term =
            input.value
                .trim()
                .toLowerCase();

        const results =
            productCatalog.filter(
                product =>
                    product.name
                        .toLowerCase()
                        .includes(term) ||
                    product.category
                        .toLowerCase()
                        .includes(term)
            );

        renderProducts(
            term ? results : productCatalog
        );
    }

    input.addEventListener(
        "input",
        search
    );

    button?.addEventListener(
        "click",
        search
    );
}

/* ========================= CATEGORY ========================= */

function setupCategories() {
    const menu =
        document.getElementById(
            "categoryMenu"
        );

    const button =
        document.getElementById(
            "categoryBtn"
        );

    if (!menu) return;

    const categories = [
        "All Products",
        "Skincare",
        "Accessories",
        "Clothing",
        "Shoes",
        "Bags"
    ];

    menu.innerHTML = "";

    categories.forEach(category => {

        const btn =
            document.createElement("button");

        btn.className =
            "category-button";

        if (category === "All Products") {
            btn.classList.add("selected");
        }

        btn.textContent = category;

        btn.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        ".category-button"
                    )
                    .forEach(item =>
                        item.classList.remove(
                            "selected"
                        )
                    );

                btn.classList.add("selected");

                if (category === "All Products") {
                    renderProducts(productCatalog);
                } else {
                    renderProducts(
                        productCatalog.filter(
                            product =>
                                product.category ===
                                category
                        )
                    );
                }
            }
        );

        menu.appendChild(btn);
    });

    button?.addEventListener(
        "click",
        event => {

            event.preventDefault();

            menu.style.display =
                menu.style.display === "flex"
                    ? "none"
                    : "flex";
        }
    );
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
        ?.addEventListener(
            "click",
            openCart
        );

    document
        .getElementById("closeCart")
        ?.addEventListener(
            "click",
            closeCart
        );

    document
        .getElementById("cartItems")
        ?.addEventListener(
            "click",
            event => {

                const button =
                    event.target.closest(
                        "button"
                    );

                if (!button) return;

                const index =
                    Number(
                        button.dataset.index
                    );

                if (
                    button.dataset.action ===
                    "plus"
                ) {
                    changeCartQuantity(
                        index,
                        1
                    );
                }

                if (
                    button.dataset.action ===
                    "minus"
                ) {
                    changeCartQuantity(
                        index,
                        -1
                    );
                }

                if (
                    button.classList.contains(
                        "remove-cart-item"
                    )
                ) {
                    removeCartItem(index);
                }
            }
        );
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
        showSmallMessage(
            "Your cart is empty."
        );
        return;
    }

    const loggedIn =
        localStorage.getItem(
            "collectiveLoggedIn"
        ) === "true" ||
        localStorage.getItem(
            "loggedIn"
        ) === "true";

    if (!loggedIn) {
        alert(
            "Please log in before checking out."
        );

        window.location.href =
            "login.html";

        return;
    }

    createCheckoutModal();
}

window.checkout = checkout;
window.getCartTotal = getCartTotal;
window.updateCartDisplay = updateCartDisplay;

/* ========================= CHECKOUT MODAL ========================= */

function createCheckoutModal() {

    const old =
        document.getElementById(
            "collectiveCheckoutModal"
        );

    if (old) old.remove();

    const cart = getCart();
    const gifts = getSelectedFreeGiftProducts();
    const paidTotal = getCartTotal();

    const modal =
        document.createElement("div");

    modal.id =
        "collectiveCheckoutModal";

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
            width:min(600px,100%);
            max-height:90vh;
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

                ${
                    gifts.length
                        ? `
                            <div style="
                                margin-top:18px;
                                padding:15px;
                                border-radius:15px;
                                background:#E8F1F2;
                            ">

                                <strong>
                                    🎁 Your Free Gifts
                                </strong>

                                ${gifts.map(
                                    gift => `
                                        <div style="
                                            margin-top:8px;
                                            color:#6F858A;
                                        ">
                                            ${gift.name}
                                            — FREE
                                        </div>
                                    `
                                ).join("")}

                            </div>
                        `
                        : ""
                }

                <div style="
                    display:flex;
                    justify-content:space-between;
                    margin-top:25px;
                    padding-top:20px;
                    border-top:1px solid #DCEFF2;
                    color:#304B52;
                    font-size:19px;
                ">

                    <strong>Total to pay</strong>

                    <strong>
                        ₦${paidTotal.toLocaleString()}
                    </strong>

                </div>

                <button
                    id="continueToPayment"
                    type="button"
                    style="
                        width:100%;
                        margin-top:25px;
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
        .getElementById(
            "closeCheckoutModal"
        )
        ?.addEventListener(
            "click",
            () => modal.remove()
        );

    document
        .getElementById(
            "continueToPayment"
        )
        ?.addEventListener(
            "click",
            () => {
                modal.remove();
                showPaymentModal();
            }
        );
}

/* ========================= PAYMENT ========================= */

function showPaymentModal() {

    const old =
        document.getElementById(
            "collectivePaymentModal"
        );

    if (old) old.remove();

    const modal =
        document.createElement("div");

    modal.id =
        "collectivePaymentModal";

    const total = getCartTotal();

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
                    ₦${total.toLocaleString()}
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
        .getElementById(
            "cancelPaymentButton"
        )
        ?.addEventListener(
            "click",
            () => modal.remove()
        );

    document
        .getElementById(
            "paymentMadeButton"
        )
        ?.addEventListener(
            "click",
            async () => {

                const button =
                    document.getElementById(
                        "paymentMadeButton"
                    );

                if (!button) return;

                button.disabled = true;
                button.textContent =
                    "SUBMITTING ORDER...";

                await createPendingOrder();

                modal.remove();

                showSmallMessage(
                    "Order submitted successfully."
                );
            }
        );
}

/* ========================= FIREBASE ORDER ========================= */

async function createPendingOrder() {

    const cart = getCart();
    const gifts = getSelectedFreeGiftProducts();
    const paidTotal = getCartTotal();

    const customer =
        localStorage.getItem(
            "collectiveUser"
        ) ||
        localStorage.getItem(
            "user"
        ) ||
        "Customer";

    const order = {
        customer,
        items: cart,
        freeGifts: gifts,
        paidTotal,
        qualifyingSpend: paidTotal,
        status: "pending",
        createdAt:
            new Date().toISOString()
    };

    if (firebaseDB?.db) {

        try {

            await firebaseDB.addDoc(
                firebaseDB.collection(
                    firebaseDB.db,
                    "orders"
                ),
                order
            );

            localStorage.removeItem(
                CART_KEY
            );

            clearSelectedFreeGiftProducts();

            updateCartDisplay();

        } catch (error) {

            console.error(
                "Could not save order:",
                error
            );

            localStorage.setItem(
                "collectivePendingOrder",
                JSON.stringify(order)
            );
        }

    } else {

        localStorage.setItem(
            "collectivePendingOrder",
            JSON.stringify(order)
        );
    }
}

/* ========================= CHECKOUT BUTTON ========================= */

function setupCheckout() {

    const button =
        document.getElementById(
            "checkoutBtn"
        );

    if (!button) return;

    button.addEventListener(
        "click",
        event => {

            event.preventDefault();
            event.stopPropagation();

            checkout();
        }
    );
}

/* ========================= STORAGE SYNC ========================= */

function setupStorageSync() {

    window.addEventListener(
        "storage",
        event => {

            if (
                [
                    CART_KEY,
                    GIFT_KEY,
                    OLD_GIFT_KEY,
                    POINTS_KEY,
                    TOTAL_SPENT_KEY,
                    GIFT_FLOW_KEY
                ].includes(event.key)
            ) {

                updateCartDisplay();
                renderGiftOptions();
                updateGiftProgress();
            }
        }
    );

    setInterval(
        () => {
            updateCartDisplay();
            updateGiftProgress();
        },
        1000
    );
}

/* ========================= INITIALISE ========================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        console.log(
            "THE COLLECTIVE.CO shop loaded."
        );

        /*
         * MIXED PRODUCT DISPLAY
         */
        renderProducts(productCatalog);

        setupSearch();
        setupCategories();
        setupCart();
        setupCheckout();

        updateCartDisplay();
        renderGiftOptions();
        updateGiftProgress();

        setupStorageSync();
    }
);
