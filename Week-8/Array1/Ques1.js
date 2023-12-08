// Get the sum of the maximum and minimum values in an array

// Write a function to return the sum of max and min values in an array.

// Input:
// 5,2,9,1,7
// Output:
// 10

function findSumOfMaxAndMin(arr) {
    let max = arr[0]
    let min= arr[0]
    for(let i=1;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i]
        }
        if(min>arr[i]){
            min=arr[i]
        }

    }
    console.log(max+min)
  }

  findSumOfMaxAndMin([5,2,9,1,7])