/* =========================================================
   THE COLLECTIVE.CO — SHOP SYSTEM
   ========================================================= */

import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";


/* =========================================================
   FIREBASE
   ========================================================= */

const firebaseConfig = {
  apiKey: "AIzaSyCkavvOeD4GEtUsq4S-QuTU4ejedf8CiL8",
  authDomain: "the-collectiveco-orders.firebaseapp.com",
  projectId: "the-collectiveco-orders",
  storageBucket: "the-collectiveco-orders.firebasestorage.app",
  messagingSenderId: "543435699346",
  appId: "1:543435699346:web:886ff03c71fb546dc7a24b",
  measurementId: "G-7GP25TW6JH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


/* =========================================================
   PRODUCT CATALOG
   ========================================================= */

const productCatalog = [

  /* ================= SKINCARE ================= */

  {
    category: "Skincare",
    name: "Men's Perfume",
    min: 12000,
    max: 20000,
    size: "100 ml"
  },
  {
    category: "Skincare",
    name: "Body Butter",
    min: 5000,
    max: 9500
  },
  {
    category: "Skincare",
    name: "Sunscreen",
    min: 3500,
    max: 7500
  },
  {
    category: "Skincare",
    name: "Face Cleanser",
    min: 3000,
    max: 7000
  },
  {
    category: "Skincare",
    name: "Body Scrub",
    min: 4000,
    max: 8000
  },
  {
    category: "Skincare",
    name: "Face Serum",
    min: 4500,
    max: 10000
  },
  {
    category: "Skincare",
    name: "Lip Mask",
    min: 2500,
    max: 5500
  },
  {
    category: "Skincare",
    name: "Rhode Lip Gloss",
    min: 10000,
    max: 15000,
    colors: ["Peach", "Pink", "Brown", "Clear"]
  },
  {
    category: "Skincare",
    name: "SHEGLAM Lip Gloss",
    min: 10000,
    max: 15000,
    colors: ["Pink", "Red", "Brown", "Clear"]
  },
  {
    category: "Skincare",
    name: "USHAS Lip Gloss",
    min: 10000,
    max: 15000,
    colors: ["Pink", "Red", "Brown", "Nude"]
  },
  {
    category: "Skincare",
    name: "Clear Normal Lip Gloss",
    min: 1000,
    max: 2000
  },
  {
    category: "Skincare",
    name: "Lip Balm",
    min: 1500,
    max: 3500
  },
  {
    category: "Skincare",
    name: "Shower Gel",
    min: 12000,
    max: 12000
  },
  {
    category: "Skincare",
    name: "Men's Fragrance Perfume",
    min: 10000,
    max: 18000
  },
  {
    category: "Skincare",
    name: "Women's Fragrance Perfume",
    min: 10000,
    max: 18000
  },
  {
    category: "Skincare",
    name: "Body Lotion",
    min: 4000,
    max: 8500
  },
  {
    category: "Skincare",
    name: "Face Moisturizer",
    min: 4000,
    max: 8500
  },
  {
    category: "Skincare",
    name: "Face Toner",
    min: 3000,
    max: 7000
  },
  {
    category: "Skincare",
    name: "Body Oil",
    min: 4500,
    max: 9000
  },
  {
    category: "Skincare",
    name: "Face Mask",
    min: 2000,
    max: 5000
  },
  {
    category: "Skincare",
    name: "Lip Oil",
    min: 2500,
    max: 6000
  },
  {
    category: "Skincare",
    name: "Pimple Patch",
    min: 500,
    max: 1800
  },


  /* ================= ACCESSORIES ================= */

  {
    category: "Accessories",
    name: "Bead Bracelet Set",
    min: 3000,
    max: 7000
  },
  {
    category: "Accessories",
    name: "Masculine Chain Bracelet",
    min: 4000,
    max: 9000
  },
  {
    category: "Accessories",
    name: "Chrome Heart Glasses",
    min: 15000,
    max: 20000
  },
  {
    category: "Accessories",
    name: "Glasses",
    min: 5000,
    max: 12000
  },
  {
    category: "Accessories",
    name: "Glasses Set of 3",
    min: 12000,
    max: 18000
  },
  {
    category: "Accessories",
    name: "Glasses Set of 5",
    min: 18000,
    max: 25000
  },
  {
    category: "Accessories",
    name: "Scrunchies",
    min: 1000,
    max: 3000
  },
  {
    category: "Accessories",
    name: "Stanley Cup",
    min: 15000,
    max: 15000,
    colors: ["Pink", "White", "Black", "Cream", "Green"]
  },
  {
    category: "Accessories",
    name: "Body Floral Stanley Cup",
    min: 20000,
    max: 20000,
    colors: ["Pink", "White", "Green", "Blue"]
  },
  {
    category: "Accessories",
    name: "Headband",
    min: 1500,
    max: 3500
  },
  {
    category: "Accessories",
    name: "Tote Bag",
    min: 5000,
    max: 12000
  },
  {
    category: "Accessories",
    name: "Claw Clip",
    min: 1000,
    max: 3000
  },
  {
    category: "Accessories",
    name: "Anklet",
    min: 2500,
    max: 6000
  },
  {
    category: "Accessories",
    name: "Necklace",
    min: 3000,
    max: 8000
  },
  {
    category: "Accessories",
    name: "Silver Bracelet",
    min: 3000,
    max: 8000
  },
  {
    category: "Accessories",
    name: "Gold Bracelet",
    min: 3000,
    max: 8000
  },
  {
    category: "Accessories",
    name: "Vacuum Cups",
    min: 8000,
    max: 16000
  },


  /* ================= CLOTHING ================= */

  {
    category: "Clothing",
    name: "Plain Tops",
    min: 5000,
    max: 9000,
    sizes: ["S", "M", "L"],
    colors: ["Black", "White", "Cream", "Brown", "Grey", "Pink"]
  },
  {
    category: "Clothing",
    name: "Graphic Tops",
    min: 6000,
    max: 12000,
    sizes: ["S", "M", "L"],
    colors: ["Black", "White", "Cream", "Grey"]
  },
  {
    category: "Clothing",
    name: "Tube Tops",
    min: 4500,
    max: 8500,
    sizes: ["S", "M", "L"],
    colors: ["Black", "White", "Pink", "Brown", "Cream"]
  },
  {
    category: "Clothing",
    name: "Jersey Tops",
    min: 7000,
    max: 14000,
    sizes: ["S", "M", "L"],
    colors: ["Black", "White", "Blue", "Red", "Green"]
  },
  {
    category: "Clothing",
    name: "Hoodies",
    min: 10000,
    max: 18000,
    sizes: ["S", "M", "L"],
    colors: ["Black", "White", "Cream", "Grey", "Brown"]
  },
  {
    category: "Clothing",
    name: "Zip-Up Hoodies",
    min: 12000,
    max: 20000,
    sizes: ["S", "M", "L"],
    colors: ["Black", "White", "Cream", "Grey"]
  },
  {
    category: "Clothing",
    name: "Plain Sweatpants",
    min: 9000,
    max: 15000,
    sizes: ["S", "M", "L"],
    colors: ["Black", "White", "Grey", "Brown"]
  },
  {
    category: "Clothing",
    name: "Leopard Sweatpants",
    min: 10000,
    max: 17000,
    sizes: ["S", "M", "L"],
    colors: ["Brown", "Black"]
  },
  {
    category: "Clothing",
    name: "Designer Sweatpants",
    min: 12000,
    max: 22000,
    sizes: ["S", "M", "L"],
    colors: ["Black", "White", "Grey", "Brown"]
  },
  {
    category: "Clothing",
    name: "Shorts",
    min: 5000,
    max: 9000,
    sizes: ["S", "M", "L"],
    colors: ["Black", "White", "Grey", "Brown"]
  },
  {
    category: "Clothing",
    name: "Jean Bum Shorts",
    min: 7000,
    max: 12000,
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Black", "Grey"]
  },
  {
    category: "Clothing",
    name: "Jeans",
    min: 9000,
    max: 16000,
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Black", "Grey"]
  },
  {
    category: "Clothing",
    name: "Designed Jeans",
    min: 12000,
    max: 22000,
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Black", "Grey"]
  },
  {
    category: "Clothing",
    name: "Bootcut Jeans",
    min: 10000,
    max: 18000,
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Black", "Grey"]
  },
  {
    category: "Clothing",
    name: "Jeans Skirt",
    min: 7000,
    max: 13000,
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Black", "Grey"]
  },
  {
    category: "Clothing",
    name: "Pleated Jeans Skirt",
    min: 8000,
    max: 14000,
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Black", "Grey"]
  },
  {
    category: "Clothing",
    name: "Normal Shorts",
    min: 5000,
    max: 9000,
    sizes: ["S", "M", "L"],
    colors: ["Black", "White", "Grey", "Brown"]
  },


  /* ================= SHOES ================= */

  {
    category: "Shoes",
    name: "Shoes",
    min: 15000,
    max: 30000,
    sizes: ["36","37","38","39","40","41","42","43","44","45"],
    colors: ["Black", "White", "Brown", "Cream"]
  },
  {
    category: "Shoes",
    name: "Adidas Sambas",
    min: 30000,
    max: 50000,
    sizes: ["36","37","38","39","40","41","42","43","44","45"],
    colors: ["Black", "White", "Brown"]
  },
  {
    category: "Shoes",
    name: "Adidas Campus",
    min: 30000,
    max: 50000,
    sizes: ["36","37","38","39","40","41","42","43","44","45"],
    colors: ["Black", "White", "Brown", "Green"]
  },
  {
    category: "Shoes",
    name: "Slides",
    min: 8000,
    max: 15000,
    sizes: ["36","37","38","39","40","41","42","43","44","45"],
    colors: ["Black", "White", "Brown", "Cream"]
  },
  {
    category: "Shoes",
    name: "Crocs",
    min: 20000,
    max: 35000,
    sizes: ["36","37","38","39","40","41","42","43","44","45"],
    colors: ["Black", "White", "Cream", "Green", "Pink"]
  },
  {
    category: "Shoes",
    name: "Loafers",
    min: 18000,
    max: 35000,
    sizes: ["36","37","38","39","40","41","42","43","44","45"],
    colors: ["Black", "Brown", "Cream"]
  },
  {
    category: "Shoes",
    name: "Clogs",
    min: 35000,
    max: 70000,
    sizes: ["36","37","38","39","40","41","42","43","44","45"],
    colors: ["Black", "White", "Brown", "Cream"]
  },
  {
    category: "Shoes",
    name: "Timberland",
    min: 35000,
    max: 60000,
    sizes: ["36","37","38","39","40","41","42","43","44","45"],
    colors: ["Brown", "Black"]
  },
  {
    category: "Shoes",
    name: "Vans",
    min: 25000,
    max: 45000,
    sizes: ["36","37","38","39","40","41","42","43","44","45"],
    colors: ["Black", "White", "Brown"]
  },
  {
    category: "Shoes",
    name: "Puma",
    min: 25000,
    max: 45000,
    sizes: ["36","37","38","39","40","41","42","43","44","45"],
    colors: ["Black", "White", "Grey"]
  },


  /* ================= BAGS ================= */

  {
    category: "Bags",
    name: "Hermes Bags",
    min: 50000,
    max: 100000
  },
  {
    category: "Bags",
    name: "Mini Gucci Bags",
    min: 30000,
    max: 70000
  },
  {
    category: "Bags",
    name: "Gucci Bags",
    min: 50000,
    max: 100000
  },
  {
    category: "Bags",
    name: "Prada Bags",
    min: 50000,
    max: 100000
  },
  {
    category: "Bags",
    name: "Dior Bags",
    min: 50000,
    max: 100000
  },
  {
    category: "Bags",
    name: "Chanel Bags",
    min: 60000,
    max: 120000
  },
  {
    category: "Bags",
    name: "Louis Vuitton Bags",
    min: 60000,
    max: 120000
  },
  {
    category: "Bags",
    name: "Cartier Watches",
    min: 50000,
    max: 100000
  },
  {
    category: "Bags",
    name: "Cartier Glasses",
    min: 20000,
    max: 40000
  }

];


/* =========================================================
   CREATE 30 LISTINGS PER PRODUCT
   ========================================================= */

function makePrice(min, max, listing) {
  if (min === max) return min;

  const step = (max - min) / 29;
  const raw = min + (step * (listing - 1));

  return Math.round(raw / 100) * 100;
}

const allProducts = [];

productCatalog.forEach(product => {

  for (let i = 1; i <= 30; i++) {

    allProducts.push({
      id: `${product.name}-${i}`,
      name: product.name,
      listing: i,
      category: product.category,
      price: makePrice(product.min, product.max, i),
      size: product.size || "",
      sizes: product.sizes || [],
      colors: product.colors || [],
      stock: 10
    });

  }

});


/* =========================================================
   HELPERS
   ========================================================= */

function naira(amount) {
  return `₦${Number(amount || 0).toLocaleString("en-NG")}`;
}

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


/* =========================================================
   CART
   ========================================================= */

const CART_KEY = "collectiveCart";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function getCartTotal() {
  return getCart().reduce((total, item) => {
    return total + (Number(item.price) * Number(item.quantity || 1));
  }, 0);
}

function getCartCount() {
  return getCart().reduce((total, item) => {
    return total + Number(item.quantity || 1);
  }, 0);
}


/* =========================================================
   FREE GIFTS
   ========================================================= */

function getSelectedFreeGiftProducts() {

  let selected = [];

  try {
    selected =
      JSON.parse(localStorage.getItem("collectiveSelectedFreeGifts")) ||
      JSON.parse(localStorage.getItem("collectiveFreeGifts")) ||
      [];
  } catch {
    selected = [];
  }

  if (!Array.isArray(selected)) return [];

  return selected.map(gift => {

    if (typeof gift === "string") {
      return allProducts.find(p =>
        p.id === gift ||
        p.name === gift
      );
    }

    if (gift && typeof gift === "object") {

      const found = allProducts.find(p =>
        p.id === gift.id ||
        p.name === gift.name
      );

      if (found) {
        return {
          ...found,
          selectedSize: gift.selectedSize || gift.size || "",
          selectedColor: gift.selectedColor || gift.color || ""
        };
      }
    }

    return null;

  }).filter(Boolean);
}

function saveSelectedFreeGifts(gifts) {
  localStorage.setItem(
    "collectiveSelectedFreeGifts",
    JSON.stringify(gifts)
  );

  localStorage.setItem(
    "collectiveFreeGifts",
    JSON.stringify(gifts)
  );
}

function clearSelectedFreeGifts() {
  localStorage.removeItem("collectiveSelectedFreeGifts");
  localStorage.removeItem("collectiveFreeGifts");
}


/* =========================================================
   CART DISPLAY
   ========================================================= */

function updateCartCount() {

  const count = document.getElementById("cartCount");

  if (count) {
    count.textContent = getCartCount();
  }

}

function renderCart() {

  const container = document.getElementById("cartItems");
  const totalElement = document.getElementById("cartTotal");

  if (!container) return;

  const cart = getCart();
  const gifts = getSelectedFreeGiftProducts();

  container.innerHTML = "";

  if (!cart.length && !gifts.length) {

    container.innerHTML = `
      <div style="
        padding:30px;
        text-align:center;
        color:#777;
      ">
        Your cart is empty.
      </div>
    `;

  } else {

    cart.forEach((item, index) => {

      const variantText = [
        item.selectedSize ? `Size: ${escapeHTML(item.selectedSize)}` : "",
        item.selectedColor ? `Color: ${escapeHTML(item.selectedColor)}` : ""
      ].filter(Boolean).join(" • ");

      const div = document.createElement("div");

      div.className = "cart-item";

      div.innerHTML = `
        <div style="flex:1">
          <strong>${escapeHTML(item.name)}</strong>

          <div style="font-size:12px;color:#777;margin-top:4px;">
            ${variantText}
          </div>

          <div style="margin-top:5px;">
            ${naira(item.price)}
          </div>

          <div style="
            display:flex;
            align-items:center;
            gap:10px;
            margin-top:8px;
          ">
            <button class="cart-minus" data-index="${index}">−</button>
            <span>${item.quantity}</span>
            <button class="cart-plus" data-index="${index}">+</button>
          </div>
        </div>

        <button
          class="cart-remove"
          data-index="${index}"
          style="
            border:0;
            background:none;
            cursor:pointer;
          "
        >
          ✕
        </button>
      `;

      container.appendChild(div);

    });


    gifts.forEach(gift => {

      const div = document.createElement("div");

      div.className = "cart-item free-gift-item";

      div.innerHTML = `
        <div style="flex:1">
          <strong>${escapeHTML(gift.name || "Free Gift")}</strong>

          <div style="
            font-size:12px;
            color:#8c6a4a;
            margin-top:4px;
          ">
            FREE GIFT
          </div>

          ${
            gift.selectedSize
              ? `<div style="font-size:12px;color:#777;">Size: ${escapeHTML(gift.selectedSize)}</div>`
              : ""
          }

          ${
            gift.selectedColor
              ? `<div style="font-size:12px;color:#777;">Color: ${escapeHTML(gift.selectedColor)}</div>`
              : ""
          }

          <div style="
            margin-top:4px;
            text-decoration:line-through;
            color:#aaa;
          ">
            ${naira(gift.price)}
          </div>
        </div>
      `;

      container.appendChild(div);

    });

  }

  if (totalElement) {
    totalElement.textContent = naira(getCartTotal());
  }

  updateCartCount();

}


/* =========================================================
   ADD TO CART
   ========================================================= */

function addToCart(product, selectedSize = "", selectedColor = "") {

  const cart = getCart();

  const existing = cart.find(item =>
    item.id === product.id &&
    (item.selectedSize || "") === (selectedSize || "") &&
    (item.selectedColor || "") === (selectedColor || "")
  );

  if (existing) {

    if (existing.quantity < 10) {
      existing.quantity += 1;
    }

  } else {

    cart.push({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      quantity: 1,
      selectedSize,
      selectedColor
    });

  }

  saveCart(cart);
  renderCart();

  showTinyNotice(`${product.name} added to cart`);

  syncGiftShoppingFlow();

}


/* =========================================================
   PRODUCT GRID
   ========================================================= */

function shuffle(array) {

  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[j]] = [copy[j], copy[i]];

  }

  return copy;
}


