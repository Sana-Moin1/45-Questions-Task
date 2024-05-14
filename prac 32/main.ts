// array of current user
let current_user =["Sana","Moin","Eshaal","Manaal","Mustafa"];
// array of new user
let newusers = ["Saba","Nirmal","Sweety","mustafa","Sana"];

newusers.forEach(onenew => {
    let condition = current_user.some(onecurrent => onecurrent.toLowerCase() === onenew.toLowerCase())
    if (condition){
console.log(`Sorry ${onenew} is already taken!`);
    }
    else {
        console.log(`This user name ${onenew} is avaialble!`)
    }
    }
)

