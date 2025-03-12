const array = [2,4,5,6,9,1];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
    
}

console.log(`=========sum the array elements========`);

 
let sum = 0;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum = sum+element;
    console.log(element);
    
    
}
console.log(sum);
console.log(`=========Even Numbers========`);
let arrayNum = [7,2,5,8,6,4,11];
for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    
    if (element%2==0) {
        console.log(element);
        
    }
}
console.log(`========new type=====`);
let add =0;
for (const element of arrayNum) {
    add = add + element;
    console.log(element);
    
}
console.log(add);
 
let arrayMain = [4,8,9,6,2,4,7];
let sub =0;
for (const element of arrayMain) {
    sub = sub-element;
    console.log(element);
    

}
console.log(sub);
console.log(`==new==`);

let arrayM = [4,8,9,6,2,4,7];
let oddSum =0;
for (const element of arrayM) {
    console.log(element);
    
     if (element%2==1) {
        console.log(element);
        oddSum = oddSum + element;
     }

}
 console.log(`=====Array Reverse=====`);
 let arrayNumber = [1,2,3,4,5,6,7,8,9];
 for (let index = arrayNumber.length-1; index >=0; index--) {
    const element = arrayNumber[index];
    console.log(element);
    
    
 }
 
 console.log(`=====New====`);
 let arrayOne = [4,5,6];
 let arrayTwo = [8,10];
//  let result = arrayOne.concat(arrayTwo);
//  console.log(result);
 let onew = [...arrayOne,...arrayTwo];
 console.log(onew);
 
 
