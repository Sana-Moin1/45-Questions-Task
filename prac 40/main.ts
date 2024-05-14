// Making Album function
function make_album(artistname: string , albumtitle: string , tracks?: number){
// Making Album and its objects
let album:{artist: string , title:string, tracks? : number}={
    artist:artistname,
    title: albumtitle,
};

if (tracks!== undefined){
        album.tracks = tracks
}
return album;
}
// Calling 3 functions and creating 3 variables with different values

let album1= make_album("Sana", "Album Title 2");
let album2=make_album("Moin", "Album Titl 2" );
let album3 =make_album("Eshaal", "Album Title 3", 10);
console.log(album1);
console.log(album2);
console.log(album3);