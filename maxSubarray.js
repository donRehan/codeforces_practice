/*
  * Approach
  * Kadane's algorithim states that if a running sum
  * is negative we can disregard it and start from the next number.
  */ 

function maxSubArray(nums) { 
  let maxSub = nums[0], curSum = 0;
  for ( const num of nums ) {
    if (curSum < 0) curSum = 0;
    curSum += num;
    maxSub = Math.max(curSum , maxSub);
   }
  return maxSub;
}
