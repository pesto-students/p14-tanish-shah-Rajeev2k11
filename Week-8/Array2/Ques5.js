// Take 2 2d arrays from the user and return a 2d array as their sum.
//  Note - rows and cols must be the same of both the input matrix else 
//  throw an error message "Arrays must have the same dimensions"
function sumOfTwoMatrices(rows, cols,array1, array2) {
    let result=[]
  for(let i=0;i<rows;i++){
    let row = [];
    for(let j=0;j<cols;j++){
        row.push(array1[i][j]+array2[i][j])
    }
    result.push(row)
  }
  console.log(result)
}
sumOfTwoMatrices(2,3,[[1,2,3],[4,5,6]],[[1,2,1],[4,4,2]])