/*
 * @Author: leiyuanyuan 
 * @Date: 2018-11-05 16:59:49 
 * @Last Modified by: leiyuanyuan
 * @Last Modified time: 2018-11-05 19:41:45
 * 插入排序，将每次循环将未排序第一个数作为当前对比数，插入到已排序的合适位置处
 */

let arr = [1,3,5,2,5,6]
function insertSort(arr){
    var preindex,current
    for(var i = 1;i<arr.length;i++){
        preindex = i - 1
        current = arr[i]
        while(preindex>0&&arr[preindex]>current){
            arr[preindex+1] = arr[preindex]
            preindex--
        }
        arr[preindex+1] = current
    }
    return arr
}
