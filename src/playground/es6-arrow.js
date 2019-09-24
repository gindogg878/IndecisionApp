const square = function (x){
    return x * x;
};

/*const squareArrow = (x) =>{
  return x*x;
};*/

//indentical to above arrow function
const squareArrow = (x) => x * x;

const fullName = 'Gino Torres';


const getFirstName = (x) =>{
    return x.split(' ')[0];
};

const getFirstName2 = (x) => x.split(' ')[0];

console.log(getFirstName2(fullName));

console.log(squareArrow(4));

