
const discoverBtn = document.getElementById("discover-btn");
const modal = document.getElementById("cakeModal");
const closeBtn = document.getElementById("closeBtn");
const form = document.getElementById("cakeForm");


discoverBtn.onclick = () => {
  modal.style.display = "flex";
};


closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};


form.onsubmit = (e) => {
  e.preventDefault();

  const base = document.getElementById("base").value;
  const frosting = document.getElementById("frosting").value;
  const topping = document.getElementById("topping").value;
  const note = document.getElementById("note").value;


  alert(`🎉 Cake added to cart!\n🍰 Base: ${base}\n🍫 Frosting: ${frosting}\n🍒 Topping: ${topping}\n📝 Note: ${note || 'No note added'}`);


  modal.style.display = "none";


  form.reset();
};
