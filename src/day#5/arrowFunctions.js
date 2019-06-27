function modifyArray(nums) {
    let result = [];

    const modify = nums.map(s => (s % 2 === 1) ? result.push(s * 3) : result.push(s * 2));

    return result;
}
