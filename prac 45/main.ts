// Create car function with car objects and optional options
function createcar (manufacturer , model, ...options){
// make a car object including items like manufacture and model
let car = {
    manufacturer:manufacturer,
     model:model
};
// add additional options to te car objects
options.forEach(option => {
    let[key,value]= option.split(":");
    car[key.trim()] = value.trim();
});
return car;
}

// call the function to create a car object
let mycar = createcar("Toyota","Corolla", "color:Black", "Sunroof:True");
// Print the variables to ensure that the information is stored correctly in the car objects
console.log(mycar);