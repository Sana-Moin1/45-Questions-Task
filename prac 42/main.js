"use strict";
function showmagicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function great_magicians(magicians) {
    return magicians.map(name => `The Great ${name}.`);
}
let magiciansname = ["HarryPorter", "Moin", "Sana"];
let show1magicians = great_magicians(magiciansname);
showmagicians(show1magicians);
