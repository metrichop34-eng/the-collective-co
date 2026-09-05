// ======================================================
// THE COLLECTIVE.CO — COMPLETE SHOP SYSTEM
// ======================================================


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
        colors: ["Clear", "Pink", "Brown"]
    },

    {
        name: "SHEGLAM Lip Gloss",
        category: "Skincare",
        min: 10000,
        max: 15000,
        size: "Not specified",
        colors: ["Clear", "Pink", "Nude", "Brown"]
    },

    {
        name: "USHAS Lip Gloss",
        category: "Skincare",
        min: 10000,
        max: 15000,
        size: "Not specified",
        colors: ["Clear", "Pink", "Nude", "Brown"]
    },

    {
        name: "Clear Normal Lip Gloss",
        category: "Skincare",
        min: 1000,
        max: 2000,
        size: "Not specified",
        colors: ["Clear"]
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


    // =========================
    // ACCESSORIES
    // =========================

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


    // =========================
    // CLOTHING
    // =========================

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


    // =========================
    // SHOES
    // =========================

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


    // =========================
    // BAGS
    // =========================

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

            description:
                product.description || "",

            colors:
                product.colors || [],

            stock: 10

        });

    }

});


// ======================================================
// CART
// ======================================================

let cart = JSON.parse(
    localStorage.getItem("collectiveCart") || "[]"
);


function saveCart() {

    localStorage.setItem(
        "collectiveCart",
        JSON.stringify(cart)
    );

}


