// remove last 3 elements from array

const removeThree = (anArray) => {
  let withOutThree = anArray.slice(0, -3);
  return console.log(withOutThree);
};

const returnRemoveThree = (anArray) => {
  let theThree = anArray.slice(3);
  return console.log(theThree);
};

theArray = ["heres", "the", "array", "to", "remove", "from"];
removeThree(theArray);
returnRemoveThree(theArray);

// Josh's
// const lastThree = (arr) => {
//     let temp = arr.reverse();
//     let out = [arr[0], arr[1], arr[2]];
//     return out;
// };

// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = [7, 8, 9, 10, 11, 12];

// console.log(lastThree(arr1));
// console.log(lastThree(arr2));

// Tracy's solution -
// const lastThree = (array) => {
//   return array.slice(3);
// };

// console.log(lastThree(["a", "b", "c", "d", "e", "f"]));