function renderProducts(products = allProducts) {

  const grid =
    document.querySelector(".products-grid") ||
    document.getElementById("productsGrid") ||
    document.querySelector(".product-grid");

  if (!grid) return;

  /*
    IMPORTANT:
    Products stay as INDIVIDUAL CARDS in a GRID.
    They are NOT turned into one-line text.
  */

  const displayProducts =
    products.length > 150
      ? shuffle(products).slice(0, 150)
      : products;

  grid.innerHTML = "";

  displayProducts.forEach(product => {

    const card = document.createElement("div");

    card.className = "product-card";

    card.innerHTML = `

      <div class="product-image">
        <div class="product-image-placeholder">
          ${escapeHTML(product.name)}
        </div>
      </div>

      <div class="product-info">

        <div class="product-category">
          ${escapeHTML(product.category)}
        </div>

        <h3 class="product-name">
          ${escapeHTML(product.name)}
        </h3>

        <div class="product-price">
          ${naira(product.price)}
        </div>

        ${
          product.sizes.length
            ? `
              <label class="product-option-label">
                Size
              </label>

              <select class="product-size">
                <option value="">Select size</option>

                ${product.sizes.map(size => `
                  <option value="${escapeHTML(size)}">
                    ${escapeHTML(size)}
                  </option>
                `).join("")}

              </select>
            `
            : product.size
              ? `
                <div class="product-size-static">
                  ${escapeHTML(product.size)}
                </div>
              `
              : ""
        }

        ${
          product.colors.length
            ? `
              <label class="product-option-label">
                Color
              </label>

              <select class="product-color">

                <option value="">
                  Select color
                </option>

                ${product.colors.map(color => `
                  <option value="${escapeHTML(color)}">
                    ${escapeHTML(color)}
                  </option>
                `).join("")}

              </select>
            `
            : ""
        }

        <button
          class="add-to-cart"
          type="button"
        >
          ADD TO CART
        </button>

      </div>
    `;


    const addButton =
      card.querySelector(".add-to-cart");

    const sizeSelect =
      card.querySelector(".product-size");

    const colorSelect =
      card.querySelector(".product-color");


    addButton.addEventListener("click", () => {

      const selectedSize =
        sizeSelect?.value || "";

      const selectedColor =
        colorSelect?.value || "";


      if (product.sizes.length && !selectedSize) {

        showTinyNotice("Please select a size.");

        return;
      }


      if (product.colors.length && !selectedColor) {

        showTinyNotice("Please select a color.");

        return;
      }


      addToCart(
        product,
        selectedSize,
        selectedColor
      );

    });


    grid.appendChild(card);

  });

}


