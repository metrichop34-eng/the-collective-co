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
        getDocs: firestore.getDocs,
        query: firestore.query,
        orderBy: firestore.orderBy,
        doc: firestore.doc,
        updateDoc: firestore.updateDoc
    };

});


// ======================================================
// THE COLLECTIVE.CO — COMPLETE SHOP SYSTEM
// CART + CHECKOUT + POINTS + FREE GIFTS + LOGIN
// ======================================================


// ======================================================
// PRODUCT CATALOGUE
// ======================================================

const productCatalog = [

    // ==================================================
    // SKINCARE
    // ==================================================

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
        max: 9500,
        size: "Not specified"
    },

    {
        name: "Sunscreen",
        category: "Skincare",
        min: 4000,
        max: 9000,
        size: "Not specified"
    },

    {
        name: "Face Cleanser",
        category: "Skincare",
        min: 7500,
        max: 10000,
        size: "Not specified"
    },

    {
        name: "Body Scrub",
        category: "Skincare",
        min: 4000,
        max: 8000,
        size: "Not specified"
    },

    {
        name: "Face Serum",
        category: "Skincare",
        min: 1500,
        max: 4500,
        size: "Not specified"
    },

    {
        name: "Lip Mask",
        category: "Skincare",
        min: 1000,
        max: 3000,
        size: "Not specified"
    },

    {
        name: "Rhode Lip Gloss",
        category: "Skincare",
        min: 10000,
        max: 15000,
        size: "Not specified",
        colors: [
            "Clear",
            "Pink",
            "Brown"
        ]
    },

    {
        name: "SHEGLAM Lip Gloss",
        category: "Skincare",
        min: 10000,
        max: 15000,
        size: "Not specified",
        colors: [
            "Clear",
            "Pink",
            "Nude",
            "Brown"
        ]
    },

    {
        name: "USHAS Lip Gloss",
        category: "Skincare",
        min: 10000,
        max: 15000,
        size: "Not specified",
        colors: [
            "Clear",
            "Pink",
            "Nude",
            "Brown"
        ]
    },

    {
        name: "Clear Normal Lip Gloss",
        category: "Skincare",
        min: 1000,
        max: 2000,
        size: "Not specified",
        colors: [
            "Clear"
        ]
    },

    {
        name: "Lip Balm",
        category: "Skincare",
        min: 1000,
        max: 2000,
        size: "Not specified"
    },

    {
        name: "Shower Gel",
        category: "Skincare",
        min: 12000,
        max: 12000,
        size: "Not specified"
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
        max: 12000,
        size: "Not specified"
    },

    {
        name: "Face Moisturizer",
        category: "Skincare",
        min: 3000,
        max: 7000,
        size: "Not specified"
    },

    {
        name: "Face Toner",
        category: "Skincare",
        min: 6500,
        max: 10000,
        size: "Not specified"
    },

    {
        name: "Body Oil",
        category: "Skincare",
        min: 6000,
        max: 10000,
        size: "Not specified"
    },

    {
        name: "Face Mask",
        category: "Skincare",
        min: 1000,
        max: 4500,
        size: "Not specified"
    },

    {
        name: "Lip Oil",
        category: "Skincare",
        min: 1000,
        max: 2000,
        size: "Not specified"
    },

    {
        name: "Pimple Patch",
        category: "Skincare",
        min: 500,
        max: 1800,
        size: "Not specified"
    },


    // ==================================================
    // ACCESSORIES
    // ==================================================

    {
        name: "Bead Bracelet Set",
        category: "Accessories",
        min: 3000,
        max: 6000
    },

    {
        name: "Masculine Chain Bracelet",
        category: "Accessories",
        min: 1000,
        max: 3500
    },

    {
        name: "Chrome Heart Glasses",
        category: "Accessories",
        min: 15000,
        max: 20000
    },

    {
        name: "Glasses",
        category: "Accessories",
        min: 2000,
        max: 5000
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
        max: 1200
    },

    {
        name: "Stanley Cup",
        category: "Accessories",
        min: 15000,
        max: 15000
    },

    {
        name: "Body Floral Stanley Cup",
        category: "Accessories",
        min: 20000,
        max: 20000
    },

    {
        name: "Headband",
        category: "Accessories",
        min: 1600,
        max: 1600
    },

    {
        name: "Tote Bag",
        category: "Accessories",
        min: 10000,
        max: 20000
    },

    {
        name: "Claw Clip",
        category: "Accessories",
        min: 2000,
        max: 2500
    },

    {
        name: "Anklet",
        category: "Accessories",
        min: 1000,
        max: 2000
    },

    {
        name: "Necklace",
        category: "Accessories",
        min: 1000,
        max: 3500
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
        max: 20000
    },


    // ==================================================
    // CLOTHING
    // ==================================================

    {
        name: "Plain Tops",
        category: "Clothing",
        min: 6500,
        max: 8000
    },

    {
        name: "Graphic Tops",
        category: "Clothing",
        min: 8000,
        max: 10000
    },

    {
        name: "Tube Tops",
        category: "Clothing",
        min: 5000,
        max: 15000
    },

    {
        name: "Jersey Tops",
        category: "Clothing",
        min: 8500,
        max: 8500
    },

    {
        name: "Hoodies",
        category: "Clothing",
        min: 9500,
        max: 10000
    },

    {
        name: "Zip-Up Hoodies",
        category: "Clothing",
        min: 9000,
        max: 15000
    },

    {
        name: "Plain Sweatpants",
        category: "Clothing",
        min: 10000,
        max: 10000
    },

    {
        name: "Leopard Sweatpants",
        category: "Clothing",
        min: 15000,
        max: 15000
    },

    {
        name: "Designer Sweatpants",
        category: "Clothing",
        min: 20000,
        max: 20000
    },

    {
        name: "Shorts",
        category: "Clothing",
        min: 10000,
        max: 10000
    },

    {
        name: "Jean Bum Shorts",
        category: "Clothing",
        min: 5000,
        max: 5000
    },

    {
        name: "Jeans",
        category: "Clothing",
        min: 10000,
        max: 10000
    },

    {
        name: "Designed Jeans",
        category: "Clothing",
        min: 20000,
        max: 20000
    },

    {
        name: "Bootcut Jeans",
        category: "Clothing",
        min: 10000,
        max: 10000
    },

    {
        name: "Jeans Skirt",
        category: "Clothing",
        min: 6500,
        max: 6500
    },

    {
        name: "Pleated Jeans Skirt",
        category: "Clothing",
        min: 6000,
        max: 6000
    },

    {
        name: "Normal Shorts",
        category: "Clothing",
        min: 4000,
        max: 4000
    },


    // ==================================================
    // SHOES
    // ==================================================

    {
        name: "Shoes",
        category: "Shoes",
        min: 15000,
        max: 30000
    },

    {
        name: "Adidas Sambas",
        category: "Shoes",
        min: 30000,
        max: 50000
    },

    {
        name: "Adidas Campus",
        category: "Shoes",
        min: 30000,
        max: 50000
    },

    {
        name: "Slides",
        category: "Shoes",
        min: 9000,
        max: 9000
    },

    {
        name: "Crocs",
        category: "Shoes",
        min: 10000,
        max: 10000
    },

    {
        name: "Loafers",
        category: "Shoes",
        min: 15000,
        max: 30000
    },

    {
        name: "Clogs",
        category: "Shoes",
        min: 35000,
        max: 70000
    },

    {
        name: "Timberland",
        category: "Shoes",
        min: 5000,
        max: 40000
    },

    {
        name: "Vans",
        category: "Shoes",
        min: 5000,
        max: 40000
    },

    {
        name: "Puma",
        category: "Shoes",
        min: 25000,
        max: 50000
    },


    // ==================================================
    // BAGS
    // ==================================================

    {
        name: "Hermes Bags",
        category: "Bags",
        min: 35000,
        max: 50000
    },

    {
        name: "Mini Gucci Bags",
        category: "Bags",
        min: 20000,
        max: 50000
    },

    {
        name: "Gucci Bags",
        category: "Bags",
        min: 35000,
        max: 60000
    },

    {
        name: "Prada Bags",
        category: "Bags",
        min: 35000,
        max: 60000
    },

    {
        name: "Dior Bags",
        category: "Bags",
        min: 35000,
        max: 70000
    },

    {
        name: "Chanel Bags",
        category: "Bags",
        min: 45000,
        max: 70000
    },

    {
        name: "Louis Vuitton Bags",
        category: "Bags",
        min: 25000,
        max: 70000
    },

    {
        name: "Cartier Watches",
        category: "Bags",
        min: 20000,
        max: 35000
    },

    {
        name: "Cartier Glasses",
        category: "Bags",
        min: 15000,
        max: 25000
    }

];


