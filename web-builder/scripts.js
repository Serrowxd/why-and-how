window.addEventListener("load", () => {
  console.log('Working (OvO")');
});

// JS

const pannelSelector = document.getElementById("pannel-items");
const pannelPop = document.getElementById("populate-pannel");
const displayPreview = document.getElementById("display-preview");

pannelSelector.addEventListener("click", (event) => {
  // console.log(event.target.getAttribute("id"));

  switch (event.target.getAttribute("id")) {
    case "one":
      console.log("one");
      displayPreview.style.backgroundColor = "red";
      break;
    case "two":
      console.log("two");
      displayPreview.style.backgroundColor = "blue";
      break;
    case "three":
      console.log("three");
      displayPreview.style.backgroundColor = "orange";
      break;
    case "four":
      console.log("four");
      displayPreview.style.backgroundColor = "green";
      break;
    default:
      console.log("oops");
      displayPreview.style.backgroundColor = "purple";
  }
});