/* =========================================================
   SEARCH
   ========================================================= */

function setupSearch() {

  const search =
    document.getElementById("productSearch");

  if (!search) return;

  search.addEventListener("input", () => {

    const value =
      search.value.trim().toLowerCase();

    const filtered = allProducts.filter(product =>
      product.name.toLowerCase().includes(value) ||
      product.category.toLowerCase().includes(value)
    );

    renderProducts(filtered);

  });

}


/* =========================================================
   CATEGORY FILTER
   ========================================================= */

function setupCategories() {

  const buttons =
    document.querySelectorAll("[data-category]");

  buttons.forEach(button => {

    button.addEventListener("click", () => {

      const category =
        button.dataset.category;

      if (!category || category === "All Products") {

        renderProducts(shuffle(allProducts));

        return;
      }

      const filtered =
        allProducts.filter(
          product => product.category === category
        );

      renderProducts(filtered);

    });

  });

}


/* =========================================================
   CART BUTTON
   ========================================================= */

function setupCart() {

  const cartButton =
    document.getElementById("cartBtn");

  const popup =
    document.getElementById("cartPopup");

  const close =
    document.getElementById("closeCart");

  if (cartButton && popup) {

    cartButton.addEventListener("click", () => {

      renderCart();

      popup.classList.add("active");
      popup.style.display = "flex";

    });

  }

  if (close && popup) {

    close.addEventListener("click", () => {

      popup.classList.remove("active");
      popup.style.display = "";

    });

  }


  document.addEventListener("click", event => {

    const minus =
      event.target.closest(".cart-minus");

    const plus =
      event.target.closest(".cart-plus");

    const remove =
      event.target.closest(".cart-remove");


    if (minus) {

      const index =
        Number(minus.dataset.index);

      const cart = getCart();

      if (cart[index]) {

        cart[index].quantity -= 1;

        if (cart[index].quantity <= 0) {
          cart.splice(index, 1);
        }

        saveCart(cart);
        renderCart();
        syncGiftShoppingFlow();

      }

    }


    if (plus) {

      const index =
        Number(plus.dataset.index);

      const cart = getCart();

      if (cart[index] && cart[index].quantity < 10) {

        cart[index].quantity += 1;

        saveCart(cart);
        renderCart();
        syncGiftShoppingFlow();

      }

    }


    if (remove) {

      const index =
        Number(remove.dataset.index);

      const cart = getCart();

      cart.splice(index, 1);

      saveCart(cart);

      renderCart();

      syncGiftShoppingFlow();

    }

  });

}


