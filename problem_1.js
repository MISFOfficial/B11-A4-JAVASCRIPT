/*function signature/sample */
function calculateVAT(price){
    if(typeof price!=='number' || price<0){
        return 'Invalid';
    }
    const rate=(price*7.5)/100;
    return rate;
}
const price=1500;
const result=calculateVAT(price)
console.log(result)

done