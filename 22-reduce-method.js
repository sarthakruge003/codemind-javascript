const array = [4, 9, 6, 5, 3, 8, 1];
const sum = array.reduce( (runningTotal, element)=>{
    return runningTotal + element;
}, 0);
console.log(sum);


const mul = [4, 9, 6, 5, 3, 8, 1];
const mult = mul.reduce( (runningTotal, element)=>{
    return runningTotal * element;
}, 1);
console.log(mult);
