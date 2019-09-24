//arguments object - no longer bound with arrow functions

//es5 function 
/*const add = function(a, b){
    console.log(arguments);
    return a + b;
};*/


//arrow function using arguments will get an error
const add = (a,b) => {
    //console.log(arguments);
    return a + b;
}

//with es5 func you can use arguments in case somebody adds more var then you req//
console.log(add(55,1, 100));


//this keyword - no longer bound
//es5
const user = {
    name: 'Gino',
    cities: ['chicago','boston','Charlotte'],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in ' + city);


        /*this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' +city)
        });*/ 
    }
};
console.log(user.printPlacesLived());


const multiplier = {
    numbers: [1,2,3],
    multiplyBy:  3,
    multiply(){
        return this.numbers.map((product)=> product * this.multiplyBy);

    }



};
console.log(multiplier.multiply());