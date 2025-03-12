
function stringHandsOn (){
    console.log("===== Task 1 =====");S

    var str="   Hey you are doing good, keep it up   ";
    console.log(str);
    
    console.log("===== Task 2 =====");
    console.log(`The length of string is : ${str.length}`);
    
    console.log("===== Task 3 =====");
    var result = str.trim()
    console.log(`The length of string after spaces is :${result.length}`);
    
    console.log("===== Task 4 =====");
    console.log(`The total number of extra Spaces is :${str.length-result.length}`);

    console.log("===== Task 5 =====");
    console.log(`First and Last Character is ${result.charAt(0)} & ${result.charAt(result.length-1)}`);
    
    console.log("===== Task 6 =====");
    var abc = result.split(" ");
    console.log(`Total words in String is ${abc.length}`);
    
    console.log("===== Task 7 =====");
    console.log(`The index of good is ${str.indexOf("good")}`);
    
    console.log("===== Task 8=====");
    console.log(`The substring strating fro index 22 is : ${str.substring(22)}`);

    console.log("===== Task 9 =====");
    console.log(`String ends with "up" ${result.endsWith("up")}`);

    console.log("===== Task 10 =====");
    console.log(`String ends with "Hey" ${result.startsWith("Hey")}`);

    
    

     
    


    

    
}
stringHandsOn();