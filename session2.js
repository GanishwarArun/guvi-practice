// Day 2 : Recursion & Searching Algorithms

// calculate the factorial of a number respectively.
function factorial(n) { 
    if (n < 2) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));

// tail call recursion
function factorial(n, curr = 1) { 
    if (n < 0) return;
    if (n < 2) return curr;
    return factorial(n - 1, curr * n )
}

function lieanerSearch(arr, target) {
    console.log(arr);
    console.log(target);
    for (let ind = 0; ind < arr.length; ind++) {
        if (arr[ind] === target) return ind;
    }
    return -1;
}
console.log(lieanerSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));

function recursiveSearch(arr, target, ind = 0) {
    if (ind == 0) {
        console.log(arr);
        console.log(target);
    }   
    if (ind == arr.length) return -1;
    if (arr[ind] == target) return ind;
    return recursiveSearch(arr, target, ind + 1);
}

//implement a searching algorithm to find the targeted element on a sorted array.

function search(arr, target) {
    console.log(arr.join());
    console.log(target);
    let start = 0;
    let end = arr.length - 1
    
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) start = mid + 1;
        else if (arr[mid] > target) end = mid - 1;
    }
    return -1;
}
console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));

function recursiveBinarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) return -1;
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) return mid;

    if (arr[mid] < target)
        return recursiveBinarySearch(arr, target, mid + 1, end);;
    if (arr[mid] > target)
        return recursiveBinarySearch(arr, target, start, mid - 1);
}

// function first and last occurence of a target in an array.

function firstAndLastOccurance(arr, target) {
    console.log(arr.join());
    console.log(target);

    let first = -1;
    last = -1;
    for (let ind = 0; ind < arr.length; ind++) {
        if (arr[ind] == target) {
            if (first == -1) {
                first = ind;
            }
            last = ind;
        }
    }
    return [first, last];
} 

console.log(firstAndLastOccurance([1, 2, 3, 4, 5, 5, 5, 5, 6, 7, 8, 9], 5));

function recursiveBinarySearchForFirst(
    arr,
    target,
    start = 0,
    end = arr.length - 1
) {
    if (start > end) {
        if (arr[start] == target) return start;
        return -1;
    }
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] == target)
        return recursiveBinarySearchForFirst(arr, target, start, mid - 1);
    
    if (arr[mid] < target)
        return recursiveBinarySearchForFirst(arr, target, mid + 1, end);

    if (arr[mid] > target)
        return recursiveBinarySearchForFirst(arr, target, start, mid - 1);
}
console.log(recursiveBinarySearchForFirst([1, 2, 3, 4, 5, 5, 5, 5, 6, 7, 8, 9], 5));

function recursiveBinarySearchForLast(
    arr, target, start = 0, end = arr.length - 1) {
    if (start > end) { 
        if (arr[start - 1] == target) return start - 1;
        return -1;
    }
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] == target)
        return recursiveBinarySearchForLast(+arr, target, mid + 1, end);

    if (arr[mid] < target)
        return recursiveBinarySearchForLast(arr, target, mid + 1, end);

    if (arr[mid] > target)
        return recursiveBinarySearchForLast(arr, target, start, mid - 1);

}
console.log(recursiveBinarySearchForLast([1, 2, 3, 4, 5, 5, 5, 5, 6, 7, 8, 9], 5));



function findFirstAndLastInSorted(arr, target) { 
    console.log(arr);
    console.log(target);
    let first = recursiveBinarySearchForFirst(arr, target);
    let last = recursiveBinarySearchForLast(arr, target);
    return [first, last];
}


function searchRotated(arr, target) {
    let start = 0, end = arr.length - 1; 
    while (start <= end) { 
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] == target) return mid;
        else if (arr[end] < target) {
            if (arr[end] < target) {
                end = mid - 1
            } else {
                start = mid + 1;
            }
        }
        else if (arr[mid] > target) { 
            if (arr[start] > target) {
                start = mid + 1;
            } else {
                end = mid - 1;
             } 

        }
    }
    return -1;
}
