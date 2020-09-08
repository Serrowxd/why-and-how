window.addEventListener("load", () => {
  console.log('Working (OvO")');
});

// Notes
// Slider is .checked for boolean return
// Data return is initially going to be done as hidden blocks that are done automatically
// Future data will only be new data input.

// JS

const form = document.getElementById("text-input");
const submit = document.getElementById("submit");
const error = document.getElementById("error");
const output = document.getElementById("text-output");

const choiceWrapper = document.getElementsByClassName("choice-item");

const objectChoice = document.getElementById("object-choice");
const arrayChoice = document.getElementById("array-choice");
const aobjChoice = document.getElementById("aobj-choice");

let arr = [];
let objarr = [];

// Text is always shown by default
submit.addEventListener("click", () => {
  // Temporarily placing these in function scope so we can use them to hold the variables.

  // Check for no input
  if (!form.value) {
    error.classList.add("shown");

    return;
  }

  // Switch case? Has to check the state of 3 different items.. What do I pass for the expression?
  // If statement block will check them and work like a switch case, works temporarily.
  if (objectChoice.checked) {
    ShowObject(objectChoice);
  }
  if (arrayChoice.checked) {
    arr.push(form.value);
    ShowArray(arr);
    console.log(arr);
  }
  if (aobjChoice.checked) {
    ShowAobj(aobjChoice);
  }

  // Create list item node and append form value
  CreateNode(form.value, output, "LI");
  // Remove shown class
  error.classList.remove("shown");
  // Clear form value
  form.value = "";
});

const CreateNode = (value, node, type) => {
  const output = node;
  const itemNode = document.createElement(type);
  const textNode = document.createTextNode(value);

  itemNode.appendChild(textNode);
  output.appendChild(itemNode);
};

// Add the input to an object with unique id
const ShowArray = (input) => {
  const output = document.getElementById("array-output");
  CreateNode(input, output, "P");
};
// Add the input to an array
const ShowObject = (input) => {
  console.log("ShowObject");
  console.log(input);
};
// Throw the individual input objects into an array!
const ShowAobj = (input) => {
  console.log("ShowAobj");
  console.log(input);
};
