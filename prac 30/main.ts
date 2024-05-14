let user = ["Sana","Eshaal", "Manaal","Mustafa","Admin"];
// use for Each Loop Method
user.forEach(oneuser =>{
    if(oneuser === "Admin"){
        console.log(`Hello,${oneuser}, would you like to check the reports.`);
}else {
console.log(`Hello, ${oneuser}, thankyou for login.`);
}
})