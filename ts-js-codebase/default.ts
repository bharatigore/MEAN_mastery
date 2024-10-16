function calculatePercenatge(marks : number,outof : number=500) : number{

    var result : number =0

    result=(marks / outof) *100
    return result
}

console.log(calculatePercenatge(230))
console.log(calculatePercenatge(230,300))