//Challenge 1 - add

/* Write a function that returns the sum of two numbers.

Example

For param1 = 1 and param2 = 2, the output should be
add(param1, param2) = 3. */

function add(param1, param2) {
    return param1 + param2;
}

//Challenge 2 - centuryFromYear

/* Given a year, return the century it is in.
The first century spans from the year 1 up to
and including the year 100, the second - from
the year 101 up to and including the year 200,
etc.*/

function centuryFromYear(year) {
    return Math.ceil(year / 100);
}

//Challenge 3 - checkPalindrome

/* Given the string, check if it is a palindrome.

Example

For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;
For inputString = "abac", the output should be
checkPalindrome(inputString) = false;
For inputString = "a", the output should be
checkPalindrome(inputString) = true. */

function checkPalindrome(inputString) {
    if(inputString === inputString.split("").reverse().join("")){
        return true;
    }

    else {
        return false;
    }
}

//Challenge 4 - adjacentElementsProducts

/* Given an array of integers, find the pair of
adjacent elements that has the largest product
and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

An array of integers containing at least two elements.

Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
-1000 ≤ inputArray[i] ≤ 1000.

[output] integer

The largest product of adjacent elements. */

function adjacentElementsProduct(inputArray) {
  var a;
  var b;
  var c;
  var products = [];
    for(var i = 0; i < inputArray.length - 1; i ++){
      a = inputArray[i];
      b = inputArray[i + 1];
      products.push(a * b);
    }
    c = products.reduce(function(a, b) {
    return Math.max(a,b);
  });
  return c;
}

//Challenge 5 - shapeArea

/* Below we will define an n-interesting polygon.
Your task is to find the area of a polygon for a given n.

A 1-interesting polygon is just a square with a side of length 1.
An n-interesting polygon is obtained by taking the n - 1-interesting
polygon and appending 1-interesting polygons to its rim, side by side.
You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.



Example

For n = 2, the output should be
shapeArea(n) = 5;
For n = 3, the output should be
shapeArea(n) = 13.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Guaranteed constraints:
1 ≤ n < 104.

[output] integer

The area of the n-interesting polygon. */

function shapeArea(n) {
    var area = n*n + (n-1)*(n-1);
    return area;
}
