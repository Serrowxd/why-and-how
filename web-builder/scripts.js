window.addEventListener("load", () => {
  console.log('Working (OvO")');
});

// JS

const pannelSelector = document.getElementById("pannel-items");
const displayPreview = document.getElementById("display-preview");

const sidePannel = document.getElementById("side-pannel");
const pannelFold = document.getElementById("pannel-foldout");

// State Variables
let One;
let Two;
let Three;
let Four;

sidePannel.addEventListener("click", (event) => {
  // console.log(event.target.getAttribute("id"));

  switch (event.target.getAttribute("id")) {
    case "one":
      console.log("One Clicked");
      // displayPreview.style.backgroundColor = "red";
      sidePannel.classList.add("add-width");
      pannelFold.classList.add("shown");
      Two = false;
      One = true;
      break;
    case "two":
      console.log("Two Clicked");
      One = false;
      Two = true;
      break;
    case "three":
      console.log("Three Clicked");
      break;
    case "four":
      console.log("Four Clicked");
      break;
    case "pf-one":
      if (One) {
        console.log("Hemlo");
        displayPreview.style.backgroundColor = "purple";
        break;
      }
      if (Two) {
        console.log("Not Hemlo >:(");
        displayPreview.style.backgroundColor = "pink";
        break;
      }
      console.log("PF-One Clicked");
      displayPreview.style.backgroundColor = "red";
      break;
    case "pf-two":
      console.log("PF-Two Clicked");
      displayPreview.style.backgroundColor = "blue";
      break;
    case "pf-three":
      console.log("PF-Three Clicked");
      displayPreview.style.backgroundColor = "orange";
      break;
    case "pf-four":
      console.log("PF-Four Clicked");
      displayPreview.style.backgroundColor = "green";
      break;
    case "close":
      console.log("Close Clicked");
      sidePannel.classList.remove("add-width");
      pannelFold.classList.remove("shown");
      break;
    case "clear":
      console.log("Clear Clicked");
      displayPreview.style.backgroundColor = "inherit";
      One = false;
      Two = false;
      break;
    default:
      console.log("oops");
  }
});

// This seems like a ridiculously large switch case
// Text should be included, might make that into a second foldout?
// Should the foldout items be auto-populated based on what is clicked?

// Easiest way to handle this would be to add an if statement to the switch cases.
// Well set-up a default state via variable, then apply a boolean to it.
// If that state is met, then we'll pass a certain input to the function call
// That input wil change the behavior of the PF's.

// Edge cases will be making sure each of the inital buttons sets the other states to false
// This needs to happen before we set the state for that function.