// ======================================================
// CREATE PRODUCTS
// ======================================================

const products = [];


function makePrice(
    min,
    max,
    number
) {

    if (
        min === max
    ) {
        return min;
    }


    const step =
        (max - min) / 29;


    return Math.round(
        (
            min +
            step *
            (number - 1)
        ) / 100
    ) * 100;

}


productCatalog.forEach(
    product => {

        for (
            let i = 1;
            i <= 30;
            i++
        ) {

            products.push({

                id:
                    `${product.name}-${i}`,

                name:
                    product.name,

                listing:
                    i,

                category:
                    product.category,

                price:
                    makePrice(
                        product.min,
                        product.max,
                        i
                    ),

                size:
                    product.size ||
                    "Not specified",

                description:
                    product.description ||
                    "",

                colors:
                    product.colors ||
                    [],

                stock:
                    10

            });

        }

    }
);


// ======================================================
// CART
// ======================================================

let cart = [];


try {

    cart =
        JSON.parse(
            localStorage.getItem(
                "collectiveCart"
            ) || "[]"
        );


    if (
        !Array.isArray(cart)
    ) {

        cart = [];

    }

} catch (error) {

    cart = [];

}


function saveCart() {

    localStorage.setItem(
        "collectiveCart",
        JSON.stringify(cart)
    );

}


