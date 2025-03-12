console.log(`====== splice() ===========`);

const arrayOne = [20, 30, 40, 50, 60];
console.log(arrayOne);
const spliceAfter2 = arrayOne.splice(2);
console.log(spliceAfter2);
console.log(arrayOne);

console.log(`====================`);
const arrayTwo = [20, 30, 40, 50, 60, 90, 10];
console.log(arrayTwo);
const deletedElements = arrayTwo.splice(3, 2);
console.log(deletedElements);
console.log(arrayTwo);



let arrayThree = [1,45,89,45,60];
 
  arrayThree.splice(2,0,11);
 console.log(arrayThree);
 

 console.log(`===== Splice to add elements without deleting any existing elements========`);
 const arrayThree = [20, 30, 40, 50, 60, 90, 10];
 console.log(arrayThree);
 arrayThree.splice(2, 0, 111, 333);
 console.log(arrayThree);
 
 console.log(`===== Splice to add elements by deleting any existing elements========`);
 const arrayFour = [20, 30, 40, 50, 60, 90, 10];
 console.log(arrayFour);
 arrayFour.splice(2, 1, 8888, 900);
 console.log(arrayFour);


 let arraynum = [10,20,30,40,50,80,90];
 console.log(arraynum);
 console.log(`Length is ${arraynum.length});
 