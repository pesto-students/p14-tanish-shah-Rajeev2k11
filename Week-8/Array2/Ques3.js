// Given a 2D array of integers, implement an algorithm to print its elements in spiral order.

// Input:
// Rows: 3
// Columns: 3
// 1 2 3 4 5 6 7 8 9
// Output:
// 1 2 3 6 9 8 7 4 5

function spiralOrderTraversal(matrix) {
    // PLACEHOLDER_JAVASCRIPT_SPIRAL_ORDER_TRAVERSAL_BODY
    let left= 0;
    let right=matrix[0].length;
    let top=0;
    let bottom= matrix.length;
    let spiralArray=[]
while(top<=bottom && left<=right){

    for(let i=left;i<right;i++){
        spiralArray.push(matrix[top][i]);
        
    }
    top++;
    for(let i=top;i<bottom;i++){
        spiralArray.push(matrix[i][right]);
        
    }
    right--;
    if(top<=bottom){    
        for(let i=right;i=>left;i--){
            spiralArray.push(matrix[bottom][i]);
            
        }
        bottom--;
    }
   if(left<=right){
    for(let i=bottom;i=>top;i--){
        spiralArray.push(matrix[i][left]);
       
    }
    left++;
   }
    
}
  console.log(spiralArray);  
  }

  let matriix= [[1,2,3],[4,5,6],[7,8,9]]
spiralOrderTraversal(matriix)