function getCartQuantity() {

    return cart.reduce(
        (
            total,
            item
        ) => {

            return total +
                Number(
                    item.quantity || 0
                );

        },
        0
    );

}


function getCartTotal() {

    return cart.reduce(
        (
            total,
            item
        ) => {

            return total +
                (
                    Number(
                        item.price || 0
                    ) *
                    Number(
                        item.quantity || 0
                    )
                );

        },
        0
    );

}


// ======================================================
// CART DISPLAY
// ======================================================

function updateCartCount() {

    const count =
        document.getElementById(
            "cartCount"
        );


    if (
        count
    ) {

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


    if (
        !cartItems
    ) {
        return;
    }


    if (
        cart.length === 0
    ) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                Your cart is empty.
            </div>
        `;

        if (
            cartTotal
        ) {

            cartTotal.textContent =
                "₦0";

        }

        return;

    }


    cartItems.innerHTML =
        cart.map(
            (
                item,
                index
            ) => {

                const quantity =
                    Number(
                        item.quantity || 1
                    );


                const price =
                    Number(
                        item.price || 0
                    );


                return `

                    <div class="cart-item">

                        <div class="cart-item-info">

                            <strong>
                                ${item.name || "Product"}
                            </strong>

                            <span>
                                ${item.color
                                    ? `Shade: ${item.color}`
                                    : ""}
                            </span>

                            <span>
                                ₦${(
                                    price *
                                    quantity
                                ).toLocaleString()}
                            </span>

                        </div>


                        <div class="cart-controls">

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
        ).join("");


    if (
        cartTotal
    ) {

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


    if (
        !popup
    ) {
        return;
    }


    popup.classList.add(
        "open"
    );


    document.body.classList.add(
        "cart-open"
    );

}


function closeCart() {

    const popup =
        document.getElementById(
            "cartPopup"
        );


    if (
        !popup
    ) {
        return;
    }


    popup.classList.remove(
        "open"
    );


    document.body.classList.remove(
        "cart-open"
    );

}


document.addEventListener(
    "click",
    function(event) {

        const target =
            event.target instanceof Element
                ? event.target
                : null;


        if (
            !target
        ) {
            return;
        }


        if (
            target.id === "cartBtn" ||
            target.closest("#cartBtn")
        ) {

            event.preventDefault();

            openCart();

            return;

        }


        if (
            target.id === "closeCart" ||
            target.closest("#closeCart")
        ) {

            event.preventDefault();

            closeCart();

            return;

        }


        if (
            target.classList.contains(
                "remove-cart-item"
            )
        ) {

            const index =
                Number(
                    target.dataset.index
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

                if (
                    typeof updateGiftShoppingProgress ===
                    "function"
                ) {

                    updateGiftShoppingProgress();

                }

            }

            return;

        }


        if (
            target.classList.contains(
                "cart-minus"
            )
        ) {

            const index =
                Number(
                    target.dataset.index
                );


            if (
                Number.isInteger(index) &&
                cart[index]
            ) {

                if (
                    Number(
                        cart[index].quantity
                    ) > 1
                ) {

                    cart[index].quantity--;

                }

                saveCart();

                updateCartDisplay();

                if (
                    typeof updateGiftShoppingProgress ===
                    "function"
                ) {

                    updateGiftShoppingProgress();

                }

            }

            return;

        }


        if (
            target.classList.contains(
                "cart-plus"
            )
        ) {

            const index =
                Number(
                    target.dataset.index
                );


            if (
                Number.isInteger(index) &&
                cart[index]
            ) {

                if (
                    Number(
                        cart[index].quantity
                    ) < 10
                ) {

                    cart[index].quantity++;

                }

                saveCart();

                updateCartDisplay();

                if (
                    typeof updateGiftShoppingProgress ===
                    "function"
                ) {

                    updateGiftShoppingProgress();

                }

            }

            return;

        }

    }
);


// ======================================================
// CART OUTSIDE CLICK
// ======================================================

document.addEventListener(
    "click",
    function(event) {

        const cartPopup =
            document.getElementById(
                "cartPopup"
            );


        if (
            !cartPopup
        ) {
            return;
        }


        if (
            event.target === cartPopup
        ) {

            closeCart();

        }

    }
);


document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeCart();

        }

    }
);


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


