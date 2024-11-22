// 3. Create one typescript application which contains one class named as CircleX which sill 
// inherits above Circle class. 
// In CircleX class we have to write one method (Behaviours) as Circumference which will return 
// circumference of circle. 
// After designing the class create two objects of that class by providing some hardcoded value. 
// Call Circumference and Area methods by using both the objects. 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(X) {
        this.PI = 3.14;
        this.rad = X;
    }
    Circle.prototype.Area = function () {
        var Ans = 0;
        Ans = this.PI * this.rad * this.rad;
        return Ans;
    };
    return Circle;
}());
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(X) {
        return _super.call(this, X) || this;
    }
    CircleX.prototype.circumference = function () {
        var Ans = 0;
        Ans = 2 * this.PI * this.rad;
        return Ans;
    };
    return CircleX;
}(Circle));
var Result1 = 0;
var Result2 = 0;
var obj1 = new CircleX(3);
Result1 = obj1.Area();
Result2 = obj1.circumference();
console.log("Area of circle" + Result1);
console.log("Circumference of circle " + Result2);
var obj2 = new CircleX(5);
Result1 = obj2.Area();
Result2 = obj2.circumference();
console.log(" area of circle" + Result1);
console.log("Circumference of circle " + Result2);
