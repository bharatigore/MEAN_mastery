// 4. Write a typescript program which contains one arrow function named as ChkArmstrong. That 
// function accepts one numbers and check whether number is Armstrong number or not. 
// Input : 
// 153
// Output :  
// It is Armstrong number 
function isArmstrong(num) {
    var originalnum = num;
    var sum = 0;
    var temp = num;
    var digits = 0;
    while (temp > 0) {
        digits++;
        temp = Math.floor(temp / 10);
    }
    temp = num;
    while (temp > 0) {
        var digit = temp % 10;
        var power = 1;
        for (var i = 0; i < digits; i++) {
            power = power * digit;
        }
        sum = sum + power;
        temp = Math.floor(temp / 10);
    }
    return sum == originalnum;
}
var number = 153;
if (isArmstrong(number)) {
    console.log("It is Armstrong number");
}
else {
    console.log("It is not Armstrong number");
}
