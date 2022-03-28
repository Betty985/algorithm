
/**
给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

假设环境不允许存储 64 位整数（有符号或无符号）。

 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
   let res=0
   while(x!=0){
       let digit=x%10
//        ~~的作用是取整
       x=~~(x/10)
       res=res*10+digit
       if(res<Math.pow(-2,31)||res>Math.pow(2,31)-1){
           return 0
       }
         
   }
   return res
};
// 取余，除以10
