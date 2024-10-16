var num = new Array(4);
num = [11, 21, 51, 101];
var cnt = 0;
for (cnt = 0; cnt < num.length; cnt++) {
    console.log(num[cnt]);
}
var isum = 0;
for (cnt = 0; cnt < num.length; cnt++) {
    isum = isum + num[cnt];
}
console.log(isum);
