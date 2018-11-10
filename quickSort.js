/*
 * @Author: leiyuanyuan 
 * @Date: 2018-11-07 21:36:43 
 * @Last Modified by: leiyuanyuan
 * @Last Modified time: 2018-11-07 21:57:51
 * 快速排序，
 * 在待排序的元素选一个元素作为基准（通常选第一个元素）
 * 将待排序的元素进行分区，比基准元素大的放在他的右边，比其小的放在左边
 * 对左右两个分区重复以上步骤知道所有元素都是有序的
 */
let arr = [1,3,5,2,5,6]

function quickSort(arr,left,right){
    var len = arr.length,
    partitionIndex,
    left = typeof left != 'number' ? 0 : left,
    right = typeof right != 'number' ? len-1 : right

    if(left < right){
        partitionIndex = partition(arr,left,right)
        quickSort(arr,left,partitionIndex-1)
        quickSort(arr,partitionIndex+1,right)
    }
    return arr
} 
// 分区操作
function partition(arr,left,right){
    var pivot = left,
        index = pivot + 1 
    for(var i = index;i<=right;i++){
        if(arr[i] < arr[pivot]){
            swap(arr,i,index)
            index ++ 
        }
    }
    swap(arr,pivot,index-1)
    return index - 1
}
function swap(arr,i,j){
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
console.log(quickSort(arr));
