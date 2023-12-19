// Given an integer array nums, find a 
// subarray
//  that has the largest product, and return the product.

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

function maxProductSubarray(nums) {
    let maxPro = nums[0]
    let outPutArray=[]
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            maxPro= maxPro*nums[j]
            outPutArray.push(maxPro);
        }
    }
    console.log(maxNum(outPutArray));
}

function maxNum(arr){
    let temp=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>temp){
            temp=arr[i]
        }
    }
    return temp;
}

maxProductSubarray([1,-2,1,4])