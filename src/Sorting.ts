function quickSort(arr: number[]): number[]{
    if(arr.length<=1) return arr;
    
    let pivot =  arr[0];
    let left: number[] = [];
    let middle: number[] = [];
    let right: number[] = [];

    arr.forEach(el => {
        if(el < pivot){
            left.push(el);
        }else if( el == pivot){
            middle.push(el);
        }else{
            right.push(el);
        }
    });

    return [...quickSort(left), ...middle, ...quickSort(right)];
}

function mergeSort(arr: number[]) : number[]{
    if(arr.length<=1) return arr;

    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);

    function merge(leftArr: number[], rightArr: number[]){
        let result: number[] = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while(leftIndex < leftArr.length && rightIndex < rightArr.length){
            if(leftArr[leftIndex]<=rightArr[rightIndex]){
                result.push(leftArr[leftIndex]);
                leftIndex++;
            }else{
                result.push(rightArr[rightIndex]);
                rightIndex++;
            }
        }
        
        return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
    }

}