/* =========================================================
   POINTS
   ========================================================= */

function getTotalSpent() {
  return Number(
    localStorage.getItem("collectiveTotalSpent") || 0
  );
}

function getPoints() {
  return Number(
    localStorage.getItem("collectivePoints") || 0
  );
}

function addPointsFromPurchase(amount) {

  const earned =
    Math.floor(Number(amount || 0) / 1000);

  if (earned <= 0) return;

  const current = getPoints();

  localStorage.setItem(
    "collectivePoints",
    current + earned
  );

}

function pointsDiscount(points) {

  return Math.min(
    Number(points || 0) * 100,
    20000
  );

}


/* =========================================================
   FREE GIFT LEVEL
   ========================================================= */

function getFreeGiftLevel() {

  const spent = getTotalSpent();

  if (spent >= 100000) {
    return 10;
  }

  if (spent >= 50000) {
    return 5;
  }

  return 0;

}


/* =========================================================
   GIFT PROGRESS
   ========================================================= */

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


function showGiftSpendPopup(count) {

  let popup =
    document.getElementById("giftSpendPopup");

  if (!popup) {

    popup = document.createElement("div");

    popup.id = "giftSpendPopup";

    document.body.appendChild(popup);

  }


  const target =
    count === 10 ? 100000 : 50000;


  popup.innerHTML = `

    <div style="
      background:#fffaf4;
      border-radius:24px;
      padding:28px;
      max-width:420px;
      width:90%;
      text-align:center;
      box-shadow:0 15px 45px rgba(0,0,0,.15);
    ">

      <div style="
        font-size:25px;
        font-weight:700;
        margin-bottom:10px;
      ">
        🎁 Free Gift Shopping
      </div>

      <div style="
        color:#666;
        line-height:1.6;
      ">
        You selected ${count} free gifts.
        Keep shopping until you reach
        <strong>${naira(target)}</strong>.
        Checkout will open automatically.
      </div>

      <button
        id="closeGiftSpendPopup"
        style="
          margin-top:20px;
          padding:11px 22px;
          border:0;
          border-radius:999px;
          cursor:pointer;
        "
      >
        CONTINUE SHOPPING
      </button>

    </div>
  `;


  popup.style.position = "fixed";
  popup.style.inset = "0";
  popup.style.background = "rgba(0,0,0,.35)";
  popup.style.display = "flex";
  popup.style.alignItems = "center";
  popup.style.justifyContent = "center";
  popup.style.zIndex = "99999";


  document
    .getElementById("closeGiftSpendPopup")
    ?.addEventListener("click", () => {
      popup.style.display = "none";
    });


  setTimeout(() => {

    if (popup) {
      popup.style.display = "none";
    }

  }, 5000);

}


