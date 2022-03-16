// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
[接雨水](https://leetcode-cn.com/problems/trapping-rain-water/)
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
//   初始化结果和长度
let res=0
let len=height.length
// 初始化动态规划数组
let left_Max=[]
let right_Max=[]
left_Max[0]=height[0]
right_Max[len-1]=height[len-1]
// 状态转移 计算动态规划数组
for(let i=1;i<len-1;i++){
   left_Max[i]=Math.max(left_Max[i-1],height[i])
}
// 减去2是因为两边的水会流走
for(let j=len-2;j>=0;j--){
   right_Max[j]=Math.max(right_Max[j+1],height[j])
}
for(let i=0;i<len-1;i++){
    res+=Math.min(right_Max[i],left_Max[i])-height[i]
}
return res
};
