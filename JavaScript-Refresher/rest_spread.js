const hobbies = ["sports", "cooking"];
const copiedHobbiesArray = [...hobbies, ...["travelling"]];
console.log(copiedHobbiesArray);

const person = {name:'Soham', age:26}
const copiedPerson = {...person, ...{"hobby":"travelling"}};
console.log(copiedPerson);

//rest operator

const toArray = (...args) => args;

console.log(toArray(1,2,3));