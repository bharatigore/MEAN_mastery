// 3. Write a typescript program which contains one function named as DisplayFactors. That function 
// should accept one number and display factors of that number. 
// Input :  
// Output :  
// 1 
// 2 
// 4 
// 5 
// 10 
function Displayfactors(No : number)
{
    var cnt : number=0;
    for(cnt=1; cnt < No; cnt++)
    {
        if((No % cnt) ==0 )
        {
            console.log(cnt)
        }
    }
   
}

Displayfactors(20)