function savePoints(
    points
) {

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


function calculatePoints(
    amount
) {

    return Math.floor(
        Number(amount) / 1000
    );

}


function pointsToNaira(
    points
) {

    return Number(points) * 100;

}


function getMaxPointsUsable(
    points
) {

    return Math.min(
        Number(points) || 0,
        200
    );

}


function addPurchasePoints(
    amount
) {

    const earned =
        calculatePoints(
            amount
        );


    const current =
        getPoints();


    savePoints(
        current + earned
    );


    updatePointsDisplay();


    return earned;

}


function updatePointsDisplay() {

    const points =
        getPoints();


    document
        .querySelectorAll(
            ".points-balance"
        )
        .forEach(
            element => {

                element.textContent =
                    `${points} points`;

            }
        );


    const profilePoints =
        document.getElementById(
            "profilePoints"
        );


    if (
        profilePoints
    ) {

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


function saveTotalSpent(
    amount
) {

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


// ======================================================
// REWARDS / PROFILE STATUS
// ======================================================

function updateRewardStatus() {

    const totalSpent =
        getTotalSpent();


    if (
        totalSpent >= 50000
    ) {

        localStorage.setItem(
            "collectiveGift1",
            "true"
        );

    }


    if (
        totalSpent >= 100000
    ) {

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


    if (
        gift1Status
    ) {

        gift1Status.textContent =
            totalSpent >= 50000
                ? "✓ UNLOCKED"
                : "NOT UNLOCKED";

    }


    if (
        gift2Status
    ) {

        gift2Status.textContent =
            totalSpent >= 100000
                ? "✓ UNLOCKED"
                : "NOT UNLOCKED";

    }

}


// ======================================================
// SEARCH + CATEGORY
// ======================================================

let currentCategory =
    "All";


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


    cards.forEach(
        card => {

            const name =
                (
                    card.dataset.name ||
                    ""
                ).toLowerCase();


            const category =
                card.dataset.category ||
                "";


            const matchesSearch =
                name.includes(
                    search
                );


            const matchesCategory =
                currentCategory ===
                "All" ||
                category ===
                currentCategory;


            if (
                matchesSearch &&
                matchesCategory
            ) {

                card.style.display =
                    "";

                visible++;

            } else {

                card.style.display =
                    "none";

            }

        }
    );


    const message =
        document.querySelector(
            ".no-products"
        );


    if (
        message
    ) {

        message.style.display =
            visible === 0
                ? "block"
                : "none";

    }

}


// ======================================================
// CATEGORY MENU
// ======================================================

function createCategoryMenu() {

    const categoryContainer =
        document.querySelector(
            ".collective-categories"
        );


    if (
        !categoryContainer
    ) {
        return;
    }


    categoryContainer.innerHTML =
        "";


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


            button.type =
                "button";


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
                                btn.classList
                                    .remove(
                                        "selected"
                                    )
                        );


                    button.classList.add(
                        "selected"
                    );


                    filterProducts();

                }
            );


            categoryContainer.appendChild(
                button
            );

        }
    );

}


