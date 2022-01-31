// grade calculation using function 

function gradeOf(marks) {
    if (marks < 40) {
        console.log("grade is F");
    }
    else if (marks >= 40 && marks < 50) {
        console.log("grade is D");
    }
    else if (marks >= 50 && marks < 60) {
        console.log("grade is C");
    }
    else if (marks >= 60 && marks < 70) {
        console.log("grade is B");
    }
    else if (marks >= 70 && marks < 80) {
        console.log("grade is A");
    }
    else if (80 <= marks) {
        console.log("grade is A+");
    }

}
var stutentMark = [95, 66, 80, 59, 47, 77];
for (let i = 0; i <= stutentMark.length; i++) {
    let value = stutentMark[i];
    gradeOf(value);

}