function ensureGiftBar() {

  let bar =
    document.getElementById("giftSpendBar");

  if (!bar) {

    bar = document.createElement("div");

    bar.id = "giftSpendBar";

    bar.innerHTML = `
      <div class="gift-bar-inner">

        <div>
          <strong id="giftSpendText">
            Free Gift Progress
          </strong>

          <div
            id="giftSpendSubtext"
            style="
              font-size:12px;
              opacity:.75;
              margin-top:3px;
            "
          >
          </div>
        </div>

        <div class="gift-progress-track">
          <div
            id="giftSpendProgress"
            class="gift-progress-fill"
          ></div>
        </div>

        <div id="giftSpendAmount">
          ₦0
        </div>

      </div>
    `;

    document.body.appendChild(bar);

  }

  return bar;

}


function updateGiftShoppingProgress() {

  const gifts =
    getSelectedFreeGiftProducts();

  const count =
    gifts.length;

  const bar =
    document.getElementById("giftSpendBar");

  if (!bar) return;


  if (count !== 5 && count !== 10) {

    bar.style.display = "none";

    document.body.classList.remove(
      "gift-shopping-active"
    );

    return;

  }


  const target =
    count === 10 ? 100000 : 50000;

  const total =
    getCartTotal();

  const percent =
    Math.min(
      100,
      (total / target) * 100
    );


  bar.style.display = "block";

  document.body.classList.add(
    "gift-shopping-active"
  );


  const text =
    document.getElementById("giftSpendText");

  const subtext =
    document.getElementById("giftSpendSubtext");

  const progress =
    document.getElementById("giftSpendProgress");

  const amount =
    document.getElementById("giftSpendAmount");


  if (text) {

    text.textContent =
      `${count} Free Gifts`;

  }


  if (subtext) {

    subtext.textContent =
      total >= target
        ? "Target reached — checkout opening..."
        : `Spend ${naira(target)} to unlock checkout`;

  }


  if (progress) {

    progress.style.width =
      `${percent}%`;

  }


  if (amount) {

    amount.textContent =
      `${naira(total)} / ${naira(target)}`;

  }

}


/* =========================================================
   GIFT FLOW
   ========================================================= */

let automaticGiftCheckoutStarted = false;


function syncGiftShoppingFlow() {

  const gifts =
    getSelectedFreeGiftProducts();

  const count =
    gifts.length;


  updateGiftShoppingProgress();


  if (count !== 5 && count !== 10) {

    automaticGiftCheckoutStarted = false;

    return;

  }


  const target =
    count === 10 ? 100000 : 50000;

  const total =
    getCartTotal();


  if (total < target) {

    automaticGiftCheckoutStarted = false;

    return;

  }


  if (automaticGiftCheckoutStarted) {
    return;
  }


  automaticGiftCheckoutStarted = true;


  /*
    Hide the bar BEFORE checkout so it
    cannot cover the checkout popup.
  */

  const bar =
    document.getElementById("giftSpendBar");

  if (bar) {
    bar.style.display = "none";
  }

  document.body.classList.remove(
    "gift-shopping-active"
  );


  setTimeout(() => {

    checkout(true);

  }, 350);

}


/* =========================================================
   GIFT OPTIONS
   ========================================================= */

function renderGiftOptions() {

  const container =
    document.getElementById("giftOptions");

  if (!container) return;


  const level =
    getFreeGiftLevel();

  if (!level) {

    container.innerHTML = `
      <p>
        Spend ₦50,000 to unlock 5 free gifts.
      </p>
    `;

    return;

  }


  const giftProducts =
    allProducts.filter(product =>
      product.category === "Accessories" ||
      product.category === "Skincare"
    );


  container.innerHTML = "";


  giftProducts
    .slice(0, 30)
    .forEach(product => {

      const card =
        document.createElement("div");

      card.className = "gift-option";

      card.innerHTML = `

        <label>

          <input
            type="checkbox"
            value="${escapeHTML(product.id)}"
            class="gift-checkbox"
          >

          <span>
            ${escapeHTML(product.name)}
          </span>

        </label>

      `;

      container.appendChild(card);

    });


  container
    .querySelectorAll(".gift-checkbox")
    .forEach(input => {

      input.addEventListener("change", () => {

        const checked =
          [
            ...container.querySelectorAll(
              ".gift-checkbox:checked"
            )
          ];


        if (checked.length > level) {

          input.checked = false;

          showTinyNotice(
            `You can select up to ${level} free gifts.`
          );

          return;

        }


        const selected =
          checked.map(box => {

            const product =
              allProducts.find(
                p => p.id === box.value
              );

            return product
              ? {
                  id: product.id,
                  name: product.name
                }
              : null;

          }).filter(Boolean);


        saveSelectedFreeGifts(selected);

        syncGiftShoppingFlow();

      });

    });

}


/* =========================================================
   GIFT PICKED POPUP
   ========================================================= */

function showGiftPickedPopup() {

  const gifts =
    getSelectedFreeGiftProducts();

  if (gifts.length !== 5 && gifts.length !== 10) {
    return;
  }


  showGiftSpendPopup(gifts.length);

}


/* =========================================================
   CHECKOUT STYLES
   ========================================================= */

