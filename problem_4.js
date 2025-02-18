/*function signature/sample */
function  validProposal( person1 , person2 ) {
    // return {person1, person2}
    const difference=7;
    const age_result=Math.abs(person1.age-person2.age)
    // console.log(age_result)
    if(age_result>difference){
        return false;
    }
    else if(person1.gender===person2.gender){
        return false;
    }
    else if(typeof person1!=='object' || typeof person2!=='object'){
        return 'Invalid';
    }
    else{
        return true;
    }
}

const person1="Mizan"
const person2= { name: "mitu", gender: "male", age: 32 }
const result=validProposal(person1, person2)
console.log(result)



