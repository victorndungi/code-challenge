const ps=require("prompt-sync")
const prompt=ps({sigint: true})
const speed = prompt("Enter the car speed:");
function checkSpeed() {
    

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
