"use strict";
// using string for equality and inequlity
let eggs = "eggs";
// Check equality and inequality function > true
console.log("eggs is equal to eggs");
console.log(eggs == "eggs");
// inequality >false
console.log("egg is not equal to egg");
console.log(eggs != "eggs");
// LowerCase
let UpperCaseEggs = "Eggs";
// Now using lower case =>Equality /true
console.log("Is Eggs become an eggs after converting from upper case to lower case");
console.log(UpperCaseEggs.toLowerCase() == "eggs");
// now using lower case =>Inequality/false
console.log("egg is not equal to egg after converting yo lowercase");
console.log(UpperCaseEggs.toLowerCase() != "eggs");
let ten = 10;
let twenty = 20;
// Equal to
console.log("ten is equal to ten");
console.log(ten == ten);
// is not greater than
console.log("twenty is not greater than  ten");
console.log(twenty != twenty);
// greater  than
console.log("Is tem greater than zero");
console.log(ten > 0);
//  less than
console.log("Is twenty less than 10");
console.log(twenty < 10);
//  greater than equal to
console.log("Is twenty greater than equal to ten");
console.log(twenty >= ten);
// less than equal to 
console.log("Is ten is less than equal to thirty");
console.log(twenty <= 30);
// check using and && ,or || 
// using && > true
console.log("twenty is not equal to ten and twenty is greater than ten");
console.log(twenty != ten && twenty > ten);
//  using or >false
console.log("twenty is not equal to ten and twenty is greater than 30");
console.log(twenty != ten && twenty > 30);
// check using OR|| > true
console.log("twenty is equal to 10 and twenty is less than 30");
console.log(twenty == 10 || twenty < 30);
// check using ||or > false
console.log("twenty is equal to thirty or twenty is not equal twenty");
console.log(twenty == 30 || twenty != 20);
