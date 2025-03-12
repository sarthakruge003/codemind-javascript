console.log(`=============================================Task 1==================================================`);

let professor = {
    firstName: "Jenny",
    lastName: "Gates",
    age: 22,
    college: "Government College Pune",
    subject: "Maths",
    experience: 3,
    degrees: {
        engineering: "CSE",
        PHD: "Adv Computing",
        MTech : "CSE",
        
    },   

    certification: [  
        "Hacker Rank",
        "Certificate in IFE Course", 
        "Certificate in Adv Programming"
    ],
    

 };

console.log(professor);
console.log(`=============================================Task 2==================================================`);

console.log(professor.degrees);

console.log(`=============================================Task 3==================================================`);

console.log(professor.certification);  

console.log(`=============================================Task 4==================================================`);

professor.totalExperience = "14 Years",
console.log(`The Total Experience ${professor.totalExperience}`);

console.log(`=============================================Task 5-After object creation  & Task 6==================================================`);

professor.firstName = "Ganesh",
professor.subject = "Science"
console.log(professor);
console.log(`=============================================Task 7==================================================`);

 professor.certification.push("Oracal Certified");
console.log(professor.certification);

console.log(`=============================================Task 8==================================================`);


let mee = (professor.certification[3]);
console.log(`Last Element in Certification is ${mee}`);

console.log(`=============================================Task 9==================================================`);

for (const key in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, key)) {
        const element = professor[key];
        console.log(`${key}====> ${element}`);
        
    }
}