// ======================================================
// CATEGORY BUTTON
// ======================================================

document.addEventListener(
    "click",
    function(event) {

        const target =
            event.target instanceof Element
                ? event.target
                : null;


        if (
            !target
        ) {
            return;
        }


        if (
            target.id ===
            "categoryBtn"
        ) {

            event.preventDefault();


            const menu =
                document.querySelector(
                    ".collective-categories"
                );


            if (
                !menu
            ) {
                return;
            }


            if (
                menu.style.display ===
                    "none" ||
                menu.style.display ===
                    ""
            ) {

                menu.style.display =
                    "flex";

            } else {

                menu.style.display =
                    "none";

            }

        }

    }
);


// ======================================================
// SEARCH
// ======================================================

document.addEventListener(
    "input",
    function(event) {

        if (
            event.target &&
            event.target.id ===
            "productSearch"
        ) {

            filterProducts();

        }

    }
);

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


    if (
        !container
    ) {
        return;
    }


    container.innerHTML =
        "";


    products
        .slice(
            0,
            60
        )
        .forEach(
            product => {

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


                const colors =
                    product.colors ||
                    [];


                let colorHTML =
                    "";


                if (
                    colors.length
                ) {

                    colorHTML = `

                        <div class="product-colors">

                            <label>
                                Shade
                            </label>

                            <select
                                class="product-color"
                            >

                                ${colors
                                    .map(
                                        color => `
                                            <option value="${color}">
                                                ${color}
                                            </option>
                                        `
                                    )
                                    .join("")}

                            </select>

                        </div>

                    `;

                }


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

                        <p class="product-size">
                            ${product.size}
                        </p>

                        <p class="product-price">
                            ₦${Number(
                                product.price
                            ).toLocaleString()}
                        </p>

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


                container.appendChild(
                    card
                );

            }
        );


    filterProducts();

}


// ======================================================
// ADD PRODUCT TO CART
// ======================================================

document.addEventListener(
    "click",
    function(event) {

        const target =
            event.target instanceof Element
                ? event.target
                : null;


        if (
            !target
        ) {
            return;
        }


        const button =
            target.closest(
                ".add-to-cart"
            );


        if (
            !button
        ) {
            return;
        }


        event.preventDefault();


        const productId =
            button.dataset.productId;


        const product =
            products.find(
                item =>
                    item.id ===
                    productId
            );


        if (
            !product
        ) {
            return;
        }


        const card =
            button.closest(
                ".product-card"
            );


        const colorSelect =
            card
                ? card.querySelector(
                    ".product-color"
                )
                : null;


        const selectedColor =
            colorSelect
                ? colorSelect.value
                : "";


        const existing =
            cart.find(
                item =>
                    item.id ===
                        product.id &&
                    (
                        item.color ||
                        ""
                    ) ===
                        selectedColor
            );


        if (
            existing
        ) {

            if (
                Number(
                    existing.quantity
                ) < 10
            ) {

                existing.quantity++;

            }

        } else {

            cart.push({

                id:
                    product.id,

                name:
                    product.name,

                category:
                    product.category,

                price:
                    product.price,

                size:
                    product.size,

                color:
                    selectedColor,

                quantity:
                    1

            });

        }


        saveCart();

        updateCartDisplay();


        if (
            typeof updateGiftShoppingProgress ===
            "function"
        ) {

            updateGiftShoppingProgress();

        }


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


// ======================================================
// FREE GIFTS
// ======================================================

function getFreeGiftLevel() {

    const totalSpent =
        getTotalSpent();


    if (
        totalSpent >= 100000
    ) {

        return 10;

    }


    if (
        totalSpent >= 50000
    ) {

        return 5;

    }


    return 0;

}


function getSelectedFreeGiftProducts() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "collectiveFreeGifts"
            ) || "[]"
        );

    } catch (
        error
    ) {

        return [];

    }

}


