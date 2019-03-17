// Day 2: Conditional Statements: Is-Else
function getGrade(score) {
    let grade
    
    if(score <= 30 && score > 25) {
        grade = 'A'
    } else if (score <= 25 && score > 20) {
        grade = 'B'
    } else if (score <= 20 && score > 15) {
        grade = 'C'
    } else if (score <= 15 && score > 10) {
        grade = 'D'
    } else if (score <= 10 && score > 5) {
        grade = 'E'
    } else if (score <= 5 && score >= 0) {
        grade = 'F'
    }

    return grade
}


// Day 2: Conditional Statements: Switch
function getLetter(s) {
    let letter

    switch (s[0]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            letter = 'A'
            break

        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            letter = 'B'
            break

        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            letter = 'C'
            break

        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
            letter = 'D'
            break

        default:
            break;
    }

    return letter
}


// Day 2: Loops
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