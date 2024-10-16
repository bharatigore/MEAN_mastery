function calculatePercenatge(marks, outof) {
    if (outof === void 0) { outof = 500; }
    var result = 0;
    result = (marks / outof) * 100;
    return result;
}
console.log(calculatePercenatge(230));
console.log(calculatePercenatge(230, 0));
