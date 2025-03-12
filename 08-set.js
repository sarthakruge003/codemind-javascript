const mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(10);
mySet.add(50);
console.log(mySet);
mySet.has(50);
console.log(mySet.has(10));

for (const element of mySet) {
    console.log(element);
}
const array = [20,40,90,60,50,50];
new Set(array);
console.log();
