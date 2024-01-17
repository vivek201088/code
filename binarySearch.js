function binarySearch(arr,num){
    let first=0
    let last=arr.length-1
    let mid=0
    while(first<=last){
        mid=(first+last)/2
         if(num<arr[mid]){
            last=mid-1
         }else if(num>arr[mid]){
            first=mid+1
         }else return mid
    }
    return -1
}
const arr=[1,2,3,4,5,6,7]
const index=binarySearch(arr,3);
if(index!=-1){
    console.log(`Number found at position ${index} `);
}else console.log("number not found");
