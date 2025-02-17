/*function signature/sample */
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

const contact="0181923 4567";
const result=validContact(contact)
console.log(result)