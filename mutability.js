const clone1 = {...person}
const clone2 = {...person}
const samePerson = person

Object.freeze(clone1)

function change(str) {
    person.age = person.age+1
    person.country = "FR"
}
change()

console.log(person.age === 78); // Should be true
console.log(person.country === "FR"); // Should be true

console.log(clone1.age === 77); // Should be true
console.log(clone1.country === "US"); // Should be true

console.log(clone2.age === 77); // Should be true
console.log(clone2.country === "US"); // Should be true

console.log(samePerson.age === 78);
console.log(person.name==='Rick') // Should be true
console.log(samePerson.country === "FR"); // Should be true


