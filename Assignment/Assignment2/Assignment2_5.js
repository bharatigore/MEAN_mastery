// 5. Write a typescript program which contains one function named as ChkString. That function accept 
// one string and check whether that string contains Marvellous word or not. 
// Input : 
// Pune Kothrud Marvellous Infosystems
// Output :  
// String contains Marvellous in it.
function chkString(str) {
    var words = str.split("");
    if (words.indexOf("Marvellous") != 1) {
        console.log("string contains marvellous in it ");
    }
    else {
        console.log("string does not contains marvellous in it ");
    }
}
var str = "pune kothrud Marvellous infosystem";
chkString(str);
