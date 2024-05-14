var guestssList = ["Sara", "Saba", "Aman", "Farah", "Kinza"];
var dontCome = guestssList[0];
console.log(dontCome, "Nai AA Saktae");
guestssList.splice(0, 1, "Memo");
console.log("GoodNews,We have a bigger table for the guests");
guestssList.unshift("Bebo");
guestssList.push("Fiza");
var middleindex = Math.floor(guestssList.length / 2);
guestssList.splice(middleindex, 0, "Maha");
console.log("Updatedguest list");
guestssList.forEach(function (guest) { return console.log("Salam,".concat(guest, ", you are invited to the dinner.")); });
console.log("The dinner table has not arrived");
while (guestssList.length > 2) {
    var removedguetslist = guestssList.pop();
    console.log("Sorry, ".concat(removedguetslist, ", we invite you to the dinner"));
    console.log("Invitaion to the last two guest");
    guestssList.forEach(function (guest) { return console.log("Salam,".concat(guest, ",you are invited to the dinner")); });
    guestssList.pop();
    guestssList.pop();
    console.log("Empty", guestssList);
}
