// ======================================================
// THE COLLECTIVE.CO — SHOP SYSTEM
// ======================================================

// ======================================================
// PRODUCT CATALOGUE
// ======================================================

const productCatalog = [

// SKINCARE
{ name: "Men's Perfume", category: "Skincare", min: 12000, max: 20000, size: "100 ml", description: "A masculine perfume." },
{ name: "Body Butter", category: "Skincare", min: 5000, max: 9500, size: "Not specified" },
{ name: "Sunscreen", category: "Skincare", min: 4000, max: 9000, size: "Not specified" },
{ name: "Face Cleanser", category: "Skincare", min: 7500, max: 10000, size: "Not specified" },
{ name: "Body Scrub", category: "Skincare", min: 4000, max: 8000, size: "Not specified" },
{ name: "Face Serum", category: "Skincare", min: 1500, max: 4500, size: "Not specified" },
{ name: "Lip Mask", category: "Skincare", min: 1000, max: 3000, size: "Not specified" },
{ name: "Rhode Lip Gloss", category: "Skincare", min: 10000, max: 15000, size: "Not specified", colors: ["Clear", "Pink", "Brown"] },
{ name: "SHEGLAM Lip Gloss", category: "Skincare", min: 10000, max: 15000, size: "Not specified", colors: ["Clear", "Pink", "Nude", "Brown"] },
{ name: "USHAS Lip Gloss", category: "Skincare", min: 10000, max: 15000, size: "Not specified", colors: ["Clear", "Pink", "Nude", "Brown"] },
{ name: "Clear Normal Lip Gloss", category: "Skincare", min: 1000, max: 2000, size: "Not specified", colors: ["Clear"] },
{ name: "Lip Balm", category: "Skincare", min: 1000, max: 2000, size: "Not specified" },
{ name: "Shower Gel", category: "Skincare", min: 12000, max: 12000, size: "Not specified" },
{ name: "Men's Fragrance Perfume", category: "Skincare", min: 9000, max: 10000, size: "50 ml" },
{ name: "Women's Fragrance Perfume", category: "Skincare", min: 9000, max: 10000, size: "50 ml" },
{ name: "Body Lotion", category: "Skincare", min: 8000, max: 12000, size: "Not specified" },
{ name: "Face Moisturizer", category: "Skincare", min: 3000, max: 7000, size: "Not specified" },
{ name: "Face Toner", category: "Skincare", min: 6500, max: 10000, size: "Not specified" },
{ name: "Body Oil", category: "Skincare", min: 6000, max: 10000, size: "Not specified" },
{ name: "Face Mask", category: "Skincare", min: 1000, max: 4500, size: "Not specified" },
{ name: "Lip Oil", category: "Skincare", min: 1000, max: 2000, size: "Not specified" },
{ name: "Pimple Patch", category: "Skincare", min: 500, max: 1800, size: "Not specified" },

// ACCESSORIES
{ name: "Bead Bracelet Set", category: "Accessories", min: 3000, max: 6000 },
{ name: "Masculine Chain Bracelet", category: "Accessories", min: 1000, max: 3500 },
{ name: "Chrome Heart Glasses", category: "Accessories", min: 15000, max: 20000 },
{ name: "Glasses", category: "Accessories", min: 2000, max: 5000 },
{ name: "Glasses Set of 3", category: "Accessories", min: 4000, max: 5000 },
{ name: "Glasses Set of 5", category: "Accessories", min: 5000, max: 10000 },
{ name: "Scrunchies", category: "Accessories", min: 1200, max: 1200 },
{ name: "Stanley Cup", category: "Accessories", min: 15000, max: 15000 },
{ name: "Body Floral Stanley Cup", category: "Accessories", min: 20000, max: 20000 },
{ name: "Headband", category: "Accessories", min: 1600, max: 1600 },
{ name: "Tote Bag", category: "Accessories", min: 10000, max: 20000 },
{ name: "Claw Clip", category: "Accessories", min: 2000, max: 2500 },
{ name: "Anklet", category: "Accessories", min: 1000, max: 2000 },
{ name: "Necklace", category: "Accessories", min: 1000, max: 3500 },
{ name: "Silver Bracelet", category: "Accessories", min: 3500, max: 3500 },
{ name: "Gold Bracelet", category: "Accessories", min: 3500, max: 3500 },
{ name: "Vacuum Cups", category: "Accessories", min: 10000, max: 20000 },

// CLOTHING
{ name: "Plain Tops", category: "Clothing", min: 6500, max: 8000 },
{ name: "Graphic Tops", category: "Clothing", min: 8000, max: 10000 },
{ name: "Tube Tops", category: "Clothing", min: 5000, max: 15000 },
{ name: "Jersey Tops", category: "Clothing", min: 8500, max: 8500 },
{ name: "Hoodies", category: "Clothing", min: 9500, max: 10000 },
{ name: "Zip-Up Hoodies", category: "Clothing", min: 9000, max: 15000 },
{ name: "Plain Sweatpants", category: "Clothing", min: 10000, max: 10000 },
{ name: "Leopard Sweatpants", category: "Clothing", min: 15000, max: 15000 },
{ name: "Designer Sweatpants", category: "Clothing", min: 20000, max: 20000 },
{ name: "Shorts", category: "Clothing", min: 10000, max: 10000 },
{ name: "Jean Bum Shorts", category: "Clothing", min: 5000, max: 5000 },
{ name: "Jeans", category: "Clothing", min: 10000, max: 10000 },
{ name: "Designed Jeans", category: "Clothing", min: 20000, max: 20000 },
{ name: "Bootcut Jeans", category: "Clothing", min: 10000, max: 10000 },
{ name: "Jeans Skirt", category: "Clothing", min: 6500, max: 6500 },
{ name: "Pleated Jeans Skirt", category: "Clothing", min: 6000, max: 6000 },
{ name: "Normal Shorts", category: "Clothing", min: 4000, max: 4000 },

// SHOES
{ name: "Shoes", category: "Shoes", min: 15000, max: 30000 },
{ name: "Adidas Sambas", category: "Shoes", min: 30000, max: 50000 },
{ name: "Adidas Campus", category: "Shoes", min: 30000, max: 50000 },
{ name: "Slides", category: "Shoes", min: 9000, max: 9000 },
{ name: "Crocs", category: "Shoes", min: 10000, max: 10000 },
{ name: "Loafers", category: "Shoes", min: 15000, max: 30000 },
{ name: "Clogs", category: "Shoes", min: 35000, max: 70000 },
{ name: "Timberland", category: "Shoes", min: 5000, max: 40000 },
{ name: "Vans", category: "Shoes", min: 5000, max: 40000 },
{ name: "Puma", category: "Shoes", min: 25000, max: 50000 },

// BAGS
{ name: "Hermes Bags", category: "Bags", min: 35000, max: 50000 },
{ name: "Mini Gucci Bags", category: "Bags", min: 20000, max: 50000 },
{ name: "Gucci Bags", category: "Bags", min: 35000, max: 60000 },
{ name: "Prada Bags", category: "Bags", min: 35000, max: 60000 },
{ name: "Dior Bags", category: "Bags", min: 35000, max: 70000 },
{ name: "Chanel Bags", category: "Bags", min: 45000, max: 70000 },
{ name: "Louis Vuitton Bags", category: "Bags", min: 25000, max: 70000 },
{ name: "Cartier Watches", category: "Bags", min: 20000, max: 35000 },
{ name: "Cartier Glasses", category: "Bags", min: 15000, max: 25000 }

];

