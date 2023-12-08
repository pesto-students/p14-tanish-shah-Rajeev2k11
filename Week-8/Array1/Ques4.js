// Take 2 arrays from as an input and return the intersection of the two arrays.
// Intersection is the common elements in both the arrays.

// Input
// 1,2,3,4,5
// 4,5,6,7,8
// Output
// 4, 5
function findIntersection(arr1, arr2) {
    let intersectionArray=[]

    for(let i=0;i<arr1.length;i++){
        let currentElement = arr1[i];

        if(arr2.includes(currentElement) && !intersectionArray.includes(currentElement)){
            intersectionArray.push(currentElement);
        }
    }
    console.log(intersectionArray)
   
    }

findIntersection([1,2,3,4,5],[4,5,6,7,8])