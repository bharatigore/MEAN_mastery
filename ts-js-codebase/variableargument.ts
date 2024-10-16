function addition(...value : number[]) :number
{
    var sum : number =0
    var cnt : number=0

    for(cnt=0; cnt < value.length; cnt++)
    {
        sum = sum + value[cnt]
    }
    return sum

}
console.log(addition())
console.log(addition(10,20,30))
console.log(addition(10,90,30,40))
console.log(addition(10,20,30,40,50,60))
