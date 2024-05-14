"use strict";
// Creating a function with Defult values
function make_shirt(size = "Large", printmessage = "I love TypeScript") {
    console.log(`Creating ${size} shirt and print ${printmessage}`);
}
// Calling a function by default message
make_shirt();
make_shirt("Medium");
// Print diffreent message for smaal size shirt
make_shirt("Small", "I love JavaScript");
