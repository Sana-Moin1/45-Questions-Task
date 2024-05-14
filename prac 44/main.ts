function makesandwich(...items: string[]){
console.log("\n Making a sandwich with the following items:");
items.forEach(singleItem => console.log(singleItem));
console.log("\n Now enjoy Sandwich.");
}
// Call the function 3 times with 3 different number of arguments
makesandwich("Chicken", "Cheese","Mayo","Eggs");
makesandwich("Bread" , "Butter");
makesandwich("Bread", "Cheese","Lettuce","Mayo","Tomatoe", "Butter");