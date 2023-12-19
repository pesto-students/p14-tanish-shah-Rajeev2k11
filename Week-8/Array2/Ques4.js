// Given an array representing the heights of bars, find the total amount
// of rainwater that can be trapped between the bars.

// Input:
// N: 8
// 0
// 1
// 0
// 2
// 1
// 0
// 1
// 3
// Output:
// 5

function trapRainWater(heights) {
    const n = heights.length;
    const leftMax = new Array(n).fill(0);
    const rightMax = new Array(n).fill(0);
    
    leftMax[0] = heights[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], heights[i]);
    }
    
    rightMax[n - 1] = heights[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], heights[i]);
    }
    
    let trappedWater = 0;
    for (let i = 0; i < n; i++) {
        trappedWater += Math.min(leftMax[i], rightMax[i]) - heights[i];
    }
    
    console.log(trappedWater);
   
  }
  trapRainWater([0,1,0,2,0])