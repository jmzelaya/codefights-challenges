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
