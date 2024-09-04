// function syntax
// named function
function nameOfFunction() {
  // code goes here
}
// to run function we call it or invoke it
nameOfFunction();

// function to say hello
function greeting() {
  console.log("Hello");
}

greeting();

// differnece between arguments and parameters
// arguments are sent to function
// parameters accept the value
function area(length, width) {
  return length * width;
}

// anonymous functions do not have names
(function () {
  console.log("Who are you?");
})();

// named function
function makeMore(element) {
  console.log(element + "'s");
}

let animals = ["Oliphant", "Uruk-hai", "Warg"];
animals.forEach(makeMore);

// fat arrows are the modern way to write functions
let newGreeting = () => {
  console.log("Hello");
};

newGreeting();

let newArea = (length = 5, width = 5) => {
  return length * width;
};

console.log(newArea(5, 12));

let anotherGreeting = (arg) => {
  return `Hello, ${arg}`;
};

console.log(anotherGreeting("JM"));

