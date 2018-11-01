/*
 * @Author: leiyuanyuan 
 * @Date: 2018-11-01 22:00:10 
 * @Last Modified by:   leiyuanyuan 
 * @Last Modified time: 2018-11-01 22:00:10\
 * 冒泡排序,每轮遍历两两比较，较大的往后排，每轮遍历确定最后一位数字。
 */
let arr = [1,3,5,2,5,6]
function bubbleSort(arr){
    for(let i = 0;i<arr.length-1;i++){
        for(let j = 0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort(arr));
