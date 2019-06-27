// Day 1: Arithmetic Operators
function getArea(length, width) {
    let area
    area = length * width
    return area
}
function getPerimeter(length, width) {
    let perimeter
    perimeter = 2 * (length + width)
    return perimeter
}


// Day 1: Functions
function factorial(num) {
    var fact = 1
    for (let i = 1; i <= num; i++) {
        fact *= i
    }
    return fact
}


// Day 1: Let and Const
function circle(r) {
    const PI = Math.PI

    console.log(PI * (r * r))

    console.log(PI * 2 * r)
}