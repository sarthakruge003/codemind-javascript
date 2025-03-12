const fruit_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Orignal Array ${fruit_seasonal}`);
console.log(`=================================================================================================================`);
let result = fruit_seasonal[0];
console.log(`The First Element is ${result}`);

let result1 = fruit_seasonal[fruit_seasonal.length-1];
console.log(`The Last Element is ${result1}`);
console.log(`=================================================================================================================`);
console.log(`Add element → Papaya before the element 'Banana' and then log array on console`);

const fruit_seasonal1 = ["Banana","Orange","Apple","Mango","Water Melon"];

fruit_seasonal1.unshift("Papaya");
 console.log(fruit_seasonal1);
 console.log(`=================================================================================================================`);
 console.log(`Updated Array ${fruit_seasonal1}`);
 
 console.log(`Remove 'Mango' from the array`);
fruit_seasonal1.splice(4,1);
console.log(fruit_seasonal1);
console.log(`=================================================================================================================`);
console.log(`Updated Array ${fruit_seasonal1}`);
console.log(`Add element or insert an element 'Pineapple' at the last position`);
fruit_seasonal1.push("Pineapple");
console.log(fruit_seasonal1);
console.log(`=================================================================================================================`);
console.log(`Updated Array ${fruit_seasonal1}`);
console.log(`Insert an element - 'Dragon Fruit' before "Water Melon`);
fruit_seasonal1.splice(4,0,"Dragon Fruit");
console.log(fruit_seasonal1);
console.log(`=================================================================================================================`);
console.log(`Updated Array ${fruit_seasonal1}`);
console.log(`Replace an element 'Orange' with 'Kiwi'`);
fruit_seasonal1.splice(2,1,"Kiwi");
console.log(fruit_seasonal1);
console.log(`=================================================================================================================`);
console.log(`Updated Array ${fruit_seasonal1}`);
console.log(`Log the elements starting from index 1 to 4`);
let newone = fruit_seasonal1.splice(1,4);
console.log(newone);
console.log(`=================================================================================================================`);console.log(`Original Array ${fruit_seasonal1}`);
console.log(`Only select last 3 element and log on console: Use the length property`);
let fruits = ['Papaya', 'Banana', 'Orange', 'Apple', 'Dragon Fruit', 'Water Melon', 'Pineapple'];

let lastThreeFruits = fruits.slice(-3);

console.log(lastThreeFruits);

 
