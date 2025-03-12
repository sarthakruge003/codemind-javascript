var greet = "Good Morning";
var greetlength=greet.length;
console.log("Total Number of characters:",greetlength);

 var charAt0 = greet.charAt(0);
 console.log(charAt0);
 
 var charAt = greet.charAt(11);
 console.log(charAt);
 console.log(`${charAt}`);
 
 
 var link = "https://www.google.com/search?q=vegamovies&rlz=1C1CHBF_enIN1112IN1112&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQkxNTc2ajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8";
 var result = link.charAt(10)
 console.log(`result after charAt ${result}`);


 //String Template Backtick `,$,{}

 var greet = "Good Morning";
var indexofM=greet.indexOf("M");
console.log(indexofM);


var replaceresult = greet.replace("Morning","Evening");
console.log(`Replace Result is : ${replaceresult}`);

var greet = "Good Morning";
var upper=greet.toUpperCase("greet")
console.log(upper);

var city = "  PUNE  "
console.log(`Before trim:${city},and its length:${city.length}`);
var trimresult = city.trim();
console.log(`After trim:${trimresult},and its length:${trimresult.length}`);

 var country = "  INDIA  "
 var trimstrat = country.trimStart();

 console.log(`Total Spaces available in the start is ${country.length-trimresult.length}`);

 
 
 var greet = "Good Morning";
 var Result = greet.includes("nin");
 console.log(`Result of includes ${Result}`);
 

var greet = "HELLO DEVELOPERS"
var Result = greet.slice(0,3)
console.log(`Result after slice 0-4 ${Result}`);

var meassage = "HELLO PUNE";
var Result = meassage.substring(0,4);
console.log(`Result after substring 0-4 ${Result}`);

var city = "I LOVE PUNE";
var Result = city.split(" ");
console.log(Result);

var str = "My Inspiration Is Ratan Tata Sir";
var result = str.split(" ");
console.log(result);
console.log(`total words:${result.length}`);

