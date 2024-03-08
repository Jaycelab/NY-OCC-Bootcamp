/*
  Targetting the DOM elements
*/

// Get element by ID
let headingElement = document.getElementById("heading");
console.log("Element by ID:", headingElement);

// Get elements by class name
var textElements = document.getElementsByClassName("text");
console.log("Elements by Class Name:", textElements);

// Get elements by tag name
var listItems = document.getElementsByTagName("li");
console.log("Elements by Tag Name:", listItems);

/*
  Modern Version
*/
// Query selector - getting the first occurence
let containerElement = document.querySelector("#container");
console.log("Query Selector:", containerElement);

// Query selector all - get all occurences
let listElements = document.querySelectorAll("li.box");
console.log("Query Selector All:", listElements);

/*
  Traversing
*/

// parentNode
let listParent = document.querySelector("#list").parentNode;
console.log("Parent Node:", listParent);

// children
let containerChildren = containerElement.children;
console.log("Children:", containerChildren);

/*
 ul <ul>
 text node "Item 1"
 ul <ul>
 text node "Item 2"
*/

// Previous sibling
let secondListItem = document.querySelectorAll("li")[1];
console.log(secondListItem.previousSibling.previousSibling);

/* 
  ul <ul>
  text node "Item 2"
  ul <ul>
  text node "Item 3"
*/

// Next sibling
console.log(secondListItem.nextSibling.nextSibling);

/*
  Modifying 
*/

// Modifying innerHTML
headingElement.innerHTML = "<i>Updated Content</i>";
console.log("Modified Inner HTML:", headingElement.innerHTML);

// Modifying textContent
textElements[0].textContent = "<i>Updated Text</i>";
console.log("Modified Text Content:", headingElement.textContent);

// Setting attributes
let imageElement = document.getElementsByTagName("img")[0];
imageElement.setAttribute("id", "funnyImage");
imageElement.setAttribute("src", "image.jpg");
console.log("Image Element with Attribute:", imageElement);
// Modify styles
let btnElement = document.getElementById("btn");
btnElement.style.backgroundColor = "lightblue";
console.log("Modified Style:", btnElement.style);

// Create Element
let newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";
newParagraph.setAttribute("class", "text");
containerElement.appendChild(newParagraph);
console.log("Appended Element:", newParagraph);
listContainer.appendChild(elementToRemove);
/*
  Removing Elements
*/

// .remove()
let listContainer = document.getElementById("list");
let elementToRemove = listContainer.children[0];
elementToRemove.remove();
console.log("Removed Element:", elementToRemove);

// bring back the element?
listContainer.appendChild(elementToRemove);
