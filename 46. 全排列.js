// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案
[全排列](https://leetcode-cn.com/problems/permutations/)
//  回溯+状态变量
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let len=nums.length
      if(len===0) return nums
    //   布尔数组标记元素是否被使用过
      let used=new Array(len).fill(false)
    //   回溯需要的栈
      let stack=[]
    //   结果
    let res =[]
    dfs(nums,0,stack,used)
      function dfs(nums,depth,stack,used){
          for(let i=0;i<len;i++){
              if(len==stack.length){
                  res.push(stack.slice())
                  return
              }
              if(used[i]) continue
              stack.push(nums[i])
              used[i]=true
              dfs(nums,depth+1,stack,used)
              stack.pop()
              used[i]=false
          }
      }
      return res
};
