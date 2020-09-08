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
const objectOutput = document.getElementById("object-output");
const arrayOutput = document.getElementById("array-output");
const aobjOutput = document.getElementById("aobj-output");

const objectChoice = document.getElementById("object-choice");
const arrayChoice = document.getElementById("array-choice");
const aobjChoice = document.getElementById("aobj-choice");

let arr = [];
let objarr = [];
let gcounter = 1;

// Click handler
submit.addEventListener("click", () => {
  submitHandler();
});
// Enter Handler
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
    ShowObject(form.value, gcounter);
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

const CreateNode = (value, node) => {
  const output = node;
  const itemNode = document.createElement("LI");
  const textNode = document.createTextNode(value);
  // Arrays can be seen as Objects with "typeof", so we make sure it's not an array.
  if (!Array.isArray(value) && typeof value == "object") {
    const keyNode = document.createTextNode(value.id + ":");
    const valueNode = document.createTextNode(value.data);

    itemNode.appendChild(keyNode);
    itemNode.appendChild(valueNode);
    output.appendChild(itemNode);

    return;
  }

  // If above conditions are not met, proceed as normal
  itemNode.appendChild(textNode);
  output.appendChild(itemNode);
};

// Data Constructor
class DataObj {
  constructor(id, data) {
    this.id = id;
    this.data = data;
  }
}

// Add the input to an array
const ShowArray = (input) => {
  const output = arrayOutput;
  CreateNode(input, output);
};

// Add the input to an object with unique id
const ShowObject = (input, gcount) => {
  const output = objectOutput;
  // Get global counter
  let counter = gcount;
  // Pass counter to constructor
  let newObj = new DataObj(counter, input);
  // Increment global counter
  gcounter = counter += 1;
  // Generate node
  CreateNode(newObj, output);
};
// Throw the individual input objects into an array!
const ShowAobj = (input) => {
  // Same logic as array output, remove old node to not repeat.
  console.log("ShowAobj");
  console.log(input);
};
