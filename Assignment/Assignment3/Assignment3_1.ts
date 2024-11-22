// 1. Create one typescript application which contains one class named as Arithmetic. 
// Arithmetic class contains three characteristics (Class data members) as Number1, Number2. 
// Create one parametrised constructor which accept two values and assign it to Number1 and 
// Number2.  
// In Arithmetic class we have to write four methods (Behaviours) as Addition, Subtraction , 
// Multiplication and Division.  
// Addition method will add Number1 , Number2 & return result. 
// Subtraction method will subtract Number1 , Number2 & return result. 
// Multiplication method will multiply Number1 , Number2 & return result. 
// Division method will divide Number1 , Number2 & return result. 
// After designing the class create two objects of that class by providing some hardcoded value. 
// Call all the methods by using both the objects.

class Arithematic{
    No1 : number
    No2 : number

    constructor(X: number,Y:number)
    {
        this.No1=X
        this.No2=Y
    }

    Addition():number{
        var Ans : number =0
        Ans=this.No1 + this.No2
        return Ans

    }

    Subtraction() : number{
        var Ans : number=0
        Ans = this.No1-this.No2
        return Ans
    }
    Multiplication():number{
        var Ans : number =0
        Ans=this.No1 * this.No2
        return Ans

    }

    Division() : number{
        var Ans : number=0
        Ans = this.No1/this.No2
        return Ans
    }
}

var Result : number = 0

var obj1 = new Arithematic(52,42)
Result = obj1.Addition()
console.log("Addition is : "+Result)

Result = obj1.Subtraction()
console.log("Subtraction is : "+Result)

Result = obj1.Multiplication()
console.log("Multiplicatiom is : "+Result)

Result = obj1.Division()
console.log("division is : "+Result)

var obj2 = new Arithematic(32,12)
Result = obj2.Addition()
console.log("Addition is : "+Result)

Result = obj2.Subtraction()
console.log("Subtraction is : "+Result)

Result = obj2.Multiplication()
console.log("Multiplicatiom is : "+Result)

Result = obj2.Division()
console.log("division is : "+Result)