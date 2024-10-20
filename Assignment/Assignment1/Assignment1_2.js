function Area(rad, PI) {
    if (PI === void 0) { PI = 3.14; }
    var Ans = 0;
    Ans = PI * (rad * rad);
    return Ans;
}
var result = 0;
result = Area(5, 22);
console.log(result);
