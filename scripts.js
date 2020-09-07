window.addEventListener("load", () => {
  console.log('Working (OvO")');
});

// JS

const form = document.getElementById("text-input");
const submit = document.getElementById("submit");
const output = document.getElementById("text-output");
const error = document.getElementById("error");

const choiceWrapper = document.getElementsByClassName("choice-item");

const objectChoice = document.getElementById("object-choice");
const arrayChoice = document.getElementById("array-choice");
const aobjChoice = document.getElementById("aobj-choice");

// Slider is .checked for boolean return

// -- Two ways to handle data --
// 1. Data is modified and stored by default, the toggles show/hide the data
// 2. The data is only modified when the toggles are clicked.
// First option is going to be the default for now.

// Text is always shown by default
submit.addEventListener("click", () => {
  // Check for no input
  if (!form.value) {
    error.classList.add("shown");

    return;
  }

  // Switch case? Has to check the state of 3 different items.. What do I pass the conditional?

  // Create list item node and append form value
  const node = document.createElement("LI");
  const textNode = document.createTextNode(form.value);
  // Append node to  output
  node.appendChild(textNode);
  output.appendChild(node);
  // Remove shown class
  error.classList.remove("shown");
  // Clear form value
  form.value = "";
});

// Add the input to an object with unique id
const ShowArray = (input) => {
  console.log(input);
};
// Add the input to an array
const ShowObject = (input) => {
  console.log(input);
};
// Throw the individual input objects into an array!
const ShowAobj = (input) => {
  console.log(input);
};
