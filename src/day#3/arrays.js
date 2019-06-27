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