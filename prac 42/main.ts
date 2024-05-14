function showmagicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}

function great_magicians(magicians:string[]){
    return magicians.map(name =>`The Great ${name}.`);
}

let magiciansname = ["HarryPorter","Moin", "Sana"];

let show1magicians= great_magicians(magiciansname);
showmagicians(show1magicians);