function ensureCheckoutStyles() {

  if (document.getElementById(
    "collectiveCheckoutStyles"
  )) return;


  const style =
    document.createElement("style");

  style.id =
    "collectiveCheckoutStyles";


  style.textContent = `

    .collective-modal {
      position:fixed;
      inset:0;
      background:rgba(0,0,0,.4);
      display:flex;
      align-items:center;
      justify-content:center;
      z-index:100000;
      padding:20px;
    }

    .collective-modal-box {
      width:min(520px, 100%);
      max-height:90vh;
      overflow:auto;
      background:#fffaf4;
      border-radius:25px;
      padding:28px;
      box-shadow:0 20px 60px rgba(0,0,0,.2);
    }

    .collective-modal-box h2 {
      margin-top:0;
    }

    .collective-input {
      width:100%;
      box-sizing:border-box;
      padding:13px 15px;
      margin:7px 0;
      border:1px solid #ddd;
      border-radius:12px;
      background:white;
      font:inherit;
    }

    .collective-button {
      width:100%;
      padding:14px;
      border:0;
      border-radius:999px;
      margin-top:12px;
      cursor:pointer;
      font-weight:600;
    }

    .collective-close {
      float:right;
      border:0;
      background:none;
      font-size:22px;
      cursor:pointer;
    }

    .gift-shopping-active {
      padding-bottom:100px !important;
    }

    #giftSpendBar {
      position:fixed;
      left:20px;
      right:20px;
      bottom:20px;
      z-index:9998;
      background:#fffaf4;
      border-radius:20px;
      box-shadow:0 10px 35px rgba(0,0,0,.15);
      padding:15px 20px;
    }

    .gift-bar-inner {
      display:flex;
      align-items:center;
      gap:15px;
    }

    .gift-progress-track {
      flex:1;
      height:10px;
      background:#eee;
      border-radius:20px;
      overflow:hidden;
    }

    .gift-progress-fill {
      height:100%;
      width:0%;
      background:#c9a88a;
      border-radius:20px;
      transition:width .3s ease;
    }

    @media(max-width:600px) {

      #giftSpendBar {
        left:10px;
        right:10px;
        bottom:10px;
      }

      .gift-bar-inner {
        flex-wrap:wrap;
      }

      .gift-progress-track {
        order:3;
        flex-basis:100%;
      }

    }

  `;


  document.head.appendChild(style);

}


/* =========================================================
   LOGIN CHECK
   ========================================================= */

function isLoggedIn() {

  return Boolean(
    localStorage.getItem("collectiveLoggedIn") ||
    localStorage.getItem("collectiveUser") ||
    localStorage.getItem("loggedInUser")
  );

}


/* =========================================================
   CHECKOUT
   ========================================================= */

function checkout(isAutomaticGiftCheckout = false) {

  const cart =
    getCart();

  if (!cart.length) {

    showTinyNotice(
      "Your cart is empty."
    );

    return;

  }


  const gifts =
    getSelectedFreeGiftProducts();


  if (gifts.length > 0) {

    if (
      gifts.length !== 5 &&
      gifts.length !== 10
    ) {

      showTinyNotice(
        "Please select 5 or 10 free gifts."
      );

      return;

    }


    const target =
      gifts.length === 10
        ? 100000
        : 50000;


    if (getCartTotal() < target) {

      showTinyNotice(
        `Keep shopping until you reach ${naira(target)}.`
      );

      return;

    }

  }


  if (!isLoggedIn()) {

    showTinyNotice(
      "Please log in before checking out."
    );

    return;

  }


  const bar =
    document.getElementById("giftSpendBar");

  if (bar) {
    bar.style.display = "none";
  }

  document.body.classList.remove(
    "gift-shopping-active"
  );


  createCheckoutModal(
    isAutomaticGiftCheckout
  );

}


window.checkout = checkout;


/* =========================================================
   CHECKOUT MODAL
   ========================================================= */

function createCheckoutModal(
  isAutomaticGiftCheckout = false
) {

  ensureCheckoutStyles();


  const old =
    document.getElementById(
      "collectiveCheckoutModal"
    );

  if (old) old.remove();


  const cart =
    getCart();

  const gifts =
    getSelectedFreeGiftProducts();


  const total =
    getCartTotal();


  const points =
    getPoints();


  const modal =
    document.createElement("div");

  modal.id =
    "collectiveCheckoutModal";

  modal.className =
    "collective-modal";


  modal.innerHTML = `

    <div class="collective-modal-box">

      <button
        class="collective-close"
        id="closeCollectiveCheckout"
      >
        ✕
      </button>

      <h2>
        Checkout
      </h2>

      ${
        isAutomaticGiftCheckout
          ? `
            <div style="
              padding:12px;
              border-radius:14px;
              background:#f4eadf;
              margin-bottom:15px;
            ">
              🎁 Your free-gift target has been reached.
            </div>
          `
          : ""
      }


      <div style="margin-bottom:15px;">

        <strong>
          Order total:
        </strong>

        <span>
          ${naira(total)}
        </span>

      </div>


      ${
        gifts.length
          ? `
            <div style="
              margin-bottom:15px;
              padding:14px;
              border-radius:15px;
              background:#f7efe6;
            ">

              <strong>
                Free gifts (${gifts.length})
              </strong>

              <div style="
                margin-top:8px;
                font-size:13px;
              ">

                ${gifts.map(gift =>
                  `<div>🎁 ${escapeHTML(gift.name || "Free Gift")}</div>`
                ).join("")}

              </div>

            </div>
          `
          : ""
      }


      <input
        class="collective-input"
        id="checkoutFirstName"
        placeholder="First name"
      >

      <input
        class="collective-input"
        id="checkoutLastName"
        placeholder="Last name"
      >

      <input
        class="collective-input"
        id="checkoutPhone"
        placeholder="Phone number"
        type="tel"
      >

      <input
        class="collective-input"
        id="checkoutAddress"
        placeholder="Delivery address"
      >


      <div style="
        margin-top:15px;
        padding:14px;
        background:#f7efe6;
        border-radius:15px;
      ">

        <strong>
          Points
        </strong>

        <div style="
          font-size:13px;
          margin-top:5px;
        ">
          You have ${points} points.
          Each point is worth ₦100.
        </div>

        ${
          points > 0
            ? `
              <input
                class="collective-input"
                id="checkoutPoints"
                type="number"
                min="0"
                max="${Math.min(points,200)}"
                placeholder="Points to use"
              >
            `
            : ""
        }

      </div>


      <button
        class="collective-button"
        id="continueToPayment"
      >
        CONTINUE TO PAYMENT
      </button>

    </div>
  `;


  document.body.appendChild(modal);


  document
    .getElementById("closeCollectiveCheckout")
    ?.addEventListener("click", () => {
      modal.remove();
    });


  document
    .getElementById("continueToPayment")
    ?.addEventListener("click", () => {

      const firstName =
        document.getElementById(
          "checkoutFirstName"
        )?.value.trim();

      const lastName =
        document.getElementById(
          "checkoutLastName"
        )?.value.trim();

      const phone =
        document.getElementById(
          "checkoutPhone"
        )?.value.trim();

      const address =
        document.getElementById(
          "checkoutAddress"
        )?.value.trim();

      const pointsInput =
        document.getElementById(
          "checkoutPoints"
        );

      let pointsUsed =
        Number(pointsInput?.value || 0);


      if (
        !firstName ||
        !lastName ||
        !phone ||
        !address
      ) {

        showTinyNotice(
          "Please fill in all your details."
        );

        return;

      }


      pointsUsed =
        Math.max(
          0,
          Math.min(
            pointsUsed,
            getPoints(),
            200
          )
        );


      const discount =
        pointsDiscount(pointsUsed);


      const finalTotal =
        Math.max(
          0,
          total - discount
        );


      modal.remove();


      showPaymentModal({
        firstName,
        lastName,
        phone,
        address,
        pointsUsed,
        discount,
        finalTotal,
        gifts
      });

    });

}


