/**
给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/group-anagrams
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
//    哈希表+排序
let map=new Map()
for(let str of strs){
    let arr=Array.from(str)
    // 如果没有指明 compareFunction ，那么元素会按照转换为的字符串的诸个字符的Unicode位点进行排序。
    arr.sort()
    let key=arr.toString()
    let list=map.has(key)?map.get(key):[]
    list.push(str)
    map.set(key,list)
}
return Array.from(map.values())
};
