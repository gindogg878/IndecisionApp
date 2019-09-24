var nameVar = 'Gino';
nameVar = 'gindogg';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Sally';

console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

/*function getPetName(){
    var petName = 'Hal';
    return petName;
}

getPetName();
console.log(petName);*/

//block scoping

var fullName = 'Gino Torres';

if(fullName){
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}