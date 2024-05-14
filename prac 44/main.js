"use strict";
function makesandwich(...items) {
    console.log("\n Making a sandwich with the following items: \n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nNow enjoy Sandwich.");
}
// Call the function 3 times with 3 different number of arguments
makesandwich("Chicken", "Cheese", "Mayo", "Eggs");
makesandwich("Bread", "Butter");
makesandwich("Bread", "Cheese", "Lettuce", "Mayo", "Tomatoe", "Butter");
