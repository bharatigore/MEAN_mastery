// 3. Create one typescript application which contains one class named as CircleX which sill 
// inherits above Circle class. 
// In CircleX class we have to write one method (Behaviours) as Circumference which will return 
// circumference of circle. 
// After designing the class create two objects of that class by providing some hardcoded value. 
// Call Circumference and Area methods by using both the objects. 


class Circle{
    rad : number
    PI : number=3.14

    constructor(X : number)
    {
        this.rad=X
    }

    Area() : number{

        var Ans : number=0
        Ans= this.PI * this.rad * this.rad
        return Ans
    }

}

class CircleX extends  Circle
{
   

    constructor(X : number)
    {
        super(X)
    }

    circumference() : number{

        var Ans : number=0
        Ans= 2 * this.PI * this.rad
        return Ans
    }

}
var Result1 : number=0
var Result2 : number=0

var obj1=new CircleX(3)
Result1=obj1.Area()
Result2=obj1.circumference()
console.log("Area of circle"+Result1)
console.log("Circumference of circle " +Result2)

var obj2=new CircleX(5)
Result1=obj2.Area()
Result2=obj2.circumference()
console.log(" area of circle"+Result1)
console.log("Circumference of circle "+Result2)