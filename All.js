function calculateVAT(price){
    if(typeof price!=='number' || price<0 || price==null){
        return 'Invalid';
    }
    const rate=(price*7.5)/100;
    return rate;
}
console.log(calculateSleepTime())


function validContact(contact){
    if(typeof contact!=='string'){
        return 'Invalid'
    }
    else if(contact.length!==11 || !contact.startsWith("01") || contact.includes(" ")){
        return false;
    }
    else{
        return true;
    }
}


function willSuccess(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }
    let pass = 0;
    let fail = 0;

    for (let i=0; i<marks.length; i++) {
        if (typeof marks[i] !== 'number') {
            continue;
        }
        if (marks[i] >= 50) {
            pass++; 
        } else {
            fail++; 
        }
    }
    return pass > fail;
}


function  validProposal( person1 , person2 ) {
    const difference=7;
    const age_result=Math.abs(person1.age-person2.age)
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



function  calculateSleepTime( times ) {
    if (!Array.isArray(times)) {
        return "Invalid";
    }
    let sum=0;
    for(let i=0; i<times.length; i++){
        if(typeof times[i] !=='number'){
            return "Invalid"
        }
        sum+=times[i];
    }
    const hour=Math.floor(sum/3600);
    const minute=Math.floor((sum%3600)/60);
    const second=Math.floor(sum%60);

    return {hour, minute, second};
}
