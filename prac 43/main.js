"use strict";
function showmagicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function great_magicians(magicians) {
    return magicians.map(name => `The Great ${name}.`);
}
let magiciansname = ["HarryPorter", "Moin", "Sana"];
// Making a copy of original array through sclice function
let copymagiciansname = magiciansname.slice();
// Modify the copied array to include The Great with their names
let copygreatmagicians = great_magicians(copymagiciansname);
// Show both arrays orginal and copied
// Original
console.log("Original Array\n");
showmagicians(magiciansname);
// Copied
console.log("\n Copied Array\n");
showmagicians(copygreatmagicians);
