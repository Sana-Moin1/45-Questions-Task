let guestlist= ["Sara","Sana","Hina","Sadia"];
let dontCome= guestlist[0];
console.log(dontCome,"Nai aa Sakta");
guestlist.splice(0,1,"Aisha");
guestlist.forEach(guest=>console.log(`Salam,${guest} you are invited for the dinner`));