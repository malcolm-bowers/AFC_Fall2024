// here is an array of strings
let dogArray = ["Atlas", "Ranger", "Tony"];
// here is an array of numbers
let numArray = [14, 23, 35];
let movieArr = [];
// function
// data types for params and args,
// data types for returned values
const getAge = (num, fname = "JM", isMarried = false) => {
    return num * 4;
};
let result = getAge(34);
console.log(result);
