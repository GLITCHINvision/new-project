// Cake database
const cakes = [
  { name: "Coco Cloud Bliss", description: "Coconut-flavored creamy delight", price: 499, img: "cakes/images.jpg" },
  { name: "Red Velvet", description: "Classic red velvet with creamy frosting", price: 549, img: "cakes/download.jpg" },
  { name: "Fruit Fantasy", description: "Fresh seasonal fruits on sponge cake", price: 579, img: "cakes/download2.jpg" },
  { name: "Minty Calm Crunch", description: "Mint and chocolate layered cake", price: 529, img: "cakes/download 6.jpg" },
  { name: "Butterscotch Magic", description: "Butterscotch cream with caramel crunch", price: 489, img: "cakes/download7.jpg" },
  { name: "Blueberry Lemon Glow", description: "Blueberry lemon fusion", price: 569, img: "cakes/download 8.jpg" },
  { name: "Strawberry Mylk Rush", description: "Strawberry-flavored cake with whipped cream", price: 599, img: "cakes/download 4.jpg" }
];

function searchCakes() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const resultsContainer = document.getElementById("search-results");
  resultsContainer.innerHTML = "";

  const results = cakes.filter(cake =>
    cake.name.toLowerCase().includes(query) ||
    cake.description.toLowerCase().includes(query)
  );

  if (results.length === 0) {
    
    resultsContainer.innerHTML = `
      <p>No exact match found. But here's something delicious we recommend:</p>
      <div class="suggested">
        <img src="${cakes[0].img}" alt="${cakes[0].name}" />
        <h3>${cakes[0].name}</h3>
        <p>${cakes[0].description}</p>
        <p>₹${cakes[0].price}</p>
      </div>
    `;
  } else {
    
    results.forEach(cake => {
      const cakeDiv = document.createElement("div");
      cakeDiv.className = "cake-card";
      cakeDiv.innerHTML = `
        <img src="${cake.img}" alt="${cake.name}" />
        <h3>${cake.name}</h3>
        <p>${cake.description}</p>
        <p>₹${cake.price}</p>
        <button>Add to Cart</button>
      `;
      resultsContainer.appendChild(cakeDiv);
    });
  }
}
