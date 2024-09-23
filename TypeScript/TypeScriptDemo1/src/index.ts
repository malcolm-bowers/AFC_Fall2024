// here is an array of strings
let dogArray: string[] = ["Atlas", "Ranger", "Tony"];
// here is an array of numbers
let numArray: number[] = [14, 23, 35];
let movieArr: object[] = [];


// function
// data types for params and args,
// data types for returned values
const getAge = (num: number, fname: string = "JM", isMarried: boolean = false) => {
    return num * 4;
}

let result = getAge(34);
console.log(result);