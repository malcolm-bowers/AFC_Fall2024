const numArr = ["one", "two", "three", "four", "five", "six"];

const numberGenerator = () => {
  const randomNum = Math.floor(Math.random() * 6);
  return randomNum;
};

export {numArr, numberGenerator};