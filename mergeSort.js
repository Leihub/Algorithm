/*
 * @Author: leiyuanyuan 
 * @Date: 2018-11-05 20:01:58 
 * @Last Modified by: leiyuanyuan
 * @Last Modified time: 2018-11-06 20:42:36
 * 归并排序，分治策略，将数组分成小数组来排序
 * 平均时间复杂度是O(nlogn)，比冒泡，选择，插入排序好，
 * 算法步骤：
 * 1.申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列
 * 2.设定两个指针，最初位置分别为两个已经排序序列的起始位置
 * 3.比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置
 * 4.重复步骤3直到某一指针到序列尾
 * 5.将另一序列剩下的所有元素直接复制到合并序列尾
 */

let arr = [1,3,5]
function mergeSort(arr){
    var len = arr.length
    if(len<2){
        return arr
    }
    var middle = Math.floor(len/2),
        left = arr.slice(0,middle),
        right = arr.slice(middle)
    
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    var result = []    
    while(left.length && right.length){
        if(left[0]<=right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }

    while(left.length){
        result.push(left.shift())
    }
    while(right.length){
        result.push(right.shift())
    }
    
    return result
}

console.log(mergeSort(arr))