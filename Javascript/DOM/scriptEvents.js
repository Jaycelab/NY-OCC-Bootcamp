// Register EVENT LISTENERS to respond to user interactions

// Click
const button = document.getElementById("btn");
button.addEventListener("click", function (e) {
  console.log(e);
  console.log(e.type);
  console.log(e.target); // what was clicked?
});
