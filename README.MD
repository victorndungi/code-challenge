<!-- //  A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40

function grade(){
    const marks = prompt('enter student marks')
    
    let grade 
    if (marks > 79){
        return  'A'
    } else if (marks >=60 && marks <=79){
        return  'B'
    } else if (marks >=49 && marks <=59){
        return  'C'
    } else if (marks >=40 && marks <=49){
        return  'D'
    } else if (marks < 40){
        return  'E'
    }
      return (grade)

}console.log ("marks")


// Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

//    > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.
function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritPointsPer5Kmph = 5;
    const maxPointsBeforeSuspension = 12;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / demeritPointsPer5Kmph);
        console.log(`Points: ${demeritPoints}`);
        if (demeritPoints > maxPointsBeforeSuspension) {
            console.log("License suspended");
        }
    }
    return checkSpeed
}

   -->
   This repository contains solutions to three toy problems written in JavaScript. Each problem is implemented as a function that performs a specific task. The solutions include:

1. **Student Grade Generator**
2. **Speed Detector**
3. **Net Salary Calculator**

## Challenge 1: Student Grade Generator

This function prompts the user to input student marks between 0 and 100 and outputs the corresponding grade based on the following criteria:
- A: greater than 79
- B: 60 to 79
- C: 50 to 59
- D: 40 to 49
- E: less than 40

### Usage

To use the Student Grade Generator:

1. Open a JavaScript console in your browser.
2. Copy and paste the following code:

```javascript
function getGrade() {
    let mark = prompt("Enter the student's mark (0-100):");

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
    } else if (numMark >= 60) {
        console.log("Grade: B");
    } else if (numMark >= 50) {
        console.log("Grade: C");
    } else if (numMark >= 40) {
        console.log("Grade: D");
    } else {
        console.log("Grade: E");
    }
}

getGrade();
Challenge 2: Speed Detector
This function takes the speed of a car as input and outputs "Ok" if the speed is less than 70. If the speed is greater than 70, it calculates demerit points and prints the total number of points. If the points exceed 12, it prints "License suspended".

Usage
To use the Speed Detector:

Open a JavaScript console in your browser.
Copy and paste the following code:
javascript
Copy code
function checkSpeed() {
    let speed = prompt("Enter the car's speed:");

    if (speed === null) {
        console.log("Input was cancelled");
        return;
    }

    let numSpeed = parseInt(speed, 10);

    if (isNaN(numSpeed) || numSpeed < 0) {
        console.log("Invalid input. Please enter a valid speed.");
        return;
    }

    const speedLimit = 70;
    const demeritPointsPer5Kmph = 5;
    const maxPointsBeforeSuspension = 12;

    if (numSpeed <= speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((numSpeed - speedLimit) / demeritPointsPer5Kmph);
        console.log(`Points: ${demeritPoints}`);
        if (demeritPoints > maxPointsBeforeSuspension) {
            console.log("License suspended");
        }
    }
}

checkSpeed();
