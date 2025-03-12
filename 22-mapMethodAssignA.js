console.log(`===========Array is [20,11,40,25,23,11,9,31,60,2,19]=============`);

console.log(`===========New array after adding 10 into each element========= `);

let newarr = [ ];
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
const array = arrayNumbers.map((element)=>{
    return element+10;
    newarr.push(element);
})
console.log(array);
console.log(`==========Cube of each array element=========== `);

const arrayCube = arrayNumbers.map((element)=>{
    return element*element*element;
})
console.log(arrayCube);
console.log(`==========Adding index value into it's corresponding each array element  ===========`);

const nearray = arrayNumbers.map((element,index)=>{
    return element+index;
})
console.log(nearray);
