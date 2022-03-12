// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 子数组 是数组中的一个连续部分。
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
   let memo=[];
   memo[0]=nums[0];
   let max=nums[0];
   for(let i=1;i<nums.length;i++){
       memo[i]=Math.max(memo[i-1]+nums[i],nums[i]);
       max=Math.max(memo[i],max);
   }
   return max
};
