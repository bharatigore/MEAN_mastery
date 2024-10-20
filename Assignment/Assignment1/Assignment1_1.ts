// 1. Write a typescript program which contains one function named as Maximum. That function accepts 
// three parameters and it should returns largest value from three input parameters. 
// Input :  
// Output :  
// 23 
// 89 
// 6 
// Maximum number is 89 

function  Maximum(No1 : number,No2 :number,No3 : number) : number

{
    
    if(No1>  No2 && No1 > No3)
    {
        return No1
    }
    else if( No2 > No1 && No2 > No3)
    {
        return No2
    }
    else{
        return No3
    }

}
var result : number=0

result = Maximum(10,20,30)
console.log("Maximum number is: "+result)