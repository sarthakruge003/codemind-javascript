const newemp = `{
    "name": "Aleix Melon", 
    "id": "E00245", 
    "role": ["Dev", "DBA"], 
    "age": 23, 
    "doj": "11-12-2019", 
    "married": false, 
    "address": { 
        "street": "32, Laham St.", 
        "city": "Innsbruck", 
        "country": "Austria" 
    }, 
    "referred-by": "E0012" 
}`;
console.log(`=========Convert this one to object =========`);

let empp = JSON.parse(newemp); // ✅ Now it works fine!
console.log( typeof empp);
console.log(empp);

console.log(`=========Log on console role → 'DEV'  =========`);
var dev = console.log(` ${empp.role[0].split(" ")}`);
console.log(`=========Log only last name → 'Melon'  =========`);
var melon = empp.name.split(" ");
console.log(melon);
 
var newarr = melon[1];
console.log(` ${newarr}`);
console.log(`=========Log only joining year of employee → 2019   =========`);
var doj = empp.doj.split("-");
console.log(doj);

 var lastdoj = doj[2];
 console.log(lastdoj);
 
