/*function signature/sample */
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
const times=[5600]
const result=calculateSleepTime(times)
console.log(result)



