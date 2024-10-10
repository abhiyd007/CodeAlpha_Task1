let cart = [];

async function fetchProducts() {
  const response = await fetch('http://localhost:3000/api/products');
  const products = await response.json();

  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart('${product._id}', '${product.name}', ${product.price})">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
  });
}

function addToCart(productId, productName, price) {
  cart.push({ productId, productName, price });
  displayCart();
}

function displayCart() {
  const cartDiv = document.getElementById('cart');
  cartDiv.innerHTML = '';

  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    cartDiv.innerHTML += `
      <p>${item.productName} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button></p>
    `;
  });

  cartDiv.innerHTML += `<p>Total: $${total}</p>`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  displayCart();
}

async function checkout() {
  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
  const products = cart.map(item => ({ productId: item.productId, quantity: 1 }));

  const order = {
    products,
    totalAmount,
    customerEmail: 'customer@example.com' // For simplicity
  };

  const response = await fetch('http://localhost:3000/api/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
  });

  if (response.ok) {
    alert('Order placed successfully!');
    cart = [];
    displayCart();
  } else {
    alert('Failed to place order.');
  }
}

document.getElementById('checkout').addEventListener('click', checkout);

// Fetch products on page load
fetchProducts();
