window.addEventListener("load", () => {
  console.log('Working (OvO")');
});

// Notes
// Slider is .checked for boolean return

// JS

const form = document.getElementById("text-input");
const submit = document.getElementById("submit");
const error = document.getElementById("error");

const output = document.getElementById("text-output");
const arrayOutput = document.getElementById("array-output");
const aobjOutput = document.getElementById("aobj-output");

const choiceWrapper = document.getElementsByClassName("choice-item");

const objectChoice = document.getElementById("object-choice");
const arrayChoice = document.getElementById("array-choice");
const aobjChoice = document.getElementById("aobj-choice");

let arr = [];
let objarr = [];

submit.addEventListener("click", () => {
  submitHandler();
});

form.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    submitHandler();
  }
});

// Text is always shown by default
const submitHandler = () => {
  // Check for no input
  if (!form.value) {
    error.classList.add("shown");

    return;
  }

  // Object Toggle
  if (objectChoice.checked) {
    ShowObject(objectChoice);
  }

  // Array Toggle
  if (arrayChoice.checked) {
    if (!arr.length == 0) {
      arrayOutput.removeChild(arrayOutput.firstElementChild);
    }
    arr.push(form.value);
    ShowArray(arr);
    console.log(arr);
  }

  // Array Object Toggle
  if (aobjChoice.checked) {
    if (!objarr.length == 0) {
      arrayOutput.removeChild(arrayOutput.firstElementChild);
    }
    ShowAobj(aobjChoice);
  }

  // Create list item node and append form value
  CreateNode(form.value, output);
  // Remove shown class
  error.classList.remove("shown");
  // Clear form value
  form.value = "";
};

// add optional input that checks for array length?
const CreateNode = (value, node) => {
  const output = node;
  const itemNode = document.createElement("LI");
  const textNode = document.createTextNode(value);

  itemNode.appendChild(textNode);
  output.appendChild(itemNode);
};

// Add the input to an object with unique id
const ShowArray = (input) => {
  const output = arrayOutput;
  CreateNode(input, output);
};
// Add the input to an array
const ShowObject = (input) => {
  // Object can keep old dada, just needs to show the object structure
  console.log("ShowObject");
  console.log(input);
};
// Throw the individual input objects into an array!
const ShowAobj = (input) => {
  // Same logic as array output, remove old node to not repeat.
  console.log("ShowAobj");
  console.log(input);
};