/* =========================================================
   PAYMENT
   ========================================================= */

function showPaymentModal(orderData) {

  ensureCheckoutStyles();


  const modal =
    document.createElement("div");

  modal.className =
    "collective-modal";


  modal.innerHTML = `

    <div class="collective-modal-box">

      <button
        class="collective-close"
        id="closePaymentModal"
      >
        ✕
      </button>

      <h2>
        Payment
      </h2>


      <div style="
        padding:15px;
        background:#f7efe6;
        border-radius:15px;
        margin-bottom:15px;
      ">

        <strong>
          Amount to pay
        </strong>

        <div style="
          font-size:25px;
          margin-top:6px;
        ">
          ${naira(orderData.finalTotal)}
        </div>

        ${
          orderData.discount > 0
            ? `
              <div style="
                font-size:13px;
                margin-top:5px;
              ">
                Points discount:
                -${naira(orderData.discount)}
              </div>
            `
            : ""
        }

      </div>


      <div style="
        padding:16px;
        border:1px solid #eee;
        border-radius:15px;
        margin-bottom:12px;
      ">

        <strong>
          GTBank
        </strong>

        <div style="margin-top:8px;">
          Account name:
          <strong>
            ADESANYA EYINJU CAYLA
          </strong>
        </div>

        <div>
          Account number:
          <strong>
            0708648701
          </strong>
        </div>

      </div>


      <div style="
        padding:16px;
        border:1px solid #eee;
        border-radius:15px;
      ">

        <strong>
          SmartCash PSB
        </strong>

        <div style="margin-top:8px;">
          Account name:
          <strong>
            Ololade Adesanya
          </strong>
        </div>

        <div>
          Account number:
          <strong>
            9123930679
          </strong>
        </div>

      </div>


      <button
        class="collective-button"
        id="paymentMadeButton"
      >
        I HAVE MADE PAYMENT
      </button>

    </div>
  `;


  document.body.appendChild(modal);


  document
    .getElementById("closePaymentModal")
    ?.addEventListener("click", () => {

      modal.remove();

      automaticGiftCheckoutStarted = false;

    });


  document
    .getElementById("paymentMadeButton")
    ?.addEventListener("click", async () => {

      const button =
        document.getElementById(
          "paymentMadeButton"
        );

      button.disabled = true;

      button.textContent =
        "SUBMITTING ORDER...";


      try {

        await createPendingOrder(
          orderData
        );

        modal.remove();

        showPaymentChecking();

      } catch (error) {

        console.error(error);

        button.disabled = false;

        button.textContent =
          "I HAVE MADE PAYMENT";

        showTinyNotice(
          "There was a problem submitting your order."
        );

      }

    });

}


/* =========================================================
   CREATE FIREBASE ORDER
   ========================================================= */

async function createPendingOrder(orderData) {

  const cart =
    getCart();

  const gifts =
    getSelectedFreeGiftProducts();


  const originalTotal =
    getCartTotal();


  const qualifyingSpend =
    gifts.length === 10
      ? 100000
      : gifts.length === 5
        ? 50000
        : 0;


  const order = {

    customer: {
      firstName: orderData.firstName,
      lastName: orderData.lastName,
      phone: orderData.phone,
      address: orderData.address
    },

    items: cart.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      selectedSize: item.selectedSize || "",
      selectedColor: item.selectedColor || ""
    })),

    paidItems: cart.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      selectedSize: item.selectedSize || "",
      selectedColor: item.selectedColor || ""
    })),

    freeGifts: gifts.map(gift => ({
      id: gift.id,
      name: gift.name || "Free Gift",
      selectedSize: gift.selectedSize || "",
      selectedColor: gift.selectedColor || "",
      price: 0
    })),

    originalTotal,

    qualifyingSpend,

    pointsUsed:
      orderData.pointsUsed,

    pointsDiscount:
      orderData.discount,

    total:
      orderData.finalTotal,

    status:
      "payment-checking",

    createdAt:
      serverTimestamp()

  };


  const ref =
    await addDoc(
      collection(db, "orders"),
      order
    );


  localStorage.setItem(
    "collectivePendingOrder",
    JSON.stringify({
      id: ref.id,
      ...order
    })
  );


  localStorage.setItem(
    "collectiveLastOrderId",
    ref.id
  );

}


/* =========================================================
   PAYMENT CHECKING
   ========================================================= */

function showPaymentChecking() {

  ensureCheckoutStyles();


  const modal =
    document.createElement("div");

  modal.className =
    "collective-modal";


  modal.innerHTML = `

    <div class="collective-modal-box"
      style="text-align:center;">

      <div style="
        font-size:40px;
        margin-bottom:10px;
      ">
        ✓
      </div>

      <h2>
        Order Submitted
      </h2>

      <p style="
        line-height:1.6;
        color:#666;
      ">
        Your payment is being checked.
        Your order will be updated once it
        has been reviewed.
      </p>

      <button
        class="collective-button"
        id="closeChecking"
      >
        DONE
      </button>

    </div>
  `;


  document.body.appendChild(modal);


  document
    .getElementById("closeChecking")
    ?.addEventListener("click", () => {
      modal.remove();
    });

}


