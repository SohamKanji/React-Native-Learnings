var name = "Soham";
var age = 21;
var userHobbies = true;
console.log(name, age, userHobbies);

//function
function whoIsUser(name, age) {
    var namAgeCombination = name+age;
    console.log(namAgeCombination)
    return "Name is " + name + ", Age is " + age;
}

console.log(whoIsUser(name, age));
// console.log(namAgeCombination); //won't work because of scoping

