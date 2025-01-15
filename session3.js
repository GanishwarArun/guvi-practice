// Sorting
// Bubble-Sorting;

function bubbleSort(arr) { 
    console.log(arr);
    for (let itr = 0; itr < arr.length; itr++)
        for (let ind = 1; ind < arr.length; ind++) {
            if (arr[ind] < arr[ind - 1]) { 
                let temp = arr[ind];
                arr[ind] = arr[ind - 1];
                arr[ind - 1] = temp;
            }
        }
    console.log(arr);
}
// bubbleSort([5,4,3,2,1])
// bubbleSort(Array.from( {length: 10}, () => Math.floor(Math.random() * 100) ) )

function selectionSort(arr) {
    console.log("Original Array:", arr);
    for (let ind = 0; ind < arr.length; ind++)  {
        let minInd = ind;
        for (let index1 = ind + 1; index1 < arr.length; index1++) { 
            if (arr[index1] < arr[minInd]) { 
                minInd = index1;
            }
        }
        if (ind != minInd) {

            let temp = arr[ind];
            arr[ind] = arr[minInd];
            arr[minInd] = temp;
        //    arr[ind] = arr[ind] + arr[minInd];
        //    arr[ind] = arr[ind] - arr[minInd];
        //    arr[minInd] = arr[ind] - arr[minInd];
        }
    } 
    console.log("Sorted Array:",arr);

}

// Remove duplicates from a sorted array.

function removeDuplicates(arr /*Unsorted*/) {
    console.log(arr);
    for (let ind = 0; ind < arr.length; ind++) { 
        let value = arr[ind];
        if (value != undefined)
            for (let ind1 = ind + 1; ind1 < arr.length; ind1++) {
                if (value == arr[ind1]) { 
                    arr[ind1] = undefined;
                }
            }
    }
    let slowInd = 0;
    for (let ind = 0; ind < arr.length; ind++) {
        if (arr[ind] != undefined) { 
            arr[slowInd] = arr[ind];
            slowInd++;
        }
    }
    arr.length = slowInd;
    console.log(arr);
} 

// removeDuplicateSorted(arr)

function removeDuplicatesSorted(arr) { 
    console.log(arr);
    let slowInd = 0;
    for (let ind = 0; ind < arr.length; ind++) { 
        if (arr[ind] != arr[slowInd]) { 
            slowInd++;
            arr[slowInd] = arr[ind];
        }
    } 
    arr.length = slowInd + 1;
    console.log(arr);
}

// rotate an array by one position.

const rotate = arr => {
    console.log(arr);

    let temp = arr[0];
    for (let ind = 1; ind < arr.length; ind++) { 
        arr[ind - 1] = arr[ind]
    }
    arr[arr.length - 1] = temp;
    console.log(arr);

} 
console.log(rotate([1, 2, 3, 4, 5]));

// reverse the elements in an array.

const reverse = (arr, start = 0, end = arr.length - 1) => {
    console.log(arr);
    while (start < end) { 
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    console.log(arr);
}

//rotate an array to left by K positions.
function rotateLeft (arr, k)  { 
    console.log(arr, k)
    k = k % arr.length;
    reverse(arr, 0, k - 1)
    reverse(arr, k, arr.length - 1)
    reverse(arr);
    console.log(arr, k)
} 

// find the square root of given number
function sqrt(num) { 
    let start = 0;
    let end = num / 2;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (mid * mid == num) return mid;
        else if (mid * mid < num) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
}