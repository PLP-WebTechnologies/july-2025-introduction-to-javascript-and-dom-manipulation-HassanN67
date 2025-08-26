
let userName = prompt("Enter your name:"); // capture user input
let hour = new Date().getHours();
let greetingMessage = "";

// Conditional logic
if (hour < 12) {
  greetingMessage = "Good morning, " + userName + "!";
} else if (hour < 18) {
  greetingMessage = "Good afternoon, " + userName + "!";
} else {
  greetingMessage = "Good evening, " + userName + "!";
}

// Output result in the webpage
document.getElementById("greeting").textContent = greetingMessage;


// Function 1: Calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

function showTotal() {
  let total = calculateTotal(5, 3); // Example: price $5 × 3 items
  document.getElementById("totalResult").textContent =
    "The total cost is $" + total;
}

// Function 2: Format a string (capitalize first letter)
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
console.log(capitalize("javascript is fun!"));

// Example 1: Countdown using a for loop
function showCountdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear before running
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

// Example 2: Iterate through an array using forEach
let fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => {
  console.log("Fruit:", fruit);
});



// Interaction 1: Toggle message visibility
let toggleBtn = document.getElementById("toggleBtn");
let toggleMsg = document.getElementById("toggleMsg");

toggleBtn.addEventListener("click", () => {
  if (toggleMsg.style.display === "none") {
    toggleMsg.style.display = "block";
  } else {
    toggleMsg.style.display = "none";
  }
});

// Interaction 2: Dynamically create a new element
let newPara = document.createElement("p");
newPara.textContent = "This paragraph was created dynamically!";
document.getElementById("part4").appendChild(newPara);

// Interaction 3: Change text on hover
toggleMsg.addEventListener("mouseover", () => {
  toggleMsg.textContent = "You hovered over me!";
});
toggleMsg.addEventListener("mouseout", () => {
  toggleMsg.textContent = "This message can be toggled.";
});
