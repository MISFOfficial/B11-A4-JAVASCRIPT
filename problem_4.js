/*function signature/sample */
function  validProposal( person1 , person2 ) {
    const count_age=Math.abs(person1.age-person2)
    if (person1.gender === person2.gender) {
        return false;
    }
    else if(count_age>7){
        return false;
    }
    else if(typeof person1!=='object' || typeof person2!=='object' || person1===null || person2===null){
        return 'Invalid'
    }
    else{
        return true;
    }
}

const person1={ name: "Rahul", gender: "male", age: 28 };
const person2={ name: "Joya", gender: "female", age: 21 };

const result=validProposal(person1,person2);
console.log(result)

