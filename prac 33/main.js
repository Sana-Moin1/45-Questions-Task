"use strict";
// creating array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// using for-loop function
for (let onenumber of numbers) {
    let ordinalending;
    if (onenumber === 1) {
        ordinalending = "st";
    }
    else if (onenumber === 2) {
        ordinalending = "nd";
    }
    else if (onenumber === 3) {
        ordinalending = "rd";
    }
    else {
        ordinalending = "th";
    }
    console.log(`${onenumber}${ordinalending}`);
}