function saveSelectedFreeGiftProducts(
    gifts
) {

    localStorage.setItem(
        "collectiveFreeGifts",
        JSON.stringify(
            gifts
        )
    );

}


function clearSelectedFreeGiftProducts() {

    localStorage.removeItem(
        "collectiveFreeGifts"
    );

}


// ======================================================
// GIFT SHOPPING PROGRESS
// ======================================================

function updateGiftShoppingProgress() {

    const total =
        getCartTotal();


    const elements =
        document.querySelectorAll(
            ".gift-progress"
        );


    elements.forEach(
        element => {

            let text =
                "";


            if (
                total >= 100000
            ) {

                text =
                    "₦100,000 reward unlocked";

            } else if (
                total >= 50000
            ) {

                text =
                    "₦50,000 reward unlocked";

            } else {

                const remaining =
                    Math.max(
                        0,
                        50000 - total
                    );


                text =
                    `₦${remaining.toLocaleString()} more to unlock your first reward`;

            }


            element.textContent =
                text;

        }
    );

}


// ======================================================
// GIFT SELECTION
// ======================================================

function renderGiftOptions() {

    const container =
        document.getElementById(
            "giftOptions"
        );


    if (
        !container
    ) {
        return;
    }


    const unlocked =
        getFreeGiftLevel();


    if (
        unlocked <= 0
    ) {

        container.innerHTML = `
            <p>
                Spend ₦50,000 to unlock free gifts.
            </p>
        `;

        return;

    }


    const giftProducts =
        products
            .filter(
                product =>
                    product.category ===
                    "Accessories" ||
                    product.category ===
                    "Skincare"
            )
            .slice(
                0,
                unlocked
            );


    container.innerHTML =
        giftProducts
            .map(
                product => `

                    <label class="gift-option">

                        <input
                            type="checkbox"
                            class="gift-checkbox"
                            value="${product.id}"
                        >

                        <span>
                            ${product.name}
                        </span>

                    </label>

                `
            )
            .join("");


    const selected =
        getSelectedFreeGiftProducts();


    container
        .querySelectorAll(
            ".gift-checkbox"
        )
        .forEach(
            checkbox => {

                checkbox.checked =
                    selected.some(
                        gift =>
                            gift.id ===
                            checkbox.value
                    );


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


                        if (
                            !product
                        ) {
                            return;
                        }


                        if (
                            checkbox.checked
                        ) {

                            if (
                                gifts.length <
                                unlocked
                            ) {

                                gifts.push(
                                    product
                                );

                            } else {

                                checkbox.checked =
                                    false;

                                alert(
                                    `You can select up to ${unlocked} free item${unlocked === 1 ? "" : "s"}.`
                                );

                                return;

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

                    }
                );

            }
        );

}


// ======================================================
// LOGIN HELPERS
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

    } catch (
        error
    ) {

        return null;

    }

}


