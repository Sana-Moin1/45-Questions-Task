var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// to make an array of the countries and  print the countries visited
var countirestovisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original order:", countirestovisit);
// Again print the in alphabetical order without modidfying the actual list
console.log("Alphabetical order:", __spreadArray([], countirestovisit, true).sort());
// to print  that the array is in its orignal order
console.log("Origna lorder:", countirestovisit);
// to print the array in reverese order without modifying the orginal list
console.log("Reverse order:", __spreadArray([], countirestovisit, true).reverse());
// to print  that the array is in its orignal order
console.log("Origna lorder:", countirestovisit);
// to reverse , change and print  the  original order of the list now
console.log("Original order Reverse:", countirestovisit.reverse());
// print the array back to its original form
console.log("Back to Orginal order:", countirestovisit.reverse());
// sort the array in the alphabetical order without copying array
console.log("Sort in Alphabetical order:", countirestovisit.sort());
// sort to reverse in Alphabetical order  again now
console.log("Original order Reverse Again:", countirestovisit.reverse());
