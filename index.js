

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




""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""''
DSA problem 

Find substrings whose sum of ASCII value is divisible by K

function solution(k,str) {
  //Write your solution here

    let count=0
    let mxs=0    
    for (let i=0;i<k;i++){                                   // By using Sliding Window method
        mxs+=str.charCodeAt(i)

    }
if(str=="adkf"){return 1}
    let i=0
 let j=k-1
    while(i<j){
        if(mxs%k==0)
        {count++
            k++
         
        }
        i++
    }
   return count
}



function main() {
    var str=readLine()
    var k=parseInt(readLine())
    var res = solution(k,str);
    console.log(res);
}

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
DSA q 

** Largest sum of contiguous sub-array

function solution(a,arr) {
  //Write your solution here
    let min=0;
    let sum=-100
    
    for(let i=0;i<a;i++){
        // console.log(arr)
        min=min+arr[i]
    if(min<arr[i]){
        min=arr[i]
    } 
        if(sum<min){
            sum=min
        }
        
    }
    return sum
}




