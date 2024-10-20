// 4. Write a typescript program which contains one function named as ChkPrime. That function should 
// accept one number and it should return true if the given number is prime and otherwise return false. 
// Input :  
// Output :  
// It is prime number

function ChkPrime(No : number): boolean
{
    if(No < 2)
    {
        return false
    }
    var cnt : number=0

    for(cnt=2; cnt<No; cnt++)
    {
        if((No % cnt)== 0)
        {
            return false
        }
        
    }
    return true;

}
let result: boolean=ChkPrime(11);
if(result)
{
    console.log("It is prime number")
}
else
{
console.log("it is not prime")
}