// ======================================================
// FREE ITEM OFFERS
// ======================================================

const freeItemOffers = [
{ category: "Skincare", purchaseRequired: 50000, freeItems: 5 },
{ category: "Skincare", purchaseRequired: 100000, freeItems: 5 },
{ category: "Accessories", purchaseRequired: 50000, freeItems: 5 },
{ category: "Accessories", purchaseRequired: 100000, freeItems: 5 },
{ category: "Clothing", purchaseRequired: 50000, freeItems: 5 },
{ category: "Clothing", purchaseRequired: 100000, freeItems: 5 },
{ category: "Shoes", purchaseRequired: 50000, freeItems: 5 },
{ category: "Shoes", purchaseRequired: 100000, freeItems: 5 }
];

// ======================================================
// PRODUCT SETS
// ======================================================

const productSets = [
{
name: "Face Mask Set",
category: "Skincare",
piecesMin: 3,
piecesMax: 10,
priceMin: 5000,
priceMax: 7000
},
{
name: "Lip Mask Set",
category: "Skincare",
piecesMin: 3,
piecesMax: 10,
priceMin: 5000,
priceMax: 7000
},
{
name: "Lip Oil Set",
category: "Skincare",
piecesMin: 2,
piecesMax: 10,
priceMin: 4000,
priceMax: 7000
},
{
name: "Rhode Lip Gloss Set",
category: "Skincare",
piecesMin: 2,
piecesMax: 10,
priceMin: 10000,
priceMax: 20000
},
{
name: "SHEGLAM Lip Gloss Set",
category: "Skincare",
piecesMin: 2,
piecesMax: 10,
priceMin: 10000,
priceMax: 20000
},
{
name: "USHAS Lip Gloss Set",
category: "Skincare",
piecesMin: 2,
piecesMax: 10,
priceMin: 10000,
priceMax: 20000
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
    (min + (step * (number - 1))) / 100
) * 100;

}

