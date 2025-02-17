/*function signature/sample */
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
const marks=[60, 70, 80, 40, 30];
const result=willSuccess(marks)
console.log(result)


