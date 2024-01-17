/*
Items from the original array are removed and returend, 
Ignore the returen values and they are as good as deleted
*/
const arr=[1,2,3,4,5,6,7,8];

const newarry=arr.splice(2,3);
console.log("Original array:",arr);
console.log("new array:",newarry);
