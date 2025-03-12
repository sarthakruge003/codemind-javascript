function voteEligible(age) {
    if (age==0|| age<0  || age>=130 || age==null) 
        {
        console.log(`The age ${age} is Not valid Data`);
        
    } else {
        
    if (age>=18) {
        console.log(`The age ${age} is Eligible`);
        
    }
    else{
        console.log(`The age ${age} is not Eligible`);
    }
}
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);


