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