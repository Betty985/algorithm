# 链表
## 技巧
哑节点一般用来处理头节点的边界情况
#  递归
## 条件
- 大问题可以拆成子问题
- 子问题的求解方式和大问题一样
- 存在最小子问题

- 终止条件
- 递
- 归
```js
function 递归(){
  //todo
  递归()
}
```
# 分治
# 贪心
> 能使用贪心算法解决的问题具有「贪心选择性质」。「贪心选择性质」严格意义上需要数学证明。能使用贪心算法解决的问题必须具备「无后效性」，即某个状态以前的过程不会影响以后的状态，只与当前状态有关。
- 建立数学模型
- 分解子问题
- 找出子问题的局部最优解
- 找出最优解

方案：
- 排序
- Math.max Math.min

# 回溯
- 记录状态
- 可以回退（栈？）
- DFS可以实现回溯
## 例题
### 全排列
#### [全排列](https://leetcode-cn.com/problems/permutations/)
```js
let ans=[]
var permute = function(nums) {
    if(nums.length==0) return nums 
    dfs(nums,[])
    return ans
};
 function dfs(nums,stack){
    //终止条件
    if(nums.length===stack.length){
        ans.push(stack.slice())
        return
    }
    for(let i=0;i<nums.length;i++){
        if(stack.includes(nums[i])) continue
        //选择
        stack.push(nums[i])
         // 操作：遍历
        dfs(nums,stack)
         // 撤销状态
        stack.pop()
    }
}
```
#### [电话号码的字母组合](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/)
```js
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
 let res=[]
  if (digits.length==0) return res
  //哈希表
  let map=new Map()
  map.set(2,['a','b','c'])
  map.set(3,['d','e','f'])
  map.set(4,['g','h','i'])
  map.set(5,['j','k','l'])
  map.set(6,['m','n','o'])
  map.set(7,['p','q','r','s'])
  map.set(8,['t','u','v'])
  map.set(9,['w','y','x','z'])
  //全排列问题
   const backtrack = (digits, start, sb) => {
        // 到达回溯树底部
        if (sb.length === digits.length) {
            res.push(sb.join(''))
            return
        }
        for (let i = start; i < digits.length; i++) {
            let digit = digits.charAt(i)*1
            for (let c of map.get(digit)) {
                // 做选择
                sb.push(c)
                // 递归下一层回溯树
                backtrack(digits, i + 1, sb)
                // 撤销选择
                sb.pop()
            }
        }
    }
    backtrack(digits, 0, [])
    return res
};
```
# 动态规划
- 划分状态
- 写出状态转移方程
- 设置初始状态
- 执行状态转移
- 写出最终解
## 注意
- 确定边界
- 由结果推过程
# 双指针
快慢指针等，可以删除某些元素
快慢指针可以用来查找链表的中点，判断链表是否有环（及环的起点），删除元素
# 单调栈
# BFS
可以求最短路径
# 图
- 建tu
- bfs或者dfs
- 关注入度和出度以及visited
        }
