// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

let sideA = 5;
let sideB = 6;
let sideC = 7;

function findArea(a, b, c)
{
    let s = (a + b + c) / 2;                             // Find the semiperimeter
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));   // Find the area

    return area;
}

console.log(findArea(sideA, sideB, sideC));
