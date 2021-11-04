// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
// k = 16
// arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// create new arrays
// if no matches, return empty array

function findConsqSums(arr, k) {
    let finalarray = [];
    let holderarray = [];
    let tempsum = 0;
for(let j = 0; j<arr.length; j++){
  for(let i = j; i< arr.length; i++){
      tempsum += arr[i]; 
      holderarray.push(arr[i]);
      if (tempsum == k){
          const tempArr = [...holderarray];
          finalarray.push(tempArr);
          
          
      }

  }
  holderarray= [];
  tempsum = 0;
}
  return finalarray;

}

console.log(findConsqSums([2,5,3,6,7,0,0,23,11], 16));