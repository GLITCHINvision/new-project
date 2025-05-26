


document.getElementById("chat-send").addEventListener("click", sendMessage);
document.getElementById("chat-toggle").addEventListener("click", () => {
  const bot = document.getElementById("chatbot");
  bot.style.display = bot.style.display === "flex" ? "none" : "flex";
});

function sendMessage() {
  const input = document.getElementById("chat-input");
  const msg = input.value.trim();
  if (msg === "") return;

  displayMessage(msg, "user");
  input.value = "";

  setTimeout(() => {
    const reply = respond(msg.toLowerCase());

    displayMessage(reply, "bot");
  }, 500);
}

function displayMessage(message, type) {
  const msgDiv = document.createElement("div");
  msgDiv.className = type + "-msg";
  msgDiv.textContent = message;
  document.getElementById("chat-body").appendChild(msgDiv);
  document.getElementById("chat-body").scrollTop = document.getElementById("chat-body").scrollHeight;
}

function respond(msg) {
  let response = "I'm sorry, I didn't understand that. Can you rephrase it?";

  if (msg.includes("hi") || msg.includes("hello")) {
    response = "Hi there! 👋 Ask me anything about our vegan cakes 🍰🌱";
  } else if (msg.includes("vegan cake")) {
    response = "A vegan cake is made without any animal products like eggs, milk, or butter. We use plant-based alternatives that are just as delicious!";
  } else if (msg.includes("dairy")) {
    response = "Yes! All our vegan cakes are completely dairy-free and 100% plant-based.";
  } else if (msg.includes("eggless")) {
    response = "Absolutely! All our cakes are eggless — perfect for vegetarians, vegans, and people with egg allergies.";
  } else if (msg.includes("allergy") || msg.includes("allergies")) {
    response = "We offer nut-free and gluten-free options! Just let us know your allergies while ordering. 🍃";
  } else if (msg.includes("taste") || msg.includes("good")) {
    response = "Our customers love the taste — rich, moist, and flavorful! You won't even miss the dairy. ❤️";
  } else if (msg.includes("order")) {
    response = "You can visit our menu page and click 'Add to Cart' or message us directly for custom orders.";
  } else if (msg.includes("deliver")) {
    response = "Yes, we deliver across Delhi NCR with fast and fresh delivery. 🚚🍰";
  } else if (msg.includes("bestseller") || msg.includes("popular")) {
    response = "Our most loved cakes are: Vegan Chocolate Truffle, Red Velvet, and Mango Cream Delight!";
  } else if (msg.includes("advance")) {
    response = "We recommend ordering at least 1 day in advance. For custom cakes, 2–3 days is ideal.";
  } else if (msg.includes("customize") || msg.includes("custom")) {
    response = "Of course! You can customize size, flavor, frosting, and decoration. Just drop us a message. 🎂✨";
  } else if (msg.includes("birthday")) {
    response = "Yes! We have special birthday designs, name writing, candles, and theme cakes available.";
  } else if (msg.includes("healthy")) {
    response = "Our cakes are healthier than regular ones — no cholesterol, no animal fats, and made with clean, plant-based ingredients!";
  }

  return response;
}


// const API_URL = "http://localhost:3000/chat";

// async function sendMessage() {
//   const input = document.getElementById("userInput");
//   const message = input.value.trim();
//   if (!message) return;

//   addToChatLog("You", message);
//   input.value = "";

//   try {
//     const response = await fetch(API_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ message })
//     });

//     const data = await response.json();
//     console.log("Frontend received:", data); // 👈 This helps us debug
//    const reply = data.reply || "⚠️ No reply from Gemini.";

//     addToChatLog("Gemini", reply);
//   } catch (error) {
//     console.error("Fetch error:", error); // 👈 Log errors to browser console
//     addToChatLog("Gemini", "⚠️ Could not connect to backend.");
//   }
// }

// function addToChatLog(sender, message) {
//   const log = document.getElementById("chatlog");
//   const div = document.createElement("div");
//   div.className = "message";
//   div.textContent = `${sender}: ${message}`;
//   log.appendChild(div);
// }
