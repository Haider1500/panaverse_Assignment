// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

const person = "ammar haider";
const uppercase = person.toUpperCase();
const lowercase = person.toLowerCase();
const titlecase = person
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log(uppercase, "==========uppercase");
console.log(lowercase, "==========lowercase");
console.log(titlecase, "==========titlecase");
