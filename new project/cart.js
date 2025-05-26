
const cartItems = [
  {
    name: "Red Velvet Cake",
    price: 549,
    qty: 1,
    img: "cakes/download.jpg"
  },
  {
    name: "Fruit Fantasy",
    price: 579,
    qty: 1,
    img: "cakes/download2.jpg"
  }
];

const cartItemsContainer = document.getElementById("cart-items");
const subtotalEl = document.getElementById("subtotal");
const gstEl = document.getElementById("gst");
const totalEl = document.getElementById("total");

function updateCart() {
  cartItemsContainer.innerHTML = "";

  let subtotal = 0;
  cartItems.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="item-info">
        <h3>${item.name}</h3>
        <p>₹${item.price} × 
          <input type="number" min="1" value="${item.qty}" class="qty-input" data-index="${index}" />
        </p>
      </div>
      <div class="item-total">₹${itemTotal}</div>
    `;
    cartItemsContainer.appendChild(cartItem);
  });

  const gst = +(subtotal * 0.18).toFixed(2);
  const total = +(subtotal + gst).toFixed(2);

  subtotalEl.textContent = subtotal;
  gstEl.textContent = gst;
  totalEl.textContent = total;

 
  document.querySelectorAll(".qty-input").forEach(input => {
    input.addEventListener("change", (e) => {
      const i = e.target.dataset.index;
      cartItems[i].qty = parseInt(e.target.value);
      updateCart();
    });
  });
}

updateCart();
cartItems.push({
  name: "Coco Cloud Bliss",
  price: 499,
  qty: 1,
  img: "cakes/images.jpg"
});
updateCart();
