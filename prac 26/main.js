"use strict";
let alien_Color = "green";
if (alien_Color === "green") {
    console.log("Player earns 5 points for shooting alien.");
}
// () is used because conditions are not applied in else satement and else  is a false 
//  else will not print because it is false
else {
    console.log("Player just earned 10 points.");
}
// Second version
// if condition is false it will not print
if (alien_Color === "white") {
    console.log("I come from if statement.");
}
else {
    console.log("I come from else statement.");
}