function requireLogin() {

    if (
        isLoggedIn()
    ) {

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
// CHECKOUT
// ======================================================

function getCheckoutItems() {

    return cart.map(
        item => ({
            ...item
        })
    );

}


function createCheckoutModal() {

    if (
        cart.length === 0
    ) {

        alert(
            "Your cart is empty."
        );

        return;

    }


    if (
        !requireLogin()
    ) {

        return;

    }


    const existingModal =
        document.getElementById(
            "checkoutModal"
        );


    if (
        existingModal
    ) {

        existingModal.remove();

    }


    const user =
        getCurrentUser() ||
        {};


    const modal =
        document.createElement(
            "div"
        );


    modal.id =
        "checkoutModal";


    modal.className =
        "checkout-modal";


    const total =
        getCartTotal();


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


    modal.innerHTML = `

        <div class="checkout-box">

            <button
                type="button"
                class="checkout-close"
                id="checkoutClose"
            >
                ×
            </button>

            <h2>
                Checkout
            </h2>

            <div class="checkout-summary">

                <p>
                    Order total:
                    <strong>
                        ₦${total.toLocaleString()}
                    </strong>
                </p>

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
            function() {

                modal.remove();

            }
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

                    firstName:
                        firstName,

                    lastName:
                        lastName,

                    address:
                        address,

                    phone:
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
// PAYMENT MODAL
// ======================================================

function showPaymentModal(
    checkoutModal,
    total,
    pointsUsed,
    customer
) {

    checkoutModal.innerHTML = `

        <div class="checkout-box">

            <button
                type="button"
                class="checkout-close"
                id="paymentClose"
            >
                ×
            </button>

            <h2>
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
            function() {

                checkoutModal.remove();

            }
        );


    document
        .getElementById(
            "paidButton"
        )
        ?.addEventListener(
            "click",
            async function() {

                const saved =
                    await createPendingOrder(
                        total,
                        pointsUsed,
                        customer
                    );


                if (
                    !saved
                ) {

                    return;

                }


                checkoutModal.remove();


                showPaymentChecking();

            }
        );

}


// ======================================================
// CREATE ORDER — FIREBASE
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


    const order = {

        id:
            "ORDER-" +
            Date.now(),

        customer:
            customer,

        items:
            checkoutItems.map(
                item => ({
                    ...item
                })
            ),

        paidItems:
            cart.map(
                item => ({
                    ...item
                })
            ),

        freeGifts:
            getSelectedFreeGiftProducts()
                .map(
                    product => ({

                        id:
                            product.id,

                        name:
                            product.name,

                        category:
                            product.category,

                        price:
                            0,

                        quantity:
                            1,

                        originalGiftPrice:
                            product.price

                    })
                ),

        originalTotal:
            originalPaidTotal,

        qualifyingSpend:
            originalPaidTotal,

        pointsUsed:
            pointsUsed,

        total:
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


        console.log(
            "ORDER SAVED TO FIREBASE",
            order
        );


        const oldOrders =
            JSON.parse(
                localStorage.getItem(
                    "collectiveOrders"
                ) || "[]"
            );


        localStorage.setItem(
            "collectiveOrders",
            JSON.stringify(
                [
                    ...oldOrders,
                    order
                ]
            )
        );


        localStorage.setItem(
            "collectivePendingOrder",
            JSON.stringify(
                order
            )
        );


        localStorage.setItem(
            "collectiveOrderStatus",
            "payment-checking"
        );


        return true;

    } catch (
        error
    ) {

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

    const existing =
        document.getElementById(
            "paymentCheckingModal"
        );


    if (
        existing
    ) {

        existing.remove();

    }


    const modal =
        document.createElement(
            "div"
        );


    modal.id =
        "paymentCheckingModal";


    modal.className =
        "checkout-modal";


    modal.innerHTML = `

        <div class="checkout-box">

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
            function() {

                modal.remove();

            }
        );

}


// ======================================================
// CHECKOUT BUTTON
// ======================================================

document.addEventListener(
    "click",
    function(event) {

        const target =
            event.target instanceof Element
                ? event.target
                : null;


        if (
            !target
        ) {
            return;
        }


        const checkoutButton =
            target.closest(
                "#checkoutBtn, .checkout-btn, [data-checkout]"
            );


        if (
            !checkoutButton
        ) {
            return;
        }


        event.preventDefault();


        createCheckoutModal();

    }
);


// ======================================================
// STORAGE SYNC
// ======================================================

window.addEventListener(
    "storage",
    function(event) {

        if (
            event.key ===
            "collectiveCart"
        ) {

            try {

                cart =
                    JSON.parse(
                        event.newValue ||
                        "[]"
                    );

            } catch (
                error
            ) {

                cart = [];

            }


            updateCartDisplay();


            if (
                typeof updateGiftShoppingProgress ===
                "function"
            ) {

                updateGiftShoppingProgress();

            }

        }


        if (
            event.key ===
            "collectivePoints"
        ) {

            updatePointsDisplay();

        }


        if (
            event.key ===
            "collectiveTotalSpent"
        ) {

            updateRewardStatus();

            updateGiftShoppingProgress();

        }

    }
);


// ======================================================
// INITIALIZE SHOP
// ======================================================

function initializeShop() {

    createCategoryMenu();

    renderProducts();

    updateCartDisplay();

    updatePointsDisplay();

    updateRewardStatus();

    updateGiftShoppingProgress();

    renderGiftOptions();

}


if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeShop
    );

} else {

    initializeShop();

} 

// ======================================================
// LOGIN / SIGNUP STATUS
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

document.addEventListener(
    "click",
    function(event) {

        const target =
            event.target instanceof Element
                ? event.target
                : null;


        if (
            !target
        ) {
            return;
        }


        const logoutButton =
            target.closest(
                "#logoutBtn, .logout-button"
            );


        if (
            !logoutButton
        ) {
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


// ======================================================
// PROFILE DISPLAY
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


    if (
        firstName
    ) {

        firstName.textContent =
            user?.firstName ||
            "";

    }


    if (
        lastName
    ) {

        lastName.textContent =
            user?.lastName ||
            "";

    }


    if (
        address
    ) {

        address.textContent =
            user?.address ||
            "";

    }


    if (
        phone
    ) {

        phone.textContent =
            user?.phone ||
            "";

    }


    if (
        profilePoints
    ) {

        profilePoints.textContent =
            points;

    }


    if (
        profileSpent
    ) {

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


    const cards =
        document.querySelectorAll(
            ".free-item-card"
        );


    cards.forEach(
        card => {

            const required =
                Number(
                    card.dataset.required ||
                    0
                );


            if (
                totalSpent >=
                required
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
        ) ||
        ""
    );

}


function updateOrderStatusDisplay() {

    const status =
        getLocalOrderStatus();


    const elements =
        document.querySelectorAll(
            ".order-status"
        );


    elements.forEach(
        element => {

            if (
                status ===
                "approved"
            ) {

                element.textContent =
                    "APPROVED";

            } else if (
                status ===
                "rejected"
            ) {

                element.textContent =
                    "REJECTED";

            } else if (
                status ===
                "delivered"
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
// FIREBASE ORDER STATUS LISTENER
// ======================================================

async function checkFirebaseOrderStatus() {

    const pending =
        localStorage.getItem(
            "collectivePendingOrder"
        );


    if (
        !pending
    ) {
        return;
    }


    let pendingOrder;


    try {

        pendingOrder =
            JSON.parse(
                pending
            );

    } catch (
        error
    ) {

        return;

    }


    if (
        !pendingOrder?.id
    ) {
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


                if (
                    order.status
                ) {

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

                    if (
                        order.total
                    ) {

                        const previousStatus =
                            pendingOrder.status;


                        if (
                            previousStatus !==
                                "approved" &&
                            previousStatus !==
                                "delivered"
                        ) {

                            const spent =
                                getTotalSpent();


                            saveTotalSpent(
                                spent +
                                Number(
                                    order.qualifyingSpend ||
                                    order.originalTotal ||
                                    order.total ||
                                    0
                                )
                            );


                            const earned =
                                calculatePoints(
                                    Number(
                                        order.qualifyingSpend ||
                                        order.originalTotal ||
                                        order.total ||
                                        0
                                    )
                                );


                            const currentPoints =
                                getPoints();


                            savePoints(
                                currentPoints +
                                earned
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

                        }

                    }

                }

            }
        );


        updateOrderStatusDisplay();

    } catch (
        error
    ) {

        console.error(
            "FIREBASE STATUS CHECK ERROR:",
            error
        );

    }

}


// ======================================================
// CONTINUOUS ORDER STATUS CHECK
// ======================================================

setInterval(
    function() {

        checkFirebaseOrderStatus();

    },
    3000
);


// ======================================================
// CART COUNT INITIALIZATION
// ======================================================

function initializeCart() {

    updateCartDisplay();

}


// ======================================================
// ALL PAGE INITIALIZATION
// ======================================================

function initializeCollective() {

    initializeCart();

    updatePointsDisplay();

    updateRewardStatus();

    updateLoginStatus();

    updateProfile();

    updateFreeItemCards();

    updateOrderStatusDisplay();

    updateGiftShoppingProgress();

    renderGiftOptions();

    checkFirebaseOrderStatus();

}


// ======================================================
// RUN AFTER PAGE LOAD
// ======================================================

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeCollective
    );

} else {

    initializeCollective();

}


// ======================================================
// KEEP EVERYTHING UPDATED
// ======================================================

window.addEventListener(
    "storage",
    function(event) {

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


// ======================================================
// FINAL SHOP REFRESH
// ======================================================

setTimeout(
    function() {

        updateCartDisplay();

        updatePointsDisplay();

        updateRewardStatus();

        updateLoginStatus();

        updateProfile();

        updateFreeItemCards();

        updateOrderStatusDisplay();

    },
    500
);
