const name = "Soham";
let age = 21;
let userHobbies = true;
// console.log(name, age, userHobbies);

//function
function whoIsUser(name, age) {
    var namAgeCombination = name+age;
    // console.log(namAgeCombination)
    return "Name is " + name + ", Age is " + age;
}

// console.log(whoIsUser(name, age));
// console.log(namAgeCombination); //won't work because of scoping

//Arrow Functions
function myFunction(a, b) {
    return a+b;
}

const myArrowFunction = (a,b) => {
    return a+b;
}

// console.log(myFunction(1,2), myArrowFunction(1,2));

//incase we have a single statement function
const myArrowFunction1 = (a,b) => a+b;

//Objects

const person = {
    name: 'Soham',
    age: 26,
    greet: function() {
        console.log("Hi, my name is " + this.name);
    }
}

// person.greet(); // this.name will return undefined because this in arrow function refers to global scope.


//Arrays and Array Methods

let hobbies = ["sports", "cooking", 25, true, {name: "baking"}, ["reading", "travelling"]];
console.log(hobbies);


for(let hobby of hobbies) {
    console.log(hobby);
}

for(let index in hobbies) {
    console.log(hobbies[index]);
}

let hobbiesArray = ["sports", "cooking", "painting"];
let hobbiesSubset = hobbiesArray.slice(0,2);
console.log(hobbiesSubset);
let filteredHobbies = hobbiesArray.filter((val) => val!== 'sports');
console.log(filteredHobbies);

let updatedHobbies = hobbiesArray.map((val) => "hobby " + val);
console.log(updatedHobbies);