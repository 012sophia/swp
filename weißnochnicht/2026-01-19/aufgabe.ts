const persons = [{name: "Hermine", age: 14, gender: "f"}, {name: "Harry", age: 15, gender: "m"}, {name: "Ron", age: 2, gender: "m"}, {name: "Draco", age: 115, gender: "m"}, {name: "Luna", age: 14, gender: "f"}];

const sorted = persons.sort((a, b) => a.age - b.age);
console.log(sorted);

const array = persons.filter(person => person.gender ==  "f");
console.log(array);