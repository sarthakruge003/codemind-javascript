const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
console.log(`============Task 1==============`);

arrayNumbers.forEach((element,index)=>{
    console.log(element,index);
    
})
console.log(`============Task 2==============`);

arrayNumbers.forEach((element => {
    if (element>0) {
        console.log(element);
        
    }
    
}))
console.log(`============Task 3==============`);
let newarray =[ ];
arrayNumbers.forEach((element => {
    if (element<0) {
        newarray.push(element);
         
        
    }
    
}))
console.log(newarray);
console.log(`============Task 4 ==============`);

arrayNumbers.forEach((element => {
    if (element%2 ==0) {
        console.log(element);
        
    }
}))
console.log(`============Task 5 ==============`);

sum = 0;
 arrayNumbers.forEach((element => {

    sum = sum +element;

     
    
}))
console.log(sum);
console.log(`============Task 6 ==============`);

let nwarray =[];
arrayNumbers.forEach((element => {
    if (element%2 ==0) {
         nwarray.push(element);
    }
}))
console.log(nwarray);