function getCartQuantity() {

    return cart.reduce(
        (total, item) =>
            total + Number(item.quantity || 0),
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
// CART DISPLAY
// ======================================================

function updateCartCount() {

    const cartCount =
        document.getElementById("cartCount");

    if (!cartCount) {
        return;
    }

    cartCount.textContent =
        getCartQuantity();

}


function updateCartDisplay() {

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");

    updateCartCount();

    if (!cartItems) {
        return;
    }

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛍️</div>
                <p>Your cart is empty.</p>
                <small>Add something you love.</small>
            </div>
        `;

        if (cartTotal) {
            cartTotal.textContent = "₦0";
        }

        return;
    }


    cartItems.innerHTML = "";


    cart.forEach((item, index) => {

        const itemTotal =
            Number(item.price) *
            Number(item.quantity);


        const cartItem =
            document.createElement("div");

        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <div class="cart-item-info">

                <h3>
                    ${item.name}
                </h3>

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
                    ₦${Number(item.price).toLocaleString()}
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
                        ${item.quantity}
                    </span>

                    <button
                        type="button"
                        class="cart-plus"
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


        cartItems.appendChild(cartItem);

    });


    if (cartTotal) {

        cartTotal.textContent =
            `₦${getCartTotal().toLocaleString()}`;

    }

}


// ======================================================
// OPEN CART
// ======================================================

function openCart() {

    const cartPopup =
        document.getElementById("cartPopup");

    if (!cartPopup) {
        return;
    }

    updateCartDisplay();

    cartPopup.style.display = "flex";

    document.body.classList.add(
        "cart-open"
    );

}


// ======================================================
// CLOSE CART
// ======================================================

function closeCart() {

    const cartPopup =
        document.getElementById("cartPopup");

    if (!cartPopup) {
        return;
    }

    cartPopup.style.display = "none";

    document.body.classList.remove(
        "cart-open"
    );

}


// ======================================================
// CART BUTTONS
// ======================================================

document.addEventListener(
    "click",
    function(event) {

        const target =
            event.target;


        // OPEN CART
        if (
            target.id === "cartBtn" ||
            target.closest("#cartBtn")
        ) {

            event.preventDefault();

            openCart();

            return;

        }


        // CLOSE CART
        if (
            target.id === "closeCart" ||
            target.closest("#closeCart")
        ) {

            event.preventDefault();

            closeCart();

            return;

        }


        // REMOVE ITEM
        if (
            target.classList.contains(
                "remove-cart-item"
            )
        ) {

            const index =
                Number(
                    target.dataset.index
                );

            cart.splice(
                index,
                1
            );

            saveCart();

            updateCartDisplay();

            return;

        }


        // CART MINUS
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
                cart[index] &&
                cart[index].quantity > 1
            ) {

                cart[index].quantity--;

            }

            saveCart();

            updateCartDisplay();

            return;

        }


        // CART PLUS
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
                cart[index] &&
                cart[index].quantity < 10
            ) {

                cart[index].quantity++;

            }

            saveCart();

            updateCartDisplay();

            return;

        }

    }
);


// ======================================================
// CART OVERLAY CLOSE
// ======================================================

document.addEventListener(
    "click",
    function(event) {

        const cartPopup =
            document.getElementById(
                "cartPopup"
            );

        if (!cartPopup) {
            return;
        }

        if (
            event.target === cartPopup
        ) {

            closeCart();

        }

    }
);


// ======================================================
// ESCAPE CLOSE
// ======================================================

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


function savePoints(points) {

    localStorage.setItem(
        "collectivePoints",
        String(points)
    );

}


// Spend ₦1,000 = 1 point
function calculatePoints(amount) {

    return Math.floor(
        Number(amount) / 1000
    );

}


// 1 point = ₦100
function pointsToNaira(points) {

    return Number(points) * 100;

}


// Maximum 200 points can be used per order
function getMaxPointsUsable(points) {

    return Math.min(
        Number(points) || 0,
        200
    );

}


function addPurchasePoints(amount) {

    const earned =
        calculatePoints(amount);

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
        .querySelectorAll(".points-balance")
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
        String(amount)
    );

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
// SEARCH + CATEGORY
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
                card.dataset.name ||
                ""
            ).toLowerCase();


        const category =
            card.dataset.category ||
            "";


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
// CATEGORY MENU
// ======================================================

function createCategoryMenu() {

    const categoryContainer =
        document.querySelector(
            ".collective-categories"
        );


    if (!categoryContainer) {
        return;
    }


    categoryContainer.innerHTML = "";


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
                category === currentCategory
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
// CATEGORY NAVIGATION
// ======================================================

document.addEventListener(
    "click",
    function(event) {

        if (
            event.target.id !==
            "categoryBtn"
        ) {

            return;

        }


        event.preventDefault();


        const menu =
            document.querySelector(
                ".collective-categories"
            );


        if (!menu) {
            return;
        }


        if (
            menu.style.display ===
                "none" ||
            menu.style.display === ""
        ) {

            menu.style.display =
                "flex";

        } else {

            menu.style.display =
                "none";

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
            event.target.id ===
            "productSearch"
        ) {

            filterProducts();

        }

    }
);


document.addEventListener(
    "click",
    function(event) {

        if (
            event.target.id ===
            "searchButton"
        ) {

            filterProducts();

        }

    }
);


// ======================================================
// PRODUCT CARD
// ======================================================

function createProductCard(product) {

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


    let colorOption = "";


    if (
        product.colors &&
        product.colors.length
    ) {

        colorOption = `

            <label>
                Shade / Colour
            </label>

            <select
                class="product-color"
            >

                <option value="">
                    Choose
                </option>

                ${product.colors
                    .map(
                        color => `
                            <option
                                value="${color}"
                            >
                                ${color}
                            </option>
                        `
                    )
                    .join("")}

            </select>

        `;

    }


    card.innerHTML = `

        <div class="product-image">

            <span>
                Product Image
            </span>

        </div>


        <div class="product-information">

            <small>
                ${product.category}
            </small>


            <h3>
                ${product.name}
            </h3>


            ${
                product.description
                    ? `
                        <p>
                            ${product.description}
                        </p>
                    `
                    : ""
            }


            <p>
                Size: ${product.size}
            </p>


            <strong
                class="product-price"
            >
                ₦${product.price.toLocaleString()}
            </strong>


            ${colorOption}


            <p class="stock-status">
                In stock
            </p>


            <div class="quantity-box">

                <button
                    class="quantity-minus"
                    type="button"
                >
                    −
                </button>


                <span
                    class="quantity-number"
                >
                    1
                </span>


                <button
                    class="quantity-plus"
                    type="button"
                >
                    +
                </button>

            </div>


            <button
                class="add-to-cart"
                type="button"
            >
                ADD TO CART
            </button>

        </div>

    `;


    let quantity = 1;


    const minus =
        card.querySelector(
            ".quantity-minus"
        );


    const plus =
        card.querySelector(
            ".quantity-plus"
        );


    const number =
        card.querySelector(
            ".quantity-number"
        );


    minus.addEventListener(
        "click",
        function() {

            if (quantity > 1) {

                quantity--;

                number.textContent =
                    quantity;

            }

        }
    );


    plus.addEventListener(
        "click",
        function() {

            if (
                quantity <
                product.stock
            ) {

                quantity++;

                number.textContent =
                    quantity;

            }

        }
    );


    const addButton =
        card.querySelector(
            ".add-to-cart"
        );


    addButton.addEventListener(
        "click",
        function() {

            const selectedColor =
                card.querySelector(
                    ".product-color"
                );


            if (
                selectedColor &&
                !selectedColor.value
            ) {

                alert(
                    "Please choose a shade / colour first."
                );

                return;

            }


            const existing =
                cart.find(
                    item =>
                        item.id ===
                            product.id &&
                        item.color ===
                            (
                                selectedColor
                                    ? selectedColor.value
                                    : null
                            )
                );


            if (existing) {

                existing.quantity =
                    Math.min(
                        existing.quantity +
                            quantity,
                        product.stock
                    );

            } else {

                cart.push({

                    id: product.id,

                    name: product.name,

                    price: product.price,

                    quantity: quantity,

                    color:
                        selectedColor
                            ? selectedColor.value
                            : null

                });

            }


            saveCart();

            updateCartDisplay();


            addButton.textContent =
                "ADDED ✓";


            setTimeout(
                function() {

                    addButton.textContent =
                        "ADD TO CART";

                },
                1200
            );

        }
    );


    return card;

}


// ======================================================
// DISPLAY PRODUCTS
// ======================================================

function displayProducts() {

    const productGrid =
        document.querySelector(
            ".product-grid"
        );


    if (!productGrid) {
        return;
    }


    productGrid.innerHTML = "";


    const fragment =
        document.createDocumentFragment();


    products.forEach(
        product => {

            fragment.appendChild(
                createProductCard(
                    product
                )
            );

        }
    );


    productGrid.appendChild(
        fragment
    );


    let noProducts =
        document.querySelector(
            ".no-products"
        );


    if (!noProducts) {

        noProducts =
            document.createElement(
                "p"
            );


        noProducts.className =
            "no-products";


        noProducts.textContent =
            "No products found.";


        productGrid.parentNode.insertBefore(
            noProducts,
            productGrid
        );

    }


    noProducts.style.display =
        "none";


    createCategoryMenu();

    filterProducts();

    updateCartDisplay();

}


// ======================================================
// CHECKOUT MODAL
// ======================================================

function showCheckoutModal(content) {

    const oldModal =
        document.getElementById(
            "collectiveCheckoutModal"
        );


    if (oldModal) {
        oldModal.remove();
    }


    const modal =
        document.createElement("div");


    modal.id =
        "collectiveCheckoutModal";


    modal.style.position =
        "fixed";

    modal.style.inset =
        "0";

    modal.style.background =
        "rgba(48,75,82,0.45)";

    modal.style.display =
        "flex";

    modal.style.alignItems =
        "center";

    modal.style.justifyContent =
        "center";

    modal.style.zIndex =
        "99999";

    modal.style.padding =
        "20px";


    const box =
        document.createElement("div");


    box.style.background =
        "#FFFDF8";

    box.style.width =
        "100%";

    box.style.maxWidth =
        "520px";

    box.style.maxHeight =
        "90vh";

    box.style.overflowY =
        "auto";

    box.style.borderRadius =
        "22px";

    box.style.padding =
        "30px";

    box.style.boxSizing =
        "border-box";

    box.style.textAlign =
        "center";

    box.style.boxShadow =
        "0 15px 45px rgba(0,0,0,0.18)";


    box.innerHTML =
        content;


    modal.appendChild(
        box
    );


    document.body.appendChild(
        modal
    );


    return modal;

}


// ======================================================
// CHECKOUT — START
// ======================================================

function checkout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty."
        );

        return;

    }


    const loggedIn =
        localStorage.getItem(
            "collectiveLoggedIn"
        ) === "true";


    if (!loggedIn) {

        const answer =
            confirm(
                "You need to log in before checkout. Go to the login page?"
            );


        if (answer) {

            window.location.href =
                "login.html";

        }

        return;

    }


    startCheckout();

}


// ======================================================
// CHECKOUT — POINTS
// ======================================================

function startCheckout() {

    const total =
        getCartTotal();


    const currentPoints =
        getPoints();


    // No points
    if (currentPoints <= 0) {

        showCustomerDetails(
            total,
            0
        );

        return;

    }


    const modal =
        showCheckoutModal(`

            <h2>
                Do you want to use your points?
            </h2>

            <p>
                You currently have
                <strong>
                    ${currentPoints} points
                </strong>.
            </p>

            <p>
                1 point = ₦100 discount.
            </p>

            <div style="
                display:flex;
                gap:12px;
                justify-content:center;
                margin-top:25px;
                flex-wrap:wrap;
            ">

                <button
                    id="usePointsYes"
                    type="button"
                    style="
                        padding:13px 24px;
                        border:0;
                        border-radius:12px;
                        cursor:pointer;
                        background:#304B52;
                        color:white;
                        font-weight:bold;
                    "
                >
                    YES
                </button>


                <button
                    id="usePointsNo"
                    type="button"
                    style="
                        padding:13px 24px;
                        border:1px solid #304B52;
                        border-radius:12px;
                        cursor:pointer;
                        background:white;
                        color:#304B52;
                        font-weight:bold;
                    "
                >
                    NO
                </button>

            </div>

        `);


    document
        .getElementById(
            "usePointsYes"
        )
        .addEventListener(
            "click",
            function() {

                showPointsInput(
                    total,
                    currentPoints
                );

            }
        );


    document
        .getElementById(
            "usePointsNo"
        )
        .addEventListener(
            "click",
            function() {

                modal.remove();

                showCustomerDetails(
                    total,
                    0
                );

            }
        );

}


// ======================================================
// ENTER POINTS TO USE
// ======================================================

function showPointsInput(
    total,
    currentPoints
) {

    const maximumPoints =
        Math.min(
            currentPoints,
            200,
            Math.floor(total / 100)
        );


    const modal =
        showCheckoutModal(`

            <h2>
                How many points do you want to use?
            </h2>

            <p>
                1 point = ₦100 discount.
            </p>

            <input
                id="pointsToUse"
                type="number"
                min="1"
                max="${maximumPoints}"
                placeholder="Enter points"
                style="
                    width:100%;
                    box-sizing:border-box;
                    padding:14px;
                    border:1px solid #C8D5D8;
                    border-radius:12px;
                    margin:15px 0 8px;
                    font-size:16px;
                    text-align:center;
                "
            >

            <p style="
                font-size:13px;
                margin-bottom:20px;
            ">
                Maximum ${maximumPoints} points
            </p>

            <button
                id="applyPoints"
                type="button"
                style="
                    padding:13px 25px;
                    border:0;
                    border-radius:12px;
                    cursor:pointer;
                    background:#304B52;
                    color:white;
                    font-weight:bold;
                "
            >
                APPLY POINTS
            </button>

        `);


    document
        .getElementById(
            "applyPoints"
        )
        .addEventListener(
            "click",
            function() {

                const input =
                    document.getElementById(
                        "pointsToUse"
                    );


                const points =
                    Number(
                        input.value
                    );


                if (
                    !Number.isInteger(points) ||
                    points < 1 ||
                    points > maximumPoints
                ) {

                    alert(
                        `Please enter between 1 and ${maximumPoints} points.`
                    );

                    return;

                }


                const discount =
                    pointsToNaira(
                        points
                    );


                const newTotal =
                    Math.max(
                        0,
                        total - discount
                    );


                modal.remove();


                showCustomerDetails(
                    newTotal,
                    points
                );

            }
        );

}


// ======================================================
// CUSTOMER DETAILS
// ======================================================

function showCustomerDetails(
    total,
    pointsUsed
) {

    const modal =
        showCheckoutModal(`

            <h2>
                ENTER:
            </h2>

            <div style="
                text-align:left;
                margin-top:20px;
            ">

                <label>
                    First name
                </label>

                <input
                    id="checkoutFirstName"
                    type="text"
                    placeholder="First name"
                    style="
                        width:100%;
                        box-sizing:border-box;
                        padding:13px;
                        margin:7px 0 15px;
                        border:1px solid #C8D5D8;
                        border-radius:10px;
                    "
                >


                <label>
                    Last name
                </label>

                <input
                    id="checkoutLastName"
                    type="text"
                    placeholder="Last name"
                    style="
                        width:100%;
                        box-sizing:border-box;
                        padding:13px;
                        margin:7px 0 15px;
                        border:1px solid #C8D5D8;
                        border-radius:10px;
                    "
                >


                <label>
                    House address
                </label>

                <input
                    id="checkoutAddress"
                    type="text"
                    placeholder="House address"
                    style="
                        width:100%;
                        box-sizing:border-box;
                        padding:13px;
                        margin:7px 0 15px;
                        border:1px solid #C8D5D8;
                        border-radius:10px;
                    "
                >


                <label>
                    Phone number
                </label>

                <input
                    id="checkoutPhone"
                    type="tel"
                    placeholder="Phone number"
                    style="
                        width:100%;
                        box-sizing:border-box;
                        padding:13px;
                        margin:7px 0 15px;
                        border:1px solid #C8D5D8;
                        border-radius:10px;
                    "
                >

            </div>


            <div style="
                margin-top:10px;
                padding:15px;
                border-radius:12px;
                background:#F7F4EE;
            ">

                <strong>
                    Total:
                    ₦${total.toLocaleString()}
                </strong>

                ${
                    pointsUsed > 0
                        ? `
                            <br>
                            <small>
                                ${pointsUsed} points used
                                —
                                ₦${pointsToNaira(
                                    pointsUsed
                                ).toLocaleString()}
                                discount
                            </small>
                          `
                        : ""
                }

            </div>


            <button
                id="continueToTransfer"
                type="button"
                style="
                    margin-top:20px;
                    padding:14px 25px;
                    border:0;
                    border-radius:12px;
                    cursor:pointer;
                    background:#304B52;
                    color:white;
                    font-weight:bold;
                    width:100%;
                "
            >
                CONTINUE
            </button>

        `);


    document
        .getElementById(
            "continueToTransfer"
        )
        .addEventListener(
            "click",
            function() {

                const firstName =
                    document
                        .getElementById(
                            "checkoutFirstName"
                        )
                        .value
                        .trim();


                const lastName =
                    document
                        .getElementById(
                            "checkoutLastName"
                        )
                        .value
                        .trim();


                const address =
                    document
                        .getElementById(
                            "checkoutAddress"
                        )
                        .value
                        .trim();


                const phone =
                    document
                        .getElementById(
                            "checkoutPhone"
                        )
                        .value
                        .trim();


                if (
                    !firstName ||
                    !lastName ||
                    !address ||
                    !phone
                ) {

                    alert(
                        "Please fill in all the fields."
                    );

                    return;

                }


                modal.remove();


                showTransferConfirmation(
                    total,
                    pointsUsed,
                    {
                        firstName,
                        lastName,
                        address,
                        phone
                    }
                );

            }
        );

}


// ======================================================
// TRANSFER CONFIRMATION
// ======================================================

function showTransferConfirmation(
    total,
    pointsUsed,
    customer
) {

    const modal =
        showCheckoutModal(`

            <h2>
                Are you ready to transfer?
            </h2>

            <p>
                Your total is:
            </p>

            <h2>
                ₦${total.toLocaleString()}
            </h2>


            ${
                pointsUsed > 0
                    ? `
                        <p>
                            ${pointsUsed} points used
                            —
                            ₦${pointsToNaira(
                                pointsUsed
                            ).toLocaleString()}
                            discount
                        </p>
                      `
                    : ""
            }


            <p style="
                font-size:14px;
                margin-top:20px;
            ">
                Please transfer the exact amount
                to one of the accounts below.
            </p>


            <div style="
                background:#F7F4EE;
                border-radius:15px;
                padding:18px;
                margin-top:20px;
                text-align:left;
            ">

                <strong>
                    GTBank (GTB)
                </strong>

                <p>
                    Account Name:
                    ADESANYA EYINJU CAYLA
                </p>

                <p>
                    Account Number:
                    0708648701
                </p>

            </div>


            <div style="
                font-weight:bold;
                font-size:18px;
                margin:15px 0;
            ">
                OR
            </div>


            <div style="
                background:#F7F4EE;
                border-radius:15px;
                padding:18px;
                text-align:left;
            ">

                <strong>
                    SmartCash PSB
                </strong>

                <p>
                    Account Name:
                    Ololade Adesanya
                </p>

                <p>
                    Account Number:
                    9123930679
                </p>

            </div>


            <button
                id="paidButton"
                type="button"
                style="
                    margin-top:22px;
                    padding:14px 25px;
                    border:0;
                    border-radius:12px;
                    cursor:pointer;
                    background:#304B52;
                    color:white;
                    font-weight:bold;
                    width:100%;
                "
            >
                PAID
            </button>

        `);


    document
        .getElementById(
            "paidButton"
        )
        .addEventListener(
            "click",
            function() {

                const currentPoints =
                    getPoints();


                // Remove only the points used
                if (pointsUsed > 0) {

                    savePoints(
                        Math.max(
                            0,
                            currentPoints -
                                pointsUsed
                        )
                    );

                    updatePointsDisplay();

                }


                const pendingOrder = {

                    id:
                        "ORDER-" +
                        Date.now(),

                    customer:
                        customer,

                    items:
                        cart.map(
                            item => ({
                                ...item
                            })
                        ),

                    originalTotal:
                        getCartTotal(),

                    pointsUsed:
                        pointsUsed,

                    total:
                        total,

                    status:
                        "payment-checking",

                    createdAt:
                        new Date().toISOString()

                };


                localStorage.setItem(
                    "collectivePendingOrder",
                    JSON.stringify(
                        pendingOrder
                    )
                );


                localStorage.setItem(
                    "collectiveOrderStatus",
                    "payment-checking"
                );


                modal.remove();


                showPaymentChecking();

            }
        );

}


// ======================================================
// PAYMENT CHECKING SCREEN
// ======================================================

function showPaymentChecking() {

    const modal =
        showCheckoutModal(`

            <div style="
                padding:25px 10px;
            ">

                <div style="
                    font-size:45px;
                    margin-bottom:15px;
                ">
                    ⏳
                </div>


                <h2>
                    Checking to see if money
                    has been received
                </h2>


                <p>
                    Please wait while your payment
                    is being checked.
                </p>


                <p style="
                    font-size:13px;
                    margin-top:20px;
                ">
                    You can close this screen
                    and return later.
                </p>


                <button
                    id="closePaymentChecking"
                    type="button"
                    style="
                        margin-top:20px;
                        padding:12px 22px;
                        border:1px solid #304B52;
                        border-radius:12px;
                        background:white;
                        color:#304B52;
                        cursor:pointer;
                        font-weight:bold;
                    "
                >
                    CLOSE
                </button>

            </div>

        `);


    document
        .getElementById(
            "closePaymentChecking"
        )
        .addEventListener(
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

        if (
            event.target.id ===
            "checkoutBtn"
        ) {

            checkout();

        }

    }
);


// ======================================================
// SIGN UP
// ======================================================

function setupSignup() {

    const createAccountBtn =
        document.getElementById(
            "createAccountBtn"
        );


    if (!createAccountBtn) {
        return;
    }


    createAccountBtn.addEventListener(
        "click",
        function() {

            const nameInput =
                document.getElementById(
                    "signupName"
                );


            const emailInput =
                document.getElementById(
                    "signupEmail"
                );


            const passwordInput =
                document.getElementById(
                    "signupPassword"
                );


            if (
                !nameInput ||
                !emailInput ||
                !passwordInput
            ) {

                return;

            }


            const name =
                nameInput.value.trim();


            const email =
                emailInput.value
                    .trim();


            const password =
                passwordInput.value;


            if (
                !name ||
                !email ||
                !password
            ) {

                alert(
                    "Please fill in all the fields."
                );

                return;

            }


            const user = {

                name: name,

                email: email,

                password: password

            };


            localStorage.setItem(
                "collectiveUser",
                JSON.stringify(user)
            );


            localStorage.setItem(
                "collectiveLoggedIn",
                "false"
            );


            localStorage.setItem(
                "collectivePoints",
                "0"
            );


            localStorage.setItem(
                "collectiveTotalSpent",
                "0"
            );


            localStorage.removeItem(
                "collectiveGift1"
            );


            localStorage.removeItem(
                "collectiveGift2"
            );


            alert(
                "Account created successfully!"
            );


            window.location.href =
                "login.html";

        }
    );

}


// ======================================================
// LOGIN
// ======================================================

function setupLogin() {

    const loginBtn =
        document.getElementById(
            "loginBtn"
        );


    if (!loginBtn) {
        return;
    }


    loginBtn.addEventListener(
        "click",
        function() {

            const emailInput =
                document.getElementById(
                    "loginEmail"
                );


            const passwordInput =
                document.getElementById(
                    "loginPassword"
                );


            if (
                !emailInput ||
                !passwordInput
            ) {

                return;

            }


            const email =
                emailInput.value
                    .trim();


            const password =
                passwordInput.value;


            if (
                !email ||
                !password
            ) {

                alert(
                    "Please enter your email and password."
                );

                return;

            }


            const savedUser =
                JSON.parse(
                    localStorage.getItem(
                        "collectiveUser"
                    ) || "null"
                );


            if (!savedUser) {

                alert(
                    "No account found. Please sign up first."
                );

                return;

            }


            if (
                email.toLowerCase() !==
                savedUser.email.toLowerCase() ||
                password !==
                savedUser.password
            ) {

                alert(
                    "Incorrect email or password."
                );

                return;

            }


            localStorage.setItem(
                "collectiveLoggedIn",
                "true"
            );


            alert(
                "Login successful!"
            );


            window.location.href =
                "profile.html";

        }
    );

}


// ======================================================
// PROFILE
// ======================================================

function setupProfile() {

    const profileName =
        document.getElementById(
            "profileName"
        );


    const profileEmail =
        document.getElementById(
            "profileEmail"
        );


    const profilePoints =
        document.getElementById(
            "profilePoints"
        );


    const profileGreeting =
        document.getElementById(
            "profileGreeting"
        );


    const profileInitial =
        document.getElementById(
            "profileInitial"
        );


    const gift1Status =
        document.getElementById(
            "gift1Status"
        );


    const gift2Status =
        document.getElementById(
            "gift2Status"
        );


    const logoutBtn =
        document.getElementById(
            "logoutBtn"
        );


    const savedUser =
        JSON.parse(
            localStorage.getItem(
                "collectiveUser"
            ) || "null"
        );


    if (!savedUser) {

        if (profileName) {

            profileName.textContent =
                "Please log in";

        }


        if (profileEmail) {

            profileEmail.textContent =
                "You need to log in to view your profile.";

        }


        return;

    }


    if (profileName) {

        profileName.textContent =
            savedUser.name;

    }


    if (profileEmail) {

        profileEmail.textContent =
            savedUser.email;

    }


    if (profileGreeting) {

        profileGreeting.textContent =
            `Welcome back, ${savedUser.name}.`;

    }


    if (profileInitial) {

        profileInitial.textContent =
            savedUser.name
                .charAt(0)
                .toUpperCase();

    }


    if (profilePoints) {

        profilePoints.textContent =
            getPoints();

    }


    if (gift1Status) {

        gift1Status.textContent =
            getTotalSpent() >= 50000
                ? "✓ UNLOCKED"
                : "NOT UNLOCKED";

    }


    if (gift2Status) {

        gift2Status.textContent =
            getTotalSpent() >= 100000
                ? "✓ UNLOCKED"
                : "NOT UNLOCKED";

    }


    if (logoutBtn) {

        logoutBtn.addEventListener(
            "click",
            function() {

                localStorage.removeItem(
                    "collectiveLoggedIn"
                );


                alert(
                    "You have been logged out."
                );


                window.location.href =
                    "login.html";

            }
        );

    }

}


// ======================================================
// PROFILE CARD NAVIGATION
// ======================================================

document.addEventListener(
    "click",
    function(event) {

        const earnCard =
            event.target.closest(
                ".earn-card"
            );


        if (earnCard) {

            window.location.href =
                "shop.html";

            return;

        }


        const giftCard =
            event.target.closest(
                ".gift-card"
            );


        if (giftCard) {

            window.location.href =
                "free-gifts.html";

        }

    }
);


// ======================================================
// START EVERYTHING
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        displayProducts();

        updateCartDisplay();

        updatePointsDisplay();

        updateRewardStatus();

        setupSignup();

        setupLogin();

        setupProfile();

    }
);
