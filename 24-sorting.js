const frdList = ["stew","jenny","menny"];
let frd = frdList.reverse();
// console.log(frd);
// console.log(frdList);

const li = ["stew","jenny","menny"];
 li.sort();
li.reverse()
 console.log(li);
// console.log(frdList);

const arrayNum = [9,45,6,7,3,1,5];
//arrayNum.sort();//sorting
arrayNum.sort((a,b)=>{
    return a>b? 1: -1;
});
console.log(arrayNum);
arrayNum.reverse();
console.log(arrayNum);

