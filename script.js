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
    { name: "Shoes", category: "Shoes", min: 15000, max: 
