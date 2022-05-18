// write and arrow function that takes an array of strings and return the largest

const longestString = (anArray) => {
  let thelongest = "";
  for (let item of anArray) {
    if (item.length > thelongest.length) {
      thelongest = item;
    }
  }
  return console.log(thelongest);
};

theArray = ["this", "is", "the", "array"];

longestString(theArray);

// reduce method - Tracy's version
/* const returnLongestString = (array) =>
    array.reduce((item, strLength) =>
      strLength.length > item.length ? strLength : item
    );
  
  console.log(returnLongestString(["codenation", "master", "bootcamp"])); */
