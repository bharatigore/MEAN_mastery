function Addition(value1:number,value2: number) : number
{
    console.log("Inside addition function")
    var ans : number=0
    ans=value1 + value2
    return ans
}

console.log("start of application")
var Result: number =0
Result=Addition(10,11)
console.log("Addition is: "+Result)
console.log("end of application")