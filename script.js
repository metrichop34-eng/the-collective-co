<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>THE COLLECTIVE.CO - Admin Dashboard</title>
    <link rel="stylesheet" href="style.css">
    <style>
        .admin-container {
            max-width: 900px;
            margin: 50px auto;
            padding: 0 20px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            text-align: left;
        }
        .admin-card {
            background: #FFFDF8;
            border: 1px solid #DCEFF2;
            border-radius: 20px;
            padding: 30px;
            box-sizing: border-box;
        }
        .admin-card h2 {
            color: #304B52;
            margin-top: 0;
            margin-bottom: 20px;
            font-size: 22px;
        }
        .form-group {
            margin-bottom: 15px;
        }
        label {
            display: block;
            font-size: 13px;
            color: #6F858A;
            margin-bottom: 5px;
            font-weight: bold;
        }
        input, select {
            width: 100%;
            padding: 12px;
            border: 1px solid #A8C9CE;
            border-radius: 10px;
            background-color: #FFFDF8;
            color: #304B52;
            box-sizing: border-box;
            outline: none;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
        }
        th, td {
            padding: 10px;
            border-bottom: 1px solid #DCEFF2;
            color: #304B52;
        }
        th {
            background: #E8F1F2;
        }
    </style>
</head>
<body>

    <nav>
        <a href="shop.html">View Live Shop</a>
    </nav>

    <div class="admin-container">
        <!-- Add Product Form -->
        <div class="admin-card">
            <h2>Add New Product</h2>
            <form id="productForm">
                <div class="form-group">
                    <label for="productName">Product Name</label>
                    <input type="text" id="productName" required placeholder="e.g. Leather Bag">
                </div>

                <div class="form-group">
                    <label for="productPrice">Price (₦)</label>
                    <input type="number" id="productPrice" required placeholder="e.g. 25000">
                </div>

                <div class="form-group">
                    <label for="category">Category</label>
                    <select id="category" required>
                        <option value="">Select Category</option>
                        <option value="skincare">Skincare</option>
                        <option value="accesories">Accessories</option>
                        <option value="clothing">Clothing</option>
                        <option value="shoes">Shoes</option>
                        <option value="bags">Bags</option>
                        <option value="others">Others</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="productImage">Product Image</label>
                    <input type="file" id="productImage" accept="image/*" required>
                </div>

                <!-- SAVE BUTTON -->
                <button id="submitBtn" type="submit" style="display: block !important; width: 100% !important; padding: 14px !important; background-color: #304B52 !important; color: #FFFDF8 !important; border: none !important; border-radius: 25px !important; font-size: 15px !important; font-weight: bold !important; cursor: pointer !important; margin-top: 20px !important;">
                    Save Product
                </button>
            </form>
        </div>

        <!-- Inventory Table -->
        <div class="admin-card">
            <h2>Live Inventory</h2>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="adminProductTable">
                    <tr><td colspan="4" style="text-align: center;">Loading...</td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
        import { 
            getFirestore, 
            collection, 
            addDoc, 
            getDocs, 
            deleteDoc, 
            doc, 
            query, 
            where, 
            updateDoc, 
            setDoc 
        } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
        import { 
            getStorage, 
            ref, 
            uploadBytes, 
            getDownloadURL 
        } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

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
        const storage = getStorage(app);

        const firebaseDB = {
            db,
            storage,
            collection,
            addDoc,
            getDocs,
            query,
            where,
            updateDoc,
            setDoc,
            doc,
            ref,
            uploadBytes,
            getDownloadURL
        };

        const productForm = document.getElementById("productForm");
        const adminProductTable = document.getElementById("adminProductTable");
        const submitBtn = document.getElementById("submitBtn");

        /* ========================= ADMIN INVENTORY ========================= */

        async function loadAdminInventory() {
            try {
                const querySnapshot = await getDocs(collection(db, "products"));
                adminProductTable.innerHTML = "";
                if (querySnapshot.empty) {
                    adminProductTable.innerHTML = `<tr><td colspan="4" style="text-align: center;">No products found.</td></tr>`;
                    return;
                }
                querySnapshot.forEach((docSnapshot) => {
                    const product = docSnapshot.data();
                    const imgUrl = product.imageUrl || product.image || '';
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${imgUrl ? `<img src="${imgUrl}" style="width:40px; height:40px; object-fit:cover; border-radius:6px;">` : '🛍️'}</td>
                        <td>${product.name || product.listing || 'Unnamed'}</td>
                        <td>₦${Number(product.price || 0).toLocaleString()}</td>
                        <td><button class="btn-delete" data-id="${docSnapshot.id}" style="background:#dc3545; color:white; border:none; padding:5px 10px; border-radius:5px; cursor:pointer;">Delete</button></td>
                    `;
                    adminProductTable.appendChild(row);
                });

                document.querySelectorAll(".btn-delete").forEach(btn => {
                    btn.addEventListener("click", async (e) => {
                        const id = e.target.getAttribute("data-id");
                        if (confirm("Delete this product?")) {
                            await deleteDoc(doc(db, "products", id));
                            loadAdminInventory();
                        }
                    });
                });
            } catch (err) {
                console.error(err);
            }
        }

        productForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const name = document.getElementById("productName").value.trim();
            const price = Number(document.getElementById("productPrice").value);
            const category = document.getElementById("category").value;
            const fileInput = document.getElementById("productImage");
            const file = fileInput.files[0];

            if (!file) {
                alert("Please select an image file.");
                return;
            }

            try {
                submitBtn.disabled = true;
                submitBtn.textContent = "Uploading Image & Saving...";

                // Upload image to Firebase Storage
                const storageRef = ref(storage, `products/${Date.now()}_${file.name}`);
                const snapshot = await uploadBytes(storageRef, file);
                const downloadURL = await getDownloadURL(snapshot.ref);

                // Save product to Firestore
                await addDoc(collection(db, "products"), {
                    name: name,
                    listing: name,
                    price: price,
                    category: category,
                    imageUrl: downloadURL,
                    image: downloadURL,
                    createdAt: new Date()
                });

                alert("Product added successfully!");
                productForm.reset();
                loadAdminInventory();
            } catch (error) {
                alert("Error: " + error.message);
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = "Save Product";
            }
        });

        loadAdminInventory();

        /* ========================= SHOP / CART SYSTEM ========================= */

        const CART_KEY = "collectiveCart";
        const ORDER_KEY = "collectiveCurrentOrder";
        const ORDER_NUMBER_KEY = "collectiveCurrentOrderNumber";

        function getCart() {
            try {
                const cart = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
                return Array.isArray(cart) ? cart : [];
            } catch {
                return [];
            }
        }

        function getCartTotal() {
            return getCart().reduce((total, item) => {
                return total + Number(item.price || 0) * Number(item.quantity || 1);
            }, 0);
        }

        function generateOrderNumber() {
            const now = new Date();
            const date = now.getFullYear().toString().slice(-2) +
                String(now.getMonth() + 1).padStart(2, "0") +
                String(now.getDate()).padStart(2, "0");
            const random = Math.floor(100000 + Math.random() * 900000);
            return `TC-${date}-${random}`;
        }

        function showSmallMessage(message) {
            const old = document.getElementById("collectiveSmallMessage");
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
                if (box.parentNode) box.remove();
            }, 2200);
        }

        /* ========================= CHECKOUT MODAL ========================= */

        function createCheckoutModal() {
            const old = document.getElementById("collectiveCheckoutModal");
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
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <h2 style="color:#304B52;">Checkout</h2>
                        <button id="closeCheckoutModal" type="button" style="border:none; background:none; color:#304B52; font-size:30px; cursor:pointer;">×</button>
                    </div>

                    <div style="margin-top:20px;">
                        <h3 style="color:#304B52; margin-bottom:15px;">Delivery information</h3>

                        <label style="display:block; color:#71858A; font-size:12px; font-weight:bold; margin-bottom:6px;">FULL NAME</label>
                        <input id="checkoutFullName" type="text" placeholder="Enter your full name" style="width:100%; padding:13px; border:1px solid #E6E1D8; border-radius:12px; background:#F7F4EE; color:#304B52; outline:none; margin-bottom:15px; box-sizing:border-box;">

                        <label style="display:block; color:#71858A; font-size:12px; font-weight:bold; margin-bottom:6px;">PHONE NUMBER</label>
                        <input id="checkoutPhone" type="tel" placeholder="Enter your phone number" style="width:100%; padding:13px; border:1px solid #E6E1D8; border-radius:12px; background:#F7F4EE; color:#304B52; outline:none; margin-bottom:15px; box-sizing:border-box;">

                        <label style="display:block; color:#71858A; font-size:12px; font-weight:bold; margin-bottom:6px;">DELIVERY ADDRESS</label>
                        <textarea id="checkoutAddress" placeholder="Enter the address where your order should be delivered" style="width:100%; min-height:100px; padding:13px; border:1px solid #E6E1D8; border-radius:12px; background:#F7F4EE; color:#304B52; outline:none; margin-bottom:22px; box-sizing:border-box; resize:vertical;"></textarea>

                        <h3 style="color:#304B52; margin-bottom:15px;">Your order</h3>

                        ${cart.map(item => `
                            <div style="display:flex; justify-content:space-between; gap:15px; padding:12px 0; border-bottom:1px solid #E8F1F2; color:#304B52;">
                                <span>
                                    ${item.name} × ${item.quantity || 1}
                                    ${item.size ? ` • Size: ${item.size}` : ""}
                                    ${item.color ? ` • ${item.color}` : ""}
                                </span>
                                <strong>₦${(Number(item.price || 0) * Number(item.quantity || 1)).toLocaleString()}</strong>
                            </div>
                        `).join("")}

                        <div style="margin-top:25px; padding-top:20px; border-top:1px solid #DCEFF2; color:#304B52;">
                            <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                                <span>Subtotal</span>
                                <strong>₦${paidTotal.toLocaleString()}</strong>
                            </div>
                            <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                                <span>Delivery</span>
                                <strong>₦${shippingFee.toLocaleString()}</strong>
                            </div>
                            <div style="display:flex; justify-content:space-between; font-size:19px; margin-top:15px;">
                                <strong>Total</strong>
                                <strong>₦${finalTotal.toLocaleString()}</strong>
                            </div>
                        </div>

                        <p id="checkoutValidation" style="display:none; color:#B23A48; font-size:13px; margin-top:15px;"></p>

                        <button id="continueToPayment" type="button" style="width:100%; margin-top:20px; padding:15px; border:none; border-radius:25px; background:#304B52; color:white; font-weight:bold; cursor:pointer;">
                            CONTINUE TO PAYMENT
                        </button>
                    </div>
                </div>
            `;

            document.body.appendChild(modal);

            document.getElementById("closeCheckoutModal")?.addEventListener("click", () => modal.remove());

            document.getElementById("continueToPayment")?.addEventListener("click", () => {
                const fullName = document.getElementById("checkoutFullName").value.trim();
                const phone = document.getElementById("checkoutPhone").value.trim();
                const address = document.getElementById("checkoutAddress").value.trim();
                const validation = document.getElementById("checkoutValidation");

                if (!fullName || !phone || !address) {
                    validation.textContent = "Please fill in your full name, phone number and delivery address.";
                    validation.style.display = "block";
                    return;
                }

                localStorage.setItem("collectiveCheckoutCustomer", JSON.stringify({ fullName, phone, address }));
                localStorage.setItem("collectiveCheckoutShippingFee", String(shippingFee));

                modal.remove();
                showPaymentModal();
            });
        }

        /* ========================= PAYMENT MODAL ========================= */

        function showPaymentModal() {
            const old = document.getElementById("collectivePaymentModal");
            if (old) old.remove();

            const modal = document.createElement("div");
            modal.id = "collectivePaymentModal";

            const total = getCartTotal();
            const shippingFee = Number(localStorage.getItem("collectiveCheckoutShippingFee") || "0");
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
                <div style="width:min(550px,100%); max-height:90vh; overflow-y:auto; background:#FFFDF8; border-radius:25px; padding:32px; box-sizing:border-box; box-shadow:0 18px 50px rgba(0,0,0,.2);">
                    <h2 style="color:#304B52;">Payment</h2>
                    <p style="color:#6F858A;">Amount to pay: <strong style="color:#304B52;">₦${finalTotal.toLocaleString()}</strong></p>

                    <div style="background:#E8F1F2; border-radius:18px; padding:20px; margin:20px 0; color:#304B52; line-height:1.8;">
                        <strong>OPAY</strong><br>
                        Account Name: <strong>EYINJUOUWA CAYLA ADESANYA</strong><br>
                        Account Number: <strong>9123930679</strong>
                    </div>

                    <p style="color:#6F858A; font-size:13px; line-height:1.6;">
                        After making your payment, click the button below so your order can be sent for approval.
                    </p>

                    <button id="paymentMadeButton" type="button" style="width:100%; padding:15px; border:none; border-radius:25px; background:#304B52; color:white; font-weight:bold; cursor:pointer;">
                        I HAVE MADE PAYMENT
                    </button>

                    <button id="cancelPaymentButton" type="button" style="width:100%; margin-top:10px; padding:13px; border:1px solid #304B52; border-radius:25px; background:transparent; color:#304B52; cursor:pointer;">
                        CANCEL
                    </button>
                </div>
            `;

            document.body.appendChild(modal);

            document.getElementById("cancelPaymentButton")?.addEventListener("click", () => modal.remove());

            document.getElementById("paymentMadeButton")?.addEventListener("click", async () => {
                const button = document.getElementById("paymentMadeButton");
                if (!button) return;

                button.disabled = true;
                button.textContent = "SUBMITTING ORDER...";

                const success = await createPendingOrder();

                if (success) {
                    modal.remove();
                    showSmallMessage("Order submitted successfully.");
                } else {
                    button.disabled = false;
                    button.textContent = "I HAVE MADE PAYMENT";
                    alert("The order could not be submitted. Please try again.");
                }
            });
        }

        /* ========================= CREATE ORDER ========================= */

        async function createPendingOrder() {
            const cart = getCart();
            const subtotal = getCartTotal();
            const shippingFee = Number(localStorage.getItem("collectiveCheckoutShippingFee") || "0");
            const total = subtotal + shippingFee;

            let checkoutCustomer = {};
            try {
                checkoutCustomer = JSON.parse(localStorage.getItem("collectiveCheckoutCustomer") || "{}");
            } catch {
                checkoutCustomer = {};
            }

            const storedUser = localStorage.getItem("collectiveUser") || localStorage.getItem("user") || "";
            const fullName = checkoutCustomer.fullName || storedUser || "Customer";
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
                    name: item.name || item.listing || "Product",
                    listing: item.listing || item.name || "",
                    category: item.category || "",
                    quantity,
                    unitPrice,
                    price: unitPrice,
                    size: item.size || "",
                    color: item.color || "",
                    lineTotal: unitPrice * quantity
                };
            });

            const customer = { fullName, firstName, lastName, phone, address };

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
                shipping: { fee: shippingFee, address, status: "processing" },
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

            localStorage.setItem(ORDER_NUMBER_KEY, orderNumber);
            localStorage.setItem(ORDER_KEY, JSON.stringify(order));

            try {
                const orderRef = await addDoc(collection(db, "orders"), order);
                localStorage.setItem("collectiveFirebaseOrderId", orderRef.id);
                localStorage.removeItem(CART_KEY);
                localStorage.removeItem("collectiveCheckoutCustomer");
                localStorage.removeItem("collectiveCheckoutShippingFee");
                return true;
            } catch (error) {
                console.error("Could not save order:", error);
                localStorage.setItem("collectivePendingOrder", JSON.stringify(order));
                return false;
            }
        }
    </script>
</body>
</html>
