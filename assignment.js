console.log(`====== Task 1 ======`);
function greaterNumber(n1,n2) {
    var result = n1 > n2? n1:n2 ;
    console.log(`The Greater Number is : ${result}`);
    
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log(`====== Task 2 ======`);
 b
function isEvenOrOddNum(num) {
    var ev = num%2==0 ? "EVEN" : "ODD";
    return ev;
 }
    
var result = isEvenOrOddNum(29);
console.log(`The 29 is ${result}`);


var result = isEvenOrOddNum(44);
console.log(`The 44 is ${result}`);

var result = isEvenOrOddNum(0);
console.log(`The 0 is ${result}`);

var result = isEvenOrOddNum(101);
console.log(`The 101 is ${result}`);

console.log(`====== Task 3 ======`);

function evenoddlength(str) {
    var result = str.length;
 
     var result = result%2 == 0 ? "Even" : "ODD";
    return result;

     
    
    
}
var result = evenoddlength("JavaScript");
console.log(`JavaScript string Length is ${result}`);

var result = evenoddlength("developer");
console.log(`developer string Length is ${result}`);
var result = evenoddlength("Google");
console.log(`Google string Length is ${result}`);


