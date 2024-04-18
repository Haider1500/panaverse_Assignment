"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
const person = "Ammar Haider";
const uppercase = person.toUpperCase();
const lowercase = person.toLowerCase();
const titlecase = person
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + person.slice(1))
    .join(" ");
console.log(titlecase);
