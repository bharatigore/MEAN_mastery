// 2. Write a typescript program which contains one function named as Summation. That function 
// accepts array of numbers and returns the summation of each number from array. 
// Input :  23  6 7 4 5 7
// Output :  
// Addition is 52
function Summation(num) {
    var isum = 0;
    var i = 0;
    for (i = 0; i < num.length; i++) {
        isum = isum + num[i];
    }
    return isum;
}
var num = [23, 6, 7, 4, 5, 7];
var result = Summation(num);
console.log("Addition is " + result);
