function display(age) {
    if (age >= 60) {
        return true;
    }
    else {
        return false;
    }
}
var myage1 = 34;
var myage2 = 90;
var result = false;
result = display(myage2);
if (result == true) {
    console.log("you are senior ctitzn");
}
else {
    console.log("not");
}
