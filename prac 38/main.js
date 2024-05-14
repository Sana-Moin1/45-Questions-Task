"use strict";
//  Make a function and keep country at defult
function desscribe_city(City, Country = "Pakistan") {
    console.log(`${City} is in country ${Country}.`);
}
// Calling Function by entering the city
desscribe_city("Karachi");
desscribe_city("Islamabad");
// Calling function with diferent city and country
desscribe_city("NewYork", "United States of America");
