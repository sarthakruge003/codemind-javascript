//Type function with no arguments or no parameter and no return value
function test() {
    console.log("test");
    
}

test();//function call 

//Type 2 Fun With arguments or parameter and no return value

function square(num) {
    console.log(`Finding the Square ${num}`);
    var result = num*num;
    console.log(`Result is ${result}`);
    
    
}
square(8);
square(19);

// Type 3: Function with argument or parameter and  return value

function addition(n1,n2,n3,n4) {
    console.log(`Number to add ${n1,n2,n3,n4}`);
    var result = n1+n2+n3+n4;
    return result;
    
}

var returnValue = addition(5,7,9,8);
console.log(`Return Value is ${returnValue}`);


function fullname(Firstname,MiddleName,Lastname) {
    console.log(`My full name is `);
    var result =  Firstname + MiddleName + Lastname;
     console.log(result);
     
    
}
fullname("S","P","R");


function fullname(firstName, lastName) {
    var  test = "abc";
    console.log(`my name is : `);
    test.trim()
    var result =  
    console.log(result);
}
fullname("S","R");

