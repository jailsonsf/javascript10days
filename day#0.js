'use strict'

function greting(parameter) {
    console.log('Hello, World!')
    console.log(parameter)
}

function performOperation(secondInteger, secondDecimal, secondString) {
    
    const firstInteger = 4; 
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';
    
    var sInteger = parseInt(secondInteger)
    console.log(firstInteger + sInteger)
    
    var sDecimal = parseFloat(secondDecimal)
    console.log(firstDecimal + sDecimal)
    
    console.log(firstString + secondString)
    
}