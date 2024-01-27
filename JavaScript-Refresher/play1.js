const hobbies = ["reading", "cooking"];
hobbies.push("programming");
console.log(hobbies);
//we don't get error because array is of reference type.

const hobbiesObject = {
    name: 'Soham',
    type: 'Programming'
}

hobbiesObject.age = 21;
console.log(hobbiesObject); //this also works

const number = 12;
// number = 13; // this gives error