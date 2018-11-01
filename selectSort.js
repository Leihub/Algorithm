/*
 * @Author: leiyuanyuan 
 * @Date: 2018-11-01 22:10:29 
 * @Last Modified by: leiyuanyuan
 * @Last Modified time: 2018-11-01 22:21:58
 * 选择排序，先从没有排序的中找到最小的数，每次遍历确定第一位数，然后从剩余没有排序的数组中继续第一轮的操作
 */
let arr = [1,3,5,2,5,6]
function selectSort(arr){
    for(let i =0;i<arr.length-1;i++){
        let minindex=i,temp
        for(let j = i+1;j<arr.length;j++){
            if(arr[j]<arr[minindex]){
                minindex = j
            }
        }
        temp = arr[i]
        arr[i] = arr[minindex]
        arr[minindex] = temp
    }
    return arr
}
console.log('select',selectSort(arr));