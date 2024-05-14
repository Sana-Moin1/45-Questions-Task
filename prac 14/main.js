var guestlist = ["Sara", "Sana", "Hina", "Sadia"];
var dontCome = guestlist[0];
console.log(dontCome, "Nai aa Sakta");
guestlist.splice(0, 1, "Aisha");
guestlist.forEach(function (guest) { return console.log("Salam,".concat(guest, " you are invited for the dinner")); });
