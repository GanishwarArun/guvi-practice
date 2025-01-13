// determine the number is positive or negative
function transactionType(amount) {
  if (amount > 0) {
    return "Incoming Payment";
  } else if (amount < 0) {
    return "Outgoing Payment";
  } else {
    return "No Transaction";
  }
}
// console.log(transactionType(-1000));
// console.log(transactionType(1000));

// Find the sum of two integers 
function sumofTwoIntegers(a, b) { 
    return a + b;
}
function sumWithoutPlusSymbol1(num1, num2) { 
    return num1 - -num2
}

function sumWithoutArithmatic(num1, num2) {
    while (num2 != 0) { 
        let carry = num1 & num2;
        num1 = num1 ^ num2;
        num2 = carry << 1;
    }
    return num1;
}
// console.log(sumWithoutArithmatic(2, 3));

//Identify the maximum and minimum of three numbers.
function findMinAndMax(num1, num2, num3) { 
    let max;
    if (num1 > num2 && num1 > num3) {
        max = num1;
    } else if (num2 > num3) {
        max = num2;
    } else max = num3;
    let min;
    if (num1 < num2 && num1 < num3) {
        min = num1;
    } else if (num2 < num3) {
        min = num2;
    } else min = num3;

    let mid;
    if (num1 != min && num1 != max) {
        mid = num1;
    } else if (num1 == num2 || (num2 != min && num2 != max)) mid = num2;
    else mid = num3;
    return { min, max, mid };
}

// console.log(findMinAndMax(10, 20, 30));
// console.log(findMinAndMax(33, 22, 11));

// count the number of digits in a number.
function numOfDigits(num) {
    if (num < 0) return numOfDigits(-num);
    return parseInt(Math.log10(num) + 1) || 1;
}
function numOfDigitsWithoutMath(num) { 
    let count = 0;
    while (num != 0) { 
        num = parseInt(num / 10);
        count++;
    }
    return count;
} 
// console.log(numOfDigitsWithoutMath(12345));

//calculate the difference between wo integers.
function difference(num1, num2) { 
    if (num1 < num2) return difference(num2, num1);
    return num1 - num2;
}
// console.log(difference(10, 17));

// ! Check if a string contains only alphabets.
function isAlphabet(str) {
    return /^[a-zA-Z]+$/.test(str);
}

function isAlphabet1(str) {
    for (let i = 0; i < str.length; i++) {
        if ((str[i] < "a" || str[i] > "z") && (str[i] < "A" || str[i] > "z"))
            return false;
    }
    return true;
}

console.log(isAlphabet1("abcd"));
console.log(isAlphabet1("1234"));




// ! Calculate the difference between two integers.
function difference(num1, num2) { 
    if (num1 < num2) return difference(num2, num1);
    return num1 - num2;
}

// check if a number is even or odd
function evenOrOdd(num) { 
    return num % 2 == 0 ? "Even" : "Odd";
}

function evenOrOdd1(num) {
    return num & 1 ? "Odd" : "Even";
}

function evenOrOdd2(num) {
    return ["Even", "Odd"][num & 1]
}

function evenOrOdd3(num) { 
    while (num < 2) {
        num = num - 2;
    }
    return num ? "Odd" : "Even";
}

console.log(evenOrOdd3(5));
console.log(evenOrOdd2(6));
console.log(evenOrOdd1(7));
console.log(evenOrOdd(8));



//calculate the perimeter of a rectangle
function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
}

console.log(perimeterOfRectangle(10, 20));


// find the largest of four numbers
function max(num1, num2) { 
    return num1 < num2 ? num2 : num1;
}

function LargestOfFour(num1, num2, num3, num4) {
    return max(max(num1, num2), max(num3, num4));
}

// calculate the average of three numbers.
function average(num1, num2,num3) {
    return (num1 + num2 + num3) / 3;
}
console.log(average(10, 20, 30));

// identify if a number is divisible by both 3 & 5.
function divisibleBy3And5(num) { 
    return num % 3 == 0 && num % 5 == 0 ? true : false;
}
console.log(divisibleBy3And5(15));


// Count the number of vowels in a string.
function vowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (
          str[i] == "a" ||
          str[i] == "e" ||
          str[i] == "i" ||
          str[i] == "o" ||
          str[i] == "u" ||
          str[i] == "A" ||
          str[i] == "E" ||
          str[i] == "I" ||
          str[i] == "O" ||
          str[i] == "U"
        )
          count++;
    }
    return count;
}
console.log(vowels("aeiouAEIOU"));


// find the square of number
function square(num) {
    return num * num;
}

function square1(num) {
    return Math.pow(num, 2);
}

function square2(num) {
    return num ** 2;
} 

function square3(num, t) { 
    if (t == undefined) t = num;
    if (t == 0) return 1;
    if (t == 1) return num;
    return num + square3(num, t - 1);
}

console.log(square3(4))




