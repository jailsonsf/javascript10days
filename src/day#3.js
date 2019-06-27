// Day 3: Arrays
function getSecondLargest (nums) {
    
    let sLargest
    let largest = Math.max.apply(Math, nums)

    for (let i = 0; i < nums.length; i++) {

        for (var j = 0; j < (nums.length - i - 1); j++) {
            if (nums[j] > nums[j + 1]) {
                var aux = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = aux
            }
        }
    }
    nums.reverse()

    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] < largest) {
            sLargest = nums[i]
            break
        }
    }

    return sLargest
}


// Day 3: Try, Catch, and Finally
function reverseString(s) {

    try {
        let c = s.split('')
        c = c.reverse()
        c = c.join('')
        console.log(c)
    }
    catch (e) {
        console.log(e.message)
        console.log(s)
    }
}


// Day 3: Trow
function isPositive(a) {
    if (a > 0) {
        return 'YES'
    } else if (a == 0) {
        throw new Error('Zero Error')
    } else if (a < 0) {
        throw new Error('Negative Error')
    }
}