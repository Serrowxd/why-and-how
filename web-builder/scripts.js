window.addEventListener("load", () => {
  console.log('Working (OvO")');
});

// JS

const pannelSelector = document.getElementById("pannel-items");
const displayPreview = document.getElementById("display-preview");

const sidePannel = document.getElementById("side-pannel");
const pannelFold = document.getElementById("pannel-foldout");

sidePannel.addEventListener("click", (event) => {
  // console.log(event.target.getAttribute("id"));

  switch (event.target.getAttribute("id")) {
    case "one":
      console.log("One Clicked");
      // displayPreview.style.backgroundColor = "red";
      sidePannel.classList.add("add-width");
      pannelFold.classList.add("shown");
      break;
    case "two":
      console.log("Two Clicked");
      break;
    case "three":
      console.log("Three Clicked");
      break;
    case "four":
      console.log("Four Clicked");
      break;
    case "pf-one":
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
      break;
    default:
      console.log("oops");
  }
});

// This seems like a ridiculously large switch case
// Text should be included, might make that into a second foldout?
// Should the foldout items be auto-populated based on what is clicked?
