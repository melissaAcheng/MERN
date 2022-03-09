const nums = [4,8,5,7,1,6,10,2,3,9];

function quickSort(arr, start, end) {

    if (start >= end) {
        return;
    }

    let index = partition(arr, start, end);
    
    quickSort(arr, start, index-1);
    quickSort(arr, index+1, end);
    
}

function partition(arr, start, end) {

    let pivotIndex = randomIndex(start,end);
    let pivotValue = arr[pivotIndex];

    while (start < end) {
        if (arr[start] < pivotValue) {
            start++;
        } if (arr[end] > pivotValue) {
            end--;
        } if (arr[start] >= pivotValue && arr[end] <= pivotValue) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
        }
    }
    return pivotIndex;
}

console.log(quickSort(nums, 0, nums.length-1));

function randomIndex(start, end) {
    return Math.floor(Math.random() * (end - start + 1) + start);
}

// console.log(randomIndex(0, 7));



