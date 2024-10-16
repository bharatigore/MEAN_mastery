function addition() {
    var value = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        value[_i] = arguments[_i];
    }
    var sum = 0;
    var cnt = 0;
    for (cnt = 0; cnt < value.length; cnt++) {
        sum = sum + value[cnt];
    }
    return sum;
}
console.log(addition());
console.log(addition(10, 20, 30));
console.log(addition(10, 90, 30, 40));
console.log(addition(10, 20, 30, 40, 50, 60));
