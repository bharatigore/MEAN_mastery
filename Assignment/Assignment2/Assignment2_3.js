// 3. Write a typescript program which contains one function named as Maximum. That function accepts 
// array of numbers and returns the second largest number from array. 
// Input :23  89 6 29 56 45 77 32 
// Output :
// Second Maximum number is 77 
function secondMaximum(num) {
    var imax = num[0];
    var secmax = 0;
    var i = 0;
    for (i = 0; i < num.length; i++) {
        if (imax < num[i]) {
            secmax = imax;
            imax = num[i];
        }
        else if (num[i] > secmax && num[i] != imax) {
            secmax = num[i];
        }
    }
    return secmax;
}
var num = [23, 89, 6, 29, 56, 45, 77, 32];
var result = secondMaximum(num);
console.log("Second Maximum number is " + result);
