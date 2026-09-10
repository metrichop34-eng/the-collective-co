// ======================================================
// THE COLLECTIVE.CO — COMPLETE SHOP SYSTEM
// CART + CHECKOUT + POINTS + FREE GIFTS + LOGIN
// ======================================================


// ======================================================
// PRODUCT CATALOGUE
// ======================================================

const productCatalog = [

    // SKINCARE
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


    // ACCESSORIES
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


    // CLOTHING
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


    // SHOES
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


    // BAGS
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
            description: product.description || "",
            colors: product.colors || [],
            stock: 10
        });

    }

});


// ======================================================
// SAFE STORAGE
// ======================================================

function getStoredArray(key) {

    try {

        const data = JSON.parse(
            localStorage.getItem(key) || "[]"
        );

        return Array.isArray(data)
            ? data
            : [];

    } catch (error) {

        return [];

    }

}


function setStoredArray(key, value) {

    try {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

    } catch (error) {

        console.error(
            "Could not save data:",
            error
        );

    }

}


// ======================================================
// CART
// ======================================================

let cart = getStoredArray("collectiveCart");


function saveCart() {

    setStoredArray(
        "collectiveCart",
        cart
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
// FREE GIFTS
// ======================================================

function getSelectedFreeGiftIds() {

    return getStoredArray(
        "collectiveSelectedFreeGifts"
    );

}


function getSelectedFreeGiftProducts() {

    const giftIds =
        getSelectedFreeGiftIds();

    return giftIds
        .map(id =>
            products.find(
                product =>
                    String(product.id) ===
                    String(id)
            )
        )
        .filter(Boolean);

}


function getCheckoutItems() {

    const paidItems =
        cart.map(item => ({
            ...item,
            isFreeGift: false
        }));

    const giftItems =
        getSelectedFreeGiftProducts()
            .map(product => ({
                id: "FREE-GIFT-" + product.id,
                name: product.name,
                category: product.category,
                price: 0,
                quantity: 1,
                color: null,
                size: product.size,
                isFreeGift: true,
                originalGiftPrice: product.price
            }));

    return [
        ...paidItems,
        ...giftItems
    ];

}


// ======================================================
// CART DISPLAY
// ======================================================

function updateCartCount() {

    const cartCount =
        document.getElementById("cartCount");

    if (!cartCount) return;

    cartCount.textContent =
        getCartQuantity();

}


function updateCartDisplay() {

    updateCartCount();

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");

    if (!cartItems) return;


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

        const price =
            Number(item.price) || 0;

        const quantity =
            Number(item.quantity) || 0;

        const itemTotal =
            price * quantity;


        const cartItem =
            document.createElement("div");

        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `
            <div class="cart-item-info">

                <h3>${item.name}</h3>

                ${
                    item.color
                        ? `<small>Shade: ${item.color}</small>`
                        : ""
                }

                <strong>
                    ₦${price.toLocaleString()}
                </strong>

            </div>

            <div class="cart-item-actions">

                <div class="cart-quantity">

                    <button
                        type="button"
                        class="cart-minus"
                        data-index="${index}">
                        −
                    </button>

                    <span>${quantity}</span>

                    <button
                        type="button"
                        class="cart-plus"
                        data-index="${index}">
                        +
                    </button>

                </div>

                <strong class="cart-item-total">
                    ₦${itemTotal.toLocaleString()}
                </strong>

                <button
                    type="button"
                    class="remove-cart-item"
                    data-index="${index}">
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
// CART OPEN / CLOSE
// ======================================================

function openCart() {

    const popup =
        document.getElementById("cartPopup");

    if (!popup) return;

    updateCartDisplay();

    popup.style.display = "flex";

    document.body.classList.add(
        "cart-open"
    );

}


function closeCart() {

    const popup =
        document.getElementById("cartPopup");

    if (!popup) return;

    popup.style.display = "none";

    document.body.classList.remove(
        "cart-open"
    );

}


// ======================================================
// CART EVENTS
// ======================================================

document.addEventListener(
    "click",
    function(event) {

        const target =
            event.target instanceof Element
                ? event.target
                : null;

        if (!target) return;


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
                Number(target.dataset.index);

            if (
                Number.isInteger(index) &&
                cart[index]
            ) {

                cart.splice(index, 1);

                saveCart();

                updateCartDisplay();

                updateGiftShoppingProgress();

            }

            return;
        }


        if (
            target.classList.contains(
                "cart-minus"
            )
        ) {

            const index =
                Number(target.dataset.index);

            if (
                Number.isInteger(index) &&
                cart[index]
            ) {

                if (
                    Number(cart[index].quantity) > 1
                ) {

                    cart[index].quantity--;

                }

                saveCart();

                updateCartDisplay();

                updateGiftShoppingProgress();

            }

            return;
        }


        if (
            target.classList.contains(
                "cart-plus"
            )
        ) {

            const index =
                Number(target.dataset.index);

            if (
                Number.isInteger(index) &&
                cart[index]
            ) {

                const product =
                    products.find(
                        p =>
                            p.id ===
                            cart[index].id
                    );

                const maximum =
                    product
                        ? product.stock
                        : 10;


                if (
                    Number(cart[index].quantity) <
                    maximum
                ) {

                    cart[index].quantity++;

                }

                saveCart();

                updateCartDisplay();

                updateGiftShoppingProgress();

            }

            return;
        }

    }
);


document.addEventListener(
    "click",
    function(event) {

        const popup =
            document.getElementById(
                "cartPopup"
            );

        if (!popup) return;

        if (event.target === popup) {

            closeCart();

        }

    }
);


document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

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
        Number(amount) / 1000
    );

}


function pointsToNaira(points) {

    return Number(points) * 100;

}


function getMaxPointsUsable(points) {

    return Math.min(
        Number(points) || 0,
        200
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
        String(
            Math.max(
                0,
                Number(amount) || 0
            )
        )
    );

}


// ======================================================
// REWARD STATUS
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

let filteredProducts = [];

let productsShown = 0;

const PRODUCTS_PER_LOAD = 60;


// ======================================================
// GET FILTERED PRODUCTS
// ======================================================

function getFilteredProducts() {

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


    return products.filter(product => {

        const matchesSearch =
            product.name
                .toLowerCase()
                .includes(search);


        const matchesCategory =
            currentCategory === "All" ||
            product.category ===
            currentCategory;


        return (
            matchesSearch &&
            matchesCategory
        );

    });

}


// ======================================================
// RENDER PRODUCTS
// ======================================================

function renderProducts() {

    const grid =
        document.querySelector(
            ".product-grid"
        );


    if (!grid) return;


    grid.innerHTML = "";


    productsShown = 0;


    filteredProducts =
        getFilteredProducts();


    renderNextProducts();

}


// ======================================================
// RENDER NEXT BATCH
// ======================================================

function renderNextProducts() {

    const grid =
        document.querySelector(
            ".product-grid"
        );


    if (!grid) return;


    const start =
        productsShown;


    const end =
        Math.min(
            start + PRODUCTS_PER_LOAD,
            filteredProducts.length
        );


    const fragment =
        document.createDocumentFragment();


    for (
        let i = start;
        i < end;
        i++
    ) {

        fragment.appendChild(
            createProductCard(
                filteredProducts[i]
            )
        );

    }


    grid.appendChild(fragment);


    productsShown = end;


    updateLoadMoreButton();

    updateNoProductsMessage();

}


// ======================================================
// LOAD MORE BUTTON
// ======================================================

function updateLoadMoreButton() {

    let button =
        document.getElementById(
            "loadMoreProducts"
        );


    const grid =
        document.querySelector(
            ".product-grid"
        );


    if (!grid) return;


    if (
        productsShown >=
        filteredProducts.length
    ) {

        if (button) {
            button.remove();
        }

        return;

    }


    if (!button) {

        button =
            document.createElement(
                "button"
            );

        button.id =
            "loadMoreProducts";

        button.type =
            "button";

        button.textContent =
            "LOAD MORE PRODUCTS";


        button.style.display =
            "block";

        button.style.margin =
            "30px auto";

        button.style.padding =
            "13px 25px";

        button.style.border =
            "0";

        button.style.borderRadius =
            "12px";

        button.style.cursor =
            "pointer";

        button.style.fontWeight =
            "bold";

        button.style.background =
            "#304B52";

        button.style.color =
            "#FFFFFF";


        button.addEventListener(
            "click",
            function() {

                renderNextProducts();

            }
        );


        grid.parentNode.appendChild(
            button
        );

    }

}


// ======================================================
// NO PRODUCTS MESSAGE
// ======================================================

function updateNoProductsMessage() {

    const grid =
        document.querySelector(
            ".product-grid"
        );


    if (!grid) return;


    let message =
        document.querySelector(
            ".no-products"
        );


    if (!message) {

        message =
            document.createElement(
                "p"
            );

        message.className =
            "no-products";

        message.textContent =
            "No products found.";

        grid.parentNode.insertBefore(
            message,
            grid
        );

    }


    message.style.display =
        filteredProducts.length === 0
            ? "block"
            : "none";

}


// ======================================================
// FILTER PRODUCTS
// ======================================================

function filterProducts() {

    renderProducts();

}


// ======================================================
// CATEGORY MENU
// ======================================================

function createCategoryMenu() {

    const container =
        document.querySelector(
            ".collective-categories"
        );


    if (!container) return;


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
                                btn.classList.remove(
                                    "selected"
                                )
                        );


                    button.classList.add(
                        "selected"
                    );


                    renderProducts();

                }
            );


            container.appendChild(
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


        if (!target) return;


        if (
            target.id ===
            "categoryBtn"
        ) {

            event.preventDefault();


            const menu =
                document.querySelector(
                    ".collective-categories"
                );


            if (!menu) return;


            const hidden =
                menu.style.display ===
                    "none" ||
                menu.style.display === "";


            menu.style.display =
                hidden
                    ? "flex"
                    : "none";

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

            renderProducts();

        }

    }
);


document.addEventListener(
    "click",
    function(event) {

        const target =
            event.target instanceof Element
                ? event.target
                : null;


        if (!target) return;


        if (
            target.id ===
            "searchButton"
        ) {

            event.preventDefault();

            renderProducts();

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

            <select class="product-color">

                <option value="">
                    Choose
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

            <strong class="product-price">
                ₦${product.price.toLocaleString()}
            </strong>

            ${colorOption}

            <p class="stock-status">
                In stock
            </p>

            <div class="quantity-box">

                <button
                    class="quantity-minus"
                    type="button">
                    −
                </button>

                <span class="quantity-number">
                    1
                </span>

                <button
                    class="quantity-plus"
                    type="button">
                    +
                </button>

            </div>

            <button
                class="add-to-cart"
                type="button">
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


    if (minus) {

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

    }


    if (plus) {

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

    }


    const addButton =
        card.querySelector(
            ".add-to-cart"
        );


    if (addButton) {

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


                const color =
                    selectedColor
                        ? selectedColor.value
                        : null;


                const existing =
                    cart.find(
                        item =>
                            item.id ===
                                product.id &&
                            item.color ===
                                color
                    );


                if (existing) {

                    existing.quantity =
                        Math.min(
                            Number(
                                existing.quantity
                            ) + quantity,
                            product.stock
                        );

                } else {

                    cart.push({

                        id:
                            product.id,

                        name:
                            product.name,

                        price:
                            product.price,

                        quantity:
                            quantity,

                        color:
                            color

                    });

                }


                saveCart();

                updateCartDisplay();

                updateGiftShoppingProgress();


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

    }


    return card;

}


// ======================================================
// DISPLAY PRODUCTS
// ======================================================

function displayProducts() {

    const grid =
        document.querySelector(
            ".product-grid"
        );


    if (!grid) {

        console.warn(
            "THE COLLECTIVE.CO: .product-grid was not found in shop.html"
        );

        return;

    }


    createCategoryMenu();

    renderProducts();

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
        document.createElement(
            "div"
        );


    modal.id =
        "collectiveCheckoutModal";


    Object.assign(
        modal.style,
        {
            position: "fixed",
            inset: "0",
            background: "rgba(48,75,82,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "99999",
            padding: "20px"
        }
    );


    const box =
        document.createElement(
            "div"
        );


    Object.assign(
        box.style,
        {
            background: "#FFFDF8",
            width: "100%",
            maxWidth: "560px",
            maxHeight: "90vh",
            overflowY: "auto",
            borderRadius: "22px",
            padding: "30px",
            boxSizing: "border-box",
            textAlign: "center",
            boxShadow: "0 15px 45px rgba(0,0,0,0.18)"
        }
    );


    box.innerHTML =
        content;


    modal.appendChild(box);

    document.body.appendChild(modal);


    return modal;

}


// ======================================================
// CHECKOUT
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
// START CHECKOUT
// ======================================================

function startCheckout() {

    const total =
        getCartTotal();


    const currentPoints =
        getPoints();


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

            <div
                style="
                    display:flex;
                    gap:12px;
                    justify-content:center;
                    margin-top:25px;
                    flex-wrap:wrap;
                "
            >

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


    const yes =
        document.getElementById(
            "usePointsYes"
        );


    const no =
        document.getElementById(
            "usePointsNo"
        );


    if (yes) {

        yes.addEventListener(
            "click",
            function() {

                showPointsInput(
                    total,
                    currentPoints
                );

            }
        );

    }


    if (no) {

        no.addEventListener(
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

}


// ======================================================
// POINTS INPUT
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


    if (maximumPoints <= 0) {

        showCustomerDetails(
            total,
            0
        );

        return;

    }


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

            <p
                style="
                    font-size:13px;
                    margin-bottom:20px;
                "
            >
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


    const apply =
        document.getElementById(
            "applyPoints"
        );


    if (!apply) return;


    apply.addEventListener(
        "click",
        function() {

            const input =
                document.getElementById(
                    "pointsToUse"
                );


            if (!input) return;


            const points =
                Number(input.value);


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
                pointsToNaira(points);


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

    const checkoutItems =
        getCheckoutItems();


    const paidItems =
        checkoutItems.filter(
            item =>
                !item.isFreeGift
        );


    const giftItems =
        checkoutItems.filter(
            item =>
                item.isFreeGift
        );


    const modal =
        showCheckoutModal(`

            <h2>
                ENTER:
            </h2>

            <div
                style="
                    text-align:left;
                    margin:20px 0;
                    padding:16px;
                    background:#F7F4EE;
                    border-radius:14px;
                "
            >

                <h3
                    style="
                        color:#304B52;
                        margin-top:0;
                    "
                >
                    Your Order
                </h3>

                ${
                    paidItems.length
                        ? paidItems
                            .map(
                                item => `
                                    <div
                                        style="
                                            display:flex;
                                            justify-content:space-between;
                                            gap:10px;
                                            padding:7px 0;
                                        "
                                    >

                                        <span>
                                            ${item.name}
                                            × ${item.quantity}
                                            ${
                                                item.color
                                                    ? `(${item.color})`
                                                    : ""
                                            }
                                        </span>

                                        <strong>
                                            ₦${
                                                (
                                                    Number(item.price) *
                                                    Number(item.quantity)
                                                ).toLocaleString()
                                            }
                                        </strong>

                                    </div>
                                `
                            )
                            .join("")
                        : ""
                }

                ${
                    giftItems.length
                        ? `
                            <div
                                style="
                                    border-top:1px solid #DCEFF2;
                                    margin-top:8px;
                                    padding-top:10px;
                                "
                            >

                                <strong>
                                    🎁 FREE GIFTS
                                </strong>

                                ${giftItems
                                    .map(
                                        item => `
                                            <div
                                                style="
                                                    display:flex;
                                                    justify-content:space-between;
                                                    padding:7px 0;
                                                "
                                            >

                                                <span>
                                                    ${item.name}
                                                </span>

                                                <strong>
                                                    ₦0
                                                </strong>

                                            </div>
                                        `
                                    )
                                    .join("")}

                            </div>
                          `
                        : ""
                }

            </div>


            <div
                style="
                    text-align:left;
                    margin-top:20px;
                "
            >

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


            <div
                style="
                    margin-top:10px;
                    padding:15px;
                    border-radius:12px;
                    background:#F7F4EE;
                "
            >

                <strong>
                    Total: ₦${total.toLocaleString()}
                </strong>

                ${
                    pointsUsed > 0
                        ? `
                            <br>

                            <small>
                                ${pointsUsed}
                                points used —
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


    const continueButton =
        document.getElementById(
            "continueToTransfer"
        );


    if (!continueButton) return;


    continueButton.addEventListener(
        "click",
        function() {

            const firstName =
                document.getElementById(
                    "checkoutFirstName"
                ).value.trim();


            const lastName =
                document.getElementById(
                    "checkoutLastName"
                ).value.trim();


            const address =
                document.getElementById(
                    "checkoutAddress"
                ).value.trim();


            const phone =
                document.getElementById(
                    "checkoutPhone"
                ).value.trim();


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
// BANK TRANSFER
// ======================================================

function showTransferConfirmation(
    total,
    pointsUsed,
    customer
) {

    const checkoutItems =
        getCheckoutItems();


    const giftItems =
        checkoutItems.filter(
            item =>
                item.isFreeGift
        );


    const modal =
        showCheckoutModal(`

            <h2>
                BANK TRANSFER
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
                            ${pointsUsed}
                            points used —
                            ₦${pointsToNaira(
                                pointsUsed
                            ).toLocaleString()}
                            discount
                        </p>
                      `
                    : ""
            }

            ${
                giftItems.length
                    ? `
                        <div
                            style="
                                background:#DCEFF2;
                                border-radius:14px;
                                padding:12px;
                                margin:15px 0;
                                color:#304B52;
                            "
                        >

                            🎁
                            <strong>
                                ${giftItems.length}
                                free gifts included
                            </strong>

                            <br>

                            <small>
                                Free gifts total: ₦0
                            </small>

                        </div>
                      `
                    : ""
            }

            <p
                style="
                    font-size:14px;
                    margin-top:20px;
                "
            >
                Please transfer the exact amount
                to one of the accounts below.
            </p>


            <div
                style="
                    background:#F7F4EE;
                    border-radius:15px;
                    padding:18px;
                    margin-top:20px;
                    text-align:left;
                "
            >

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


            <div
                style="
                    font-weight:bold;
                    font-size:18px;
                    margin:15px 0;
                "
            >
                OR
            </div>


            <div
                style="
                    background:#F7F4EE;
                    border-radius:15px;
                    padding:18px;
                    text-align:left;
                "
            >

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


            <p
                style="
                    font-size:12px;
                    color:#71858A;
                    margin-top:18px;
                "
            >
                Bank transfer only.
            </p>


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
                I HAVE PAID
            </button>

        `);


    const paidButton =
        document.getElementById(
            "paidButton"
        );


    if (!paidButton) return;


    paidButton.addEventListener(
        "click",
        function() {

            createPendingOrder(
                total,
                pointsUsed,
                customer
            );


            modal.remove();


            showPaymentChecking();

        }
    );

}


// ======================================================
// CREATE ORDER
// ======================================================

function createPendingOrder(
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


    const orders =
        getStoredArray(
            "collectiveOrders"
        );


    orders.push(order);


    setStoredArray(
        "collectiveOrders",
        orders
    );


    localStorage.setItem(
        "collectivePendingOrder",
        JSON.stringify(order)
    );


    localStorage.setItem(
        "collectiveOrderStatus",
        "payment-checking"
    );

}


// ======================================================
// PAYMENT CHECKING
// ======================================================

function showPaymentChecking() {

    const modal =
        showCheckoutModal(`

            <div
                style="
                    padding:25px 10px;
                "
            >

                <div
                    style="
                        font-size:45px;
                        margin-bottom:15px;
                    "
                >
                    ⏳
                </div>

                <h2>
                    Checking to see if money has been received
                </h2>

                <p>
                    Please wait while your payment
                    is being checked.
                </p>

                <p
                    style="
                        font-size:13px;
                        margin-top:20px;
                    "
                >
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


    const closeButton =
        document.getElementById(
            "closePaymentChecking"
        );


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            function() {

                modal.remove();

            }
        );

    }

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


        if (!target) return;


        if (
            target.id ===
            "checkoutBtn"
        ) {

            event.preventDefault();

            checkout();

        }

    }
);


// ======================================================
// ₦50,000 FREE-GIFT SHOPPING PROGRESS
// ======================================================

function updateGiftShoppingProgress() {

    const selectedGifts =
        getSelectedFreeGiftIds();


    if (
        selectedGifts.length !== 5
    ) {

        const bar =
            document.getElementById(
                "giftSpendBar"
            );


        if (bar) {

            bar.style.display =
                "none";

        }


        document.body.classList.remove(
            "gift-shopping-active"
        );


        return;

    }


    const target = 50000;


    const paidShoppingTotal =
        getCartTotal();


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


    if (bar) {

        bar.style.display =
            "block";

    }


    document.body.classList.add(
        "gift-shopping-active"
    );


    const percentage =
        Math.min(
            (paidShoppingTotal / target) *
            100,
            100
        );


    if (amount) {

        amount.textContent =
            `₦${paidShoppingTotal.toLocaleString()} / ₦50,000`;

    }


    if (fill) {

        fill.style.width =
            percentage + "%";

    }


    if (
        paidShoppingTotal <
        target
    ) {

        const remaining =
            target -
            paidShoppingTotal;


        if (message) {

            message.textContent =
                `Spend ₦${remaining.toLocaleString()} more to take away your 5 gifts.`;

        }


        return;

    }


    if (message) {

        message.textContent =
            "✓ ₦50,000 reached! Taking you to checkout...";

    }


    if (
        localStorage.getItem(
            "collectiveGiftCheckoutStarted"
        ) !== "true"
    ) {

        localStorage.setItem(
            "collectiveGiftCheckoutStarted",
            "true"
        );


        setTimeout(
            function() {

                checkout();

            },
            1000
        );

    }

}


// ======================================================
// SIGN UP
// ======================================================

function setupSignup() {

    const createAccountBtn =
        document.getElementById(
            "createAccountBtn"
        );


    if (!createAccountBtn) return;


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
            ) return;


            const name =
                nameInput.value.trim();


            const email =
                emailInput.value.trim();


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

                name:
                    name,

                email:
                    email,

                password:
                    password

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


            localStorage.removeItem(
                "collectiveSelectedFreeGifts"
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


    if (!loginBtn) return;


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
            ) return;


            const email =
                emailInput.value.trim();


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


            let savedUser = null;


            try {

                savedUser =
                    JSON.parse(
                        localStorage.getItem(
                            "collectiveUser"
                        ) || "null"
                    );

            } catch (error) {

                savedUser = null;

            }


            if (!savedUser) {

                alert(
                    "No account found. Please sign up first."
                );

                return;

            }


            if (
                email.toLowerCase() !==
                    String(
                        savedUser.email
                    ).toLowerCase() ||
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


    let savedUser = null;


    try {

        savedUser =
            JSON.parse(
                localStorage.getItem(
                    "collectiveUser"
                ) || "null"
            );

    } catch (error) {

        savedUser = null;

    }


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

        const target =
            event.target instanceof Element
                ? event.target
                : null;


        if (!target) return;


        const earnCard =
            target.closest(
                ".earn-card"
            );


        if (earnCard) {

            window.location.href =
                "shop.html";

            return;

        }


        const giftCard =
            target.closest(
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

        updateGiftShoppingProgress();


        // Synchronize cart between pages/tabs
        window.addEventListener(
            "storage",
            function(event) {

                if (
                    event.key ===
                    "collectiveCart"
                ) {

                    cart =
                        getStoredArray(
                            "collectiveCart"
                        );


                    updateCartDisplay();

                    updateGiftShoppingProgress();

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

                }

            }
        );

    }
);
