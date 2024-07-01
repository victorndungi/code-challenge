const ps = require("prompt-sync")
const prompt = ps()
const mark = prompt("Enter the student's mark (0-100):");
function getGrade() {
    

    if (mark === null) {
        console.log("Input was cancelled");
        return;
    }

    let numMark = parseInt(mark, 10);

    if (isNaN(numMark) || numMark < 0 || numMark > 100) {
        console.log("Invalid input. Please enter a number between 0 and 100.");
        return;
    }

    if (numMark > 79) {
        console.log("Grade: A");
    } else if (numMark >= 60 && numMark<=79) {
        console.log("Grade: B");
    } else if (numMark >= 50) {
        console.log("Grade: C");
    } else if (numMark >= 40) {
        console.log("Grade: D");
    } else {
        console.log("Grade: E");
    }
   
}

 getGrade()
