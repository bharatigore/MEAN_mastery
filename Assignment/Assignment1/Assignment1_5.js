// 5. Write a typescript program which contains one function named as Fibonacci. That function accept 
// one number from user and print Fibonacci series till that number. 
// Input : 21
// Output :  
// 1 
// 1 
// 2 
// 3 
// 5 
// 8 
// 13 
// 21
function Fibonacci(No) {
    var cnt1 = 1;
    var cnt2 = 1;
    console.log(cnt1);
    console.log(cnt2);
    var next = cnt1 + cnt2;
    while (next <= No) {
        console.log(next);
        cnt1 = cnt2;
        cnt2 = next;
        next = cnt1 + cnt2;
    }
}
Fibonacci(21);
