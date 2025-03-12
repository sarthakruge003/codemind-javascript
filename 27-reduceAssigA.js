const array_Numbers = [20,11,40,25,37,49,9,90,60,2,19];

 console.log(`========Sum Of all Num  =========`);
 
let arraynumber = array_Numbers.reduce((runningTotal,element)=>{
     return runningTotal+element;

},0)
console.log(`[20,11,40,25,37,49,9,90,60,2,19]`);
console.log(`Addition is ${arraynumber}`);

console.log(`========Find the Num of mul by 5 and add it=========`);

let arraymul = array_Numbers.filter((element)=>{
    return element%5==0;
    
})
console.log(`Multiple of 5 numbers ${[arraymul]}`);
let array = arraymul.reduce((runningTotal,element)=>{
       return runningTotal+element;
})
console.log(`addition of array is ${array}`);
