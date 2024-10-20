function Displayfactors(No) {
    var cnt = 0;
    for (cnt = 1; cnt < No; cnt++) {
        if ((No % cnt) == 0) {
            console.log(cnt);
        }
    }
}
Displayfactors(20);
