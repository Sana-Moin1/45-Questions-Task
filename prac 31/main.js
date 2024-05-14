"use strict";
let newuser = ["Admin", "Eshaal", "Moin", "Mustafa", "Manaal"];
newuser = [];
// to calculate length of an array use> length function
// this command will not work becuz length=0 condition is false becuz array in not emepty  and else condition will work
if (newuser.length === 0) {
    console.log("'\Your array is empty you need to add new users.\'");
}
else {
    newuser.forEach(oneuser => {
        if (oneuser === "Admin") {
            console.log(`Hello, ${oneuser}, would you like to check the reports.`);
        }
        else {
            console.log(`Hello,${oneuser} thankyou for login.`);
        }
    });
}
