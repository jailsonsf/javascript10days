function vowelsAndConsonants(s) {
    for (const c of s) {
        if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
            console.log(c)
        }
    }

    for (const c of s) {
        if (c != 'a' && c != 'e' && c != 'i' && c != 'o' && c != 'u') {
            console.log(c)
        }
    }

}