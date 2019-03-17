// Day 0: Hello, World!
function greting(parameter) {
    console.log('Hello, World!')
    console.log(parameter)
}


// Day 0: Data Types
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