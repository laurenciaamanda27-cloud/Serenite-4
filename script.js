
// Buat array produk dummy (200 item)
const products = [];

for (let i = 1; i <= 200; i++) {
  products.push({
    id: i,
    name: "Product " + i,
    price: (Math.random() * 200 + 20).toFixed(2), // harga random $20–$220
    image: `./assets/Dress/dress${i}.jpg`

  });
}

// Ambil container produk
const productGrid = document.getElementById("products-grid");

// Render semua produk
products.forEach(product => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");
  
  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
    <button>Add to Cart</button>
  `;
  
  productGrid.appendChild(productCard);
});

function goToCategory(category) {
  window.location.href = `products.html?cat=${category}`;
}

// Buka modal detail produk
function showProductDetail(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    document.getElementById("detail-image").src = product.image;
    document.getElementById("detail-image").alt = product.alt;
    document.getElementById("detail-name").textContent = product.name;
    document.getElementById("detail-price").textContent = `$${product.price}`;
    document.getElementById("detail-description").textContent = product.alt; // pakai alt sebagai deskripsi sementara

    // Set tombol "Add to Cart"
    const btn = document.getElementById("detail-add-to-cart");
    btn.setAttribute("onclick", `addToCart(${product.id})`);

    document.getElementById("product-detail-modal").style.display = "block";
}

// Tutup modal detail produk
function closeProductDetail() {
    document.getElementById("product-detail-modal").style.display = "none";
}
