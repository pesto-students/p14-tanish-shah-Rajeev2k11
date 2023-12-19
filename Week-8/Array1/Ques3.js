// Take an array as an input and a sum value S and returns an array of pairs whose 
// sum is equal to sum value S.


// Input
// 2,4,6,8,10
// 12
// Output
// 2,10,4,8 <\br>(i.e)[[2, 10], [4, 8]]


//Method-1 

// function findSumPairs(arr, targetSum) {
// //TODO: Implement the function findSumPairs
// let resultArr=[]
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(targetSum-arr[i]===arr[j]){
//                 resultArr.push(arr[i])
//                 resultArr.push(arr[j])
//             }
//         }
//     }
//     console.log(...resultArr);
// }

function findSumPairs(arr,targetSum){
    let left=0
    let right=arr.length-1
    while(left<right){
        if(targetSum-arr[left]===arr[right]){
            console.log(arr[left],arr[right])
            right--;
            left++;
        }else if(targetSum<arr[left]+arr[right]){
            right--;
        }else{
            left++;
        }

    }

}
findSumPairs([1,2,4,6,8,10,11],12)