

// Q1>

// Given a string S, find all characters that are missing from the string S, i.e.,
//  the characters that can make the string a Pangram.Display output in alphabetic order.

//    Input:  The quick brown fox jumps
//     Output:  adglvyz
// ==================================== Answer =================================================

function solution(a) {

    let newarr = []
    let str = a.toLowerCase()
    for (let i = 97; i < 123; i++) {
        let arr = String.fromCharCode(i)

        if (!str.includes(arr))
            newarr.push(arr)
    }
    return newarr.join("")
}


function main() {
    var a = readLine()

    var res = solution(a);
    console.log(res);
}
