const arr=[2,4,6,8,10,6,1];
console.log(arr);

const midindex=Math.floor(arr.length/2)

const newArr=[...arr.slice(0,midindex),...arr.slice(midindex+1)];
console.log(newArr);