/* =========================================================
   ORDER STATUS
   ========================================================= */

async function checkPendingOrder() {

  const pendingRaw =
    localStorage.getItem(
      "collectivePendingOrder"
    );

  if (!pendingRaw) return;


  let pending;

  try {
    pending = JSON.parse(pendingRaw);
  } catch {
    return;
  }


  if (!pending?.id) return;


  try {

    const snapshot =
      await getDocs(
        collection(db, "orders")
      );


    let currentOrder = null;


    snapshot.forEach(item => {

      if (item.id === pending.id) {

        currentOrder = {
          id: item.id,
          ...item.data()
        };

      }

    });


    if (!currentOrder) return;


    const previousStatus =
      pending.status;


    const newStatus =
      currentOrder.status;


    localStorage.setItem(
      "collectivePendingOrder",
      JSON.stringify(currentOrder)
    );


    if (
      (
        newStatus === "approved" ||
        newStatus === "delivered"
      ) &&
      previousStatus !== "approved" &&
      previousStatus !== "delivered"
    ) {

      const finalTotal =
        Number(currentOrder.total || 0);


      const previousSpent =
        getTotalSpent();


      localStorage.setItem(
        "collectiveTotalSpent",
        previousSpent + finalTotal
      );


      addPointsFromPurchase(
        finalTotal
      );


      if (
        Number(currentOrder.pointsUsed || 0) > 0
      ) {

        const remaining =
          Math.max(
            0,
            getPoints() -
            Number(currentOrder.pointsUsed)
          );


        localStorage.setItem(
          "collectivePoints",
          remaining
        );

      }


      localStorage.removeItem(
        "collectivePendingOrder"
      );


      localStorage.removeItem(
        "collectiveLastOrderId"
      );


      clearSelectedFreeGifts();

      saveCart([]);

      automaticGiftCheckoutStarted = false;

      syncGiftShoppingFlow();

      renderCart();

    }

  } catch (error) {

    console.log(
      "Order status check:",
      error
    );

  }

}


/* =========================================================
   TINY NOTICE
   ========================================================= */

function showTinyNotice(message) {

  let notice =
    document.getElementById(
      "collectiveTinyNotice"
    );


  if (!notice) {

    notice =
      document.createElement("div");

    notice.id =
      "collectiveTinyNotice";

    notice.style.position =
      "fixed";

    notice.style.bottom =
      "30px";

    notice.style.left =
      "50%";

    notice.style.transform =
      "translateX(-50%)";

    notice.style.zIndex =
      "100001";

    notice.style.background =
      "#fffaf4";

    notice.style.padding =
      "13px 20px";

    notice.style.borderRadius =
      "999px";

    notice.style.boxShadow =
      "0 8px 30px rgba(0,0,0,.15)";

    notice.style.fontSize =
      "14px";

    document.body.appendChild(
      notice
    );

  }


  notice.textContent =
    message;


  notice.style.display =
    "block";


  clearTimeout(
    notice._timeout
  );


  notice._timeout =
    setTimeout(() => {

      notice.style.display =
        "none";

    }, 2500);

}


/* =========================================================
   PROFILE POINTS
   ========================================================= */

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


/* =========================================================
   REWARD DISPLAY
   ========================================================= */

function updateRewardDisplay() {

  const spent =
    getTotalSpent();


  const gift1 =
    document.getElementById(
      "giftReward1"
    );


  const gift2 =
    document.getElementById(
      "giftReward2"
    );


  if (gift1) {

    gift1.innerHTML =
      spent >= 50000
        ? "✓ UNLOCKED"
        : "NOT UNLOCKED";

  }


  if (gift2) {

    gift2.innerHTML =
      spent >= 100000
        ? "✓ UNLOCKED"
        : "NOT UNLOCKED";

  }

}


/* =========================================================
   PROFILE FREE ITEMS
   ========================================================= */

function updateProfileFreeItems() {

  const container =
    document.getElementById(
      "profileFreeItems"
    );


  if (!container) return;


  const level =
    getFreeGiftLevel();


  if (!level) {

    container.innerHTML = `
      <div>
        No free items unlocked yet.
      </div>
    `;

    return;

  }


  container.innerHTML = `

    <div>
      🎁 ${level} free gift${level === 1 ? "" : "s"} unlocked
    </div>

  `;

}


/* =========================================================
   LOGOUT
   ========================================================= */

function setupLogout() {

  const buttons =
    document.querySelectorAll(
      "#logoutBtn, .logout-btn"
    );


  buttons.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        localStorage.removeItem(
          "collectiveLoggedIn"
        );

        localStorage.removeItem(
          "collectiveUser"
        );

        localStorage.removeItem(
          "loggedInUser"
        );

        window.location.href =
          "login.html";

      }
    );

  });

}


/* =========================================================
   GIFT BAR SAFETY CHECK
   ========================================================= */

function keepGiftBarCorrect() {

  const gifts =
    getSelectedFreeGiftProducts();


  const bar =
    document.getElementById(
      "giftSpendBar"
    );


  if (!bar) return;


  if (
    gifts.length !== 5 &&
    gifts.length !== 10
  ) {

    bar.style.display =
      "none";

    document.body.classList.remove(
      "gift-shopping-active"
    );

  }

}


/* =========================================================
   INITIALIZE
   ========================================================= */

function initializeCollective() {

  ensureCheckoutStyles();

  renderProducts(
    shuffle(allProducts)
  );

  renderCart();

  renderGiftOptions();

  updatePointsDisplay();

  updateRewardDisplay();

  updateProfileFreeItems();

  setupSearch();

  setupCategories();

  setupCart();

  setupLogout();

  syncGiftShoppingFlow();

  keepGiftBarCorrect();

}


/* =========================================================
   START
   ========================================================= */

if (
  document.readyState === "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initializeCollective
  );

} else {

  initializeCollective();

}


/* =========================================================
   KEEP EVERYTHING SYNCED
   ========================================================= */

setInterval(() => {

  updateCartCount();

  syncGiftShoppingFlow();

  keepGiftBarCorrect();

  checkPendingOrder();

}, 1000);


/* =========================================================
   STORAGE SYNC
   ========================================================= */

window.addEventListener(
  "storage",
  () => {

    renderCart();

    updatePointsDisplay();

    updateRewardDisplay();

    updateProfileFreeItems();

    syncGiftShoppingFlow();

  }
);
