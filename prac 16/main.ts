//prepare the guest list Array
let guestslists=["Moin","Sana", "Eshaal","Mustafa","Manaal"];
// guest who is not coming
let dontCome=guestslists[0];
//Print guest name who is not coming
console.log(dontCome,"Nai a Raha Hai");
// Replace guest # 1 with guest who is not coming
guestslists.splice(0,1,"Maha");
// Print & tell  guests that table is bigger
console.log("Good News,We have bigger table Now");
// Add guest name at the begining of the Aray
guestslists.unshift("Ahad");
// Add guest name at the ending of the guests
guestslists.push("Miraal");
// Find the  guests No at the middle of the Array
let middleindex:number= Math.floor(guestslists.length/2);
//Add guestName to the miidle of the Array
guestslists.splice(middleindex,0,"Bebo");
//Print the message one by one to each to guest
guestslists.forEach(oneguest => console.log(`Salam ${oneguest}, would like to have dinner with me`));
