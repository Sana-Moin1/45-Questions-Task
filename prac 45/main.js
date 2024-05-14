// Create car function with car objects and optional options
function createcar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // make a car object including items like manufacture and model
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // add additional options to te car objects
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call the function to create a car object
var mycar = createcar("Toyota", "Corolla", "color:Black", "Sunroof:True");
// Print the variables to ensure that the information is stored correctly in the car objects
console.log(mycar);
