let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emir", "Tobias", "Linus"];
console.log(arr1.concat(arr2));

// Push, unshift, pop, shift, sort, slice, and splice
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
fruits.unshift("Grapes");
console.log(fruits.pop());
console.log(fruits.shift());
console.log(fruits.sort());
console.log(fruits.slice(1, 3));
fruits.splice(1, 2, "Peach", "Plum");
console.log(fruits);
