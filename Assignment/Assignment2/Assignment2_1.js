// 1. Write a typescript program which contains one function named as Maximum. That function accepts 
// array of numbers and returns the largest number from array. 
// Input :  
// Output :  23  89 6 29 56 45 77 32
// Maximum number is 89 
function Maximum(num) {
    var imax = num[0];
    var i = 0;
    for (i = 0; i < num.length; i++) {
        if (imax < num[i]) {
            imax = num[i];
        }
    }
    return imax;
}
var num = [23, 89, 6, 29, 56, 45, 77, 32];
var result = Maximum(num);
console.log("Maximum number is " + result);
