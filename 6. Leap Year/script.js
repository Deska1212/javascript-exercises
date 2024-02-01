// Write a program to determine whether a given year is a leap year in the Gregorian calendar



function isLeapYear(year)
{
    return (year % 100 == 0) ? (year % 400 == 0) : (year % 4 == 0);


}

console.log(isLeapYear(2016)); // Expected output: true
console.log(isLeapYear(2000)); // Expected output: true
console.log(isLeapYear(1700)); // Expected output: false
console.log(isLeapYear(1800)); // Expected output: false
console.log(isLeapYear(100));  // Expected output: false