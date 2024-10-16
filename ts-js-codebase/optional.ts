function circlearea(rad : number, PI?: number) : number
{
    var area : number =0;

    if(PI == undefined)
    {
        PI =3.14
    }

    area = PI * rad * rad
    return area
}
console.log(circlearea(5.10,3.14))
console.log(circlearea(5.10))

