window.addEventListener("load", () => {
  console.log('Working (OvO")');
});

// JS

const pannelSelector = document.getElementById("pannel-items");
const pannelPop = document.getElementById("populate-pannel");
const displayPreview = document.getElementById("display-preview");

const sidePannel = document.getElementById("side-pannel");
const pannelFold = document.getElementById("pannel-foldout");

sidePannel.addEventListener("click", (event) => {
  // console.log(event.target.getAttribute("id"));

  switch (event.target.getAttribute("id")) {
    case "one":
      console.log("one");
      // displayPreview.style.backgroundColor = "red";
      sidePannel.classList.add("add-width");
      pannelFold.classList.add("shown");
      break;
    case "two":
      console.log("two");
      break;
    case "three":
      console.log("three");
      break;
    case "four":
      console.log("four");
      break;
    case "pf-one":
      console.log("PF-One Clicked");
      displayPreview.style.backgroundColor = "red";
      break;
    case "pf-two":
      console.log("PF-One Clicked");
      displayPreview.style.backgroundColor = "blue";
      break;
    case "pf-three":
      console.log("PF-One Clicked");
      displayPreview.style.backgroundColor = "orange";
      break;
    case "pf-four":
      console.log("PF-One Clicked");
      displayPreview.style.backgroundColor = "green";
      break;
    case "close":
      sidePannel.classList.remove("add-width");
      pannelFold.classList.remove("shown");
      break;
    case "clear":
      displayPreview.style.backgroundColor = "inherit";
      break;
    default:
      console.log("oops");
  }
});

// Fold-out bar for each selection in initial switch case
// These contain secondary switch cases that check for click
// Do something with the preview page on click
// Add close/return button.
