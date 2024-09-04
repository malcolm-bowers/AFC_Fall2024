let pets = ["Atlas", "Ranger", "Tony"];
console.log(pets[0]);
console.log(pets);
console.log(pets.length);
console.log(pets.toString());
console.log(pets.join(" * "));
var atlas = pets.indexOf("Atlas");

console.log(atlas);
console.log(pets.indexOf("Charlie"));
pets.push("MonkeyButt"); // Appends to the end
console.log(pets);
pets.pop(); // Removes the last element
var kitty = pets.pop();
console.log(pets);
console.log(kitty);
pets.push("Tony");
pets.push("MonkeyButt");
pets.shift(); // Removes from the front
console.log(pets);
pets.unshift("Atlas"); // Adds to the front
console.log(pets);
console.log(pets.slice(1, 3));
// ["Pickle", "Hootchie"]
console.log(pets.slice(2, 3));

// Iteration over an Array
var numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] * 2;
}
console.log(numbers);

pets.forEach((element) => {
  // Does not change the data, just uses it
  console.log(element);
});

var square = numbers.map((num) => num * num); // Changes the data
console.log(square);

pets.sort();
console.log(pets);

let nums = [100, 10, 4, 1, 3];
let newNumbers = nums.sort((a, b) => a - b);
console.log(newNumbers);

var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

var longWords = words.filter(function (thisword) {
  return thisword.length > 6;
});

var lWords = words.filter((a) => a.length > 6);
console.log(lWords);

var person = {
  name: "Walter White",
  age: 50,
  city: "Albuquerque",
  hobbies: "Cooking",
};

let dog = {
  breed: "Bulldog",
  name: "Atlas",
  age: 4,
  isMarried: false,
};

console.log(dog.isMarried);
console.log(dog["isMarried"]);
let typeOfDog = "breed";
console.log(dog[typeOfDog]);

let fName = person.fName;
let lName = person.lName;
let age = person.age;
console.log(`${fName} ${lName} is ${age} years old`);
