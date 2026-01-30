class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      const count = {};
      for ( const num of nums ) {
        count[num] = ( count[num] || 0 ) + 1;
      }
    }
}
