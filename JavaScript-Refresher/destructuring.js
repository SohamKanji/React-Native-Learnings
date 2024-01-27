const person = {name:'Soham',age:21,occupation:'Developer'};
// const name = person.name;
// const age = person.age;
// const occupation = person.occupation;

//destructuring
// const {name, age, occupation} = person;
// console.log(name, age, occupation); 

// const numbers = [1,2,3,4,5];

// const [first, second, third] = numbers;

// console.log(first, second, third);

const {occupation, ...rest} = person;
console.log(occupation, rest);