productCatalog.forEach(product => {

for (let i = 1; i <= 30; i++) {

    products.push({
        id: `${product.name}-${i}`,
        name: product.name,
        listing: i,
        category: product.category,
        price: makePrice(product.min, product.max, i),
        size: product.size || "Not specified",
        description: product.description || "",
        colors: product.colors || [],
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

// ======================================================
// POINTS
// ======================================================

function getPoints() {

return Number(
    localStorage.getItem("collectivePoints") || "0"
);

}

function savePoints(points) {

localStorage.setItem(
    "collectivePoints",
    points.toString()
);

}

function calculatePoints(amount) {

return amount / 1000;

}

function addPurchasePoints(amount) {

const earned = calculatePoints(amount);

const current = getPoints();

savePoints(current + earned);

return earned;

}

// ======================================================
// SEARCH + CATEGORY FILTER
// ======================================================

let currentCategory = "All";

function filterProducts() {

const searchInput =
    document.getElementById("productSearch");

const search =
    searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";

const cards =
    document.querySelectorAll(".product-card");

let visible = 0;

cards.forEach(card => {

    const name =
        (card.dataset.name || "").toLowerCase();

    const category =
        card.dataset.category || "";

    const matchesSearch =
        name.includes(search);

    const matchesCategory =
        currentCategory === "All" ||
        category === currentCategory;

    if (matchesSearch && matchesCategory) {

        card.style.display = "";

        visible++;

    } else {

        card.style.display = "none";

    }

});

const message =
    document.querySelector(".no-products");

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
    document.querySelector(".collective-categories");

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

categories.forEach(category => {

    const button =
        document.createElement("button");

    button.type = "button";

    button.className =
        "category-button";

    button.textContent =
        category === "All"
            ? "ALL PRODUCTS"
            : category.toUpperCase();

    if (category === currentCategory) {
        button.classList.add("selected");
    }

    button.addEventListener(
        "click",
        function() {

            currentCategory = category;

            document
                .querySelectorAll(".category-button")
                .forEach(btn => {
                    btn.classList.remove("selected");
                });

            button.classList.add("selected");

            filterProducts();

        }
    );

    categoryContainer.appendChild(button);

});

}

// ======================================================
// CATEGORY NAVIGATION BUTTON
// ======================================================

document.addEventListener(
"click",
function(event) {

    if (event.target.id !== "categoryBtn") {
        return;
    }

    event.preventDefault();

    const categoryMenu =
        document.querySelector(".collective-categories");

    if (!categoryMenu) {
        return;
    }

    if (
        categoryMenu.style.display === "none" ||
        categoryMenu.style.display === ""
    ) {

        categoryMenu.style.display = "flex";

    } else {

        categoryMenu.style.display = "none";

    }

}

);

// ======================================================
// SEARCH
// ======================================================

document.addEventListener(
"input",
function(event) {

    if (event.target.id === "productSearch") {
        filterProducts();
    }

}


);

document.addEventListener(
"click",
function(event) {


    if (event.target.id === "searchButton") {
        filterProducts();
    }

}

);

// ======================================================
// PRODUCT CARD
// ======================================================

function createProductCard(product) {

const card =
    document.createElement("div");

card.className =
    "product-card";

card.dataset.name =
    product.name;

card.dataset.category =
    product.category;

let colorOption = "";

if (
    product.colors &&
    product.colors.length > 0
) {

    colorOption = `

        <label>Shade / Colour</label>

        <select class="product-color">

            <option value="">
                Choose
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


card.innerHTML = `

    <div class="product-image">
        <span>Product Image</span>
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
                ? `<p>${product.description}</p>`
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
                type="button"
            >
                −
            </button>

            <span class="quantity-number">
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
    card.querySelector(".quantity-minus");

const plus =
    card.querySelector(".quantity-plus");

const number =
    card.querySelector(".quantity-number");


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

        if (quantity < product.stock) {

            quantity++;

            number.textContent =
                quantity;

        }

    }
);


const addButton =
    card.querySelector(".add-to-cart");


addButton.addEventListener(
    "click",
    function() {

        const selectedColor =
            card.querySelector(".product-color");

        if (
            selectedColor &&
            !selectedColor.value
        ) {

            alert(
                "Please choose a shade / colour first."
            );

            return;

        }

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

        saveCart();

        alert(
            `${product.name} added to your cart!`
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
    document.querySelector(".product-grid");

if (!productGrid) {
    return;
}

productGrid.innerHTML = "";

products.forEach(product => {

    productGrid.appendChild(
        createProductCard(product)
    );

});


let noProducts =
    document.querySelector(".no-products");


if (!noProducts) {

    noProducts =
        document.createElement("p");

    noProducts.className =
        "no-products";

    noProducts.textContent =
        "No products found.";

    productGrid.parentNode.insertBefore(
        noProducts,
        productGrid
    );

}


noProducts.style.display = "none";

createCategoryMenu();

filterProducts();

}

// ======================================================
// PROFILE POINTS
// ======================================================

function updatePointsDisplay() {

const points =
    getPoints();

const elements =
    document.querySelectorAll(
        ".points-balance"
    );

elements.forEach(element => {

    element.textContent =
        `${points} points`;

});


}

// ======================================================
// FREE ITEMS
// ======================================================

function checkFreeItemEligibility(
category,
amount
) {

return freeItemOffers.filter(
    offer =>
        offer.category === category &&
        amount >= offer.purchaseRequired
);

}

// ======================================================
// PRODUCT SET INFORMATION
// ======================================================

function getSetPrice(
set,
numberOfPieces
) {

if (
    numberOfPieces < set.piecesMin ||
    numberOfPieces > set.piecesMax
) {

    return null;

}

if (
    set.priceMin === set.priceMax
) {

    return set.priceMin;

}

const percentage =
    (numberOfPieces - set.piecesMin) /
    (set.piecesMax - set.piecesMin);

return Math.round(
    (
        set.priceMin +
        (
            (set.priceMax - set.priceMin)
            * percentage
        )
    ) / 100
) * 100;


}

// ======================================================
// START SHOP
// ======================================================

document.addEventListener(
"DOMContentLoaded",
function() {

    displayProducts();

    updatePointsDisplay();

}


);
