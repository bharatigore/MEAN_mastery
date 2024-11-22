// 2. Create one typescript application which contains one class named as Circle. 
// Circle class contains two characteristics (Class data members) as Radius, PI. 
// Create one parametrised constructor which accept one value and assign it to Radius. Value of 
// PI member is set to 3.14. 
// In Circle class we have to one method (Behaviours) as Area which will return area of Circle. 
// After designing the class create two objects of that class by providing some hardcoded value. 
// Call the method Area by using both the objects.
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
var Result = 0;
var obj1 = new Circle(3);
Result = obj1.Area();
console.log(Result);
var obj2 = new Circle(3);
Result = obj2.Area();
console.log(Result);
