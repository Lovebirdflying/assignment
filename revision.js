/*
1. Reverse a String: Write a function that takes a string as input and returns the string reversed. For example, 
given the input "hello", the output should be "olleh".

*/

function reverse(string){
    return string.split('').reverse().join('')
}

console.log(reverse("hello"))

/*
 2. Fibonacci Sequence: Create a function that returns the first n numbers in the Fibonacci sequence. 
  For example, if n = 5, the output should be [0, 1, 1, 2, 3].
*/

function fibonacci(n){
    if (n <= 0) return [];
    if (n == 1) return [0]

    let sequence = [0, 1]

    for (let i = 2; i < n; i++){
        sequence.push(sequence[ i - 1] + sequence[i - 2])
    }

    return sequence
}

console.log(fibonacci(5))

/*
3. palindrome Checker: Write a function that checks if a given string is a palindrome (reads the same forwards and backwards). Ignore spaces, punctuation, and capitalization.

A palindrome checker is like a mirror for words or sentences. It checks if a word or phrase looks the same when you read it forward and backward—just like how your reflection in a mirror looks the same.
a checker ignores the space, punctuations and capital letter, compares the first and last letter, moving inward
*/

function isPalindrome(str) {
   // remove non alpha-numeric characters & convert to lowercase
   let cleanString = str.toLowerCase().replace(/[^a-z0-9]/g, '')

   //compare the cleaned string with it reverse

   return cleanString === cleanString.split('').reverse().join('');
}

console.log(isPalindrome("madam"))
console.log(isPalindrome("mom"))
console.log(isPalindrome("sir"))
console.log(isPalindrome("teacher came to class", "it a glass"))


//  Find the Largest Number: Create a function that takes an array of numbers and returns the largest number in the array.

function TheLargestnumber(arr){


    //using math method to check the largest number in an array
    return Math.max(...arr)

}

console.log(TheLargestnumber([20, 4, 50,18, 90]))

// finding the max using forloop 

function findLargestNumber(arr) {
    let max = arr[0]; // Start with the first number

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if a larger number is found
        }
    }

    return max;
}


console.log(TheLargestnumber([20, 4, 50,18, 90]))

// 5. Flatten an Array: Write a function that takes a nested array and flattens it into a single array. For example, given [[1, 2], [3, 4], [5]], the output should be [1, 2, 3, 4, 5]

//using flat() method

function flatArray(arr){
    return arr.flat()
}

console.log(flatArray([[1, 2], [3, 4], [5]]))

//6. Count Vowels: Create a function that counts the number of vowels in a given string. For example, given the input "hello world", the output should be 3.
// count vowels using forloop

function countVowels(str){
    let count = 0; //variable to store  number of vowels
    let vowels = "aeiou"; // string containing all vowels
    for( let characters of str.toLocaleLowerCase()){//converts string to lowercase and loop through each character
        if(vowels.includes(characters)){//check if the character is in "aeiou"

            count++ //if it is vowels increase the count 
        }
    }
    return  count; // return total number of vowels counted
}

console.log(countVowels(" Mr Prince is a great lecturer"))

// count vowels using Regex

function countVowel(str){
    let match = str.match(/[aeiou]/gi) // find all vowels (case - incesitive)
    return match? match.length : 0 //return number of match or 0 if none 
}

console.log(countVowel("pardon me i love regex"))

// 7. Remove Duplicates: Write a function that takes an array and returns a new array with duplicates removed. For example, given [1, 2, 2, 3, 4, 4], the output should be [1, 2, 3, 4].
//using loop

function RemoveDuplicat(arr){
    let noduplicateARR = []; //create an empty array to store non duplicate value
    for ( let num of arr){ // loop through each number in the array
        if (!noduplicateARR.includes(num)){// if the number is not already in  noduplicateARR
            noduplicateARR.push(num) // add it to noduplicate ARR
        }
    }
    return noduplicateARR // return array with duplicate removed 
}

console.log(RemoveDuplicat([1, 2, 3, 3, 4,4,4,5,6,6,7]))

// using filter 

function removeDuplicate(arr){
    return arr.filter((value, index) => arr.indexOf(value) === index)
}

console.log(removeDuplicate([1, 2, 3, 3, 4,4,4,5,6,6,7]))

//8. Sum of Array: Create a function that calculates the sum of all numbers in an array. For example, given [1, 2, 3, 4], the output should be 10.

// loop

function sumNumber(arr){
    let sum = 0 //create an empty array to store the total number
    for ( let num of arr){ // loop through the number in the array
        sum += num;  // add all the number looping through to sum
    }

return sum; // returning the total sum
}

console.log(sumNumber([1, 4, 7, 9, 7]))

//9. Sort an Array: Write a function that sorts an array of numbers in ascending order without using the built-in sort() method.

//forloop

function forloopsorts(arr){
    let n = arr.length;
    for (let i = 0; i < n -1; i++){
        for (let j = 0; j < n - 1  - i; j++){

            if(arr[j] > arr[j + 1]){
                //swapp arr[j] and arr[j + 1]
                [arr[j], arr[j + 1] ] = [ arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

console.log(forloopsorts([3, 2, 9, 7]))

// 10. Merge Two Sorted Arrays: Create a function that takes two sorted arrays and merges them into a single sorted array.

function mergeSortedArray(arr1, arr2){
    let mergedArr = [];
    let i = 0, j = 0;

    while ( i < arr1.length && j < arr2.length){
        if( arr1[i] < arr2[j]){

            mergedArr.push(arr1[i])

            i++
        } else {
            mergedArr.push(arr2[j])
            j++
        }
    }
         // Add remaining elements from arr1 (if any)
         while (i < arr1.length){
            mergedArr.push(arr1[i])

            i++ 
         }

         // Add remaining elements from arr2 (if any)
         while (j < arr2.length){
            mergedArr.push(arr2[j])

            j++
         }
         return mergedArr
    }

    console.log(mergeSortedArray([1, 4, 5, 6], [0, 2, 3]))