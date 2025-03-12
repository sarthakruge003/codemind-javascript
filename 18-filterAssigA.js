
console.log(`=========Given array is [20,11,40,25,37,49,9,90,60,2,19]============ `);

console.log(`========1. Finding all numbers which are greater than 50 ========`);

const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];

const newarray = arrayNumbers.filter((element)=>{
    return element>50;
})
console.log(newarray);
console.log(`========Finding all Even Numbers from given array ========`);

const arrayeven = arrayNumbers.filter((element)=>{
    return element%2==0;
})
console.log(arrayeven);
console.log(`========. Finding all Odd numbers from given array========`);

const array = arrayNumbers.filter((element)=>{
    return element%2 !==0;
})
console.log(array);
console.log(`========Finding numbers which are multiple of 5 from given array========`);

let arrayMul = arrayNumbers.filter((element)=>{
    return element%5==0;
})
console.log(arrayMul);
console.log(`========Finding numbers between 26 & 50 from given array ========`);

let arraybet = arrayNumbers.filter((element)=>{
    return 20<element && 50>element;
})
console.log(arraybet);
