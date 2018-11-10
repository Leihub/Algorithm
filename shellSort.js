/*
 * @Author: leiyuanyuan 
 * @Date: 2018-11-07 20:58:50 
 * @Last Modified by: leiyuanyuan
 * @Last Modified time: 2018-11-07 21:11:29
 * 希尔排序，选择一个增量，每次缩小增量，对比增量分组排序。
 */
let arr = [1,3,5,2,5,6]

 function shellSort(arr){
     var len = arr.length,
     temp,
     gap = 1
     while(gap < len/3){
         gap = gap*3 + 1
         console.log(gap);
         
     }
     for(gap;gap>0;gap=Math.floor(gap/3)){
         for(var i = gap;i<len;i++){
             temp = arr[i]
             for(var j = i-gap;j>=0&&arr[j]>temp;j-=gap){
                 arr[j+gap] = arr[j]
             }
             arr[j+gap] = temp
         }
     }
     return arr;
 }

 console.log(shellSort(arr));
 