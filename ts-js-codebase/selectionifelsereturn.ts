function display(age : number) : boolean

{
    if(age >= 60)
    {
        return true
    }
    else{
        return false
    }
}

var myage1 : number =34
var myage2 : number=90

var result : boolean =false
result= display(myage2)

if(result == true)
{
    console.log("you are senior ctitzn")
}

else{
    console.log("not")
}








