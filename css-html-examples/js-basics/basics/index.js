console.log("hello nauka");
let firstName = 'Nauka';
let last_name = 'Shah';
console.log(firstName);

//vairalble rules 
//-it cannot be a reserved keyword
//-cannot start with a number 
//-cannot contain a space or (-)
//-they are case sensitive

//Best practices for variables:
//-should be meaningful
//first name : use camelCase or underscore : firstName or first_name

const credit = 35;
console.log(credit);

//cannot change value for const 

//Variables  : Primitive and reference variable

/*Primitive
String 
Number 
Boolean
undefined
null

Reference 
Object 
Array
Function
*/

let name ='Nauka';
let age = 25;
let isActive = true;
let totalResult = undefined;
let middleName = null;

console.log(typeof totalResult)

let student = {
    firstName: "Nauka",
    lastName: "SHah",
    age:29
}
const objectKey ='firstName';
const onjectKey ='middle-name';

//DOt notation
student.age = "30"
console.log(student.age);

//Bracket notation
student['firstName'] = 'Bill';
student['middle-name'] = 'Doe';
console.log(student);

//------Arrays

let niceColours = ["Red" , "Blue"]
niceColours[2] = "green";
niceColours[9] = "green";

console.log(niceColours);
console.log(niceColours[0]);
console.log(niceColours.length);

//functions
//performing a task
function greet(name, lastName){ //parameter 
console.log("Hi "+ name + " " + lastName);
/*console.log("Hi ", name , lastName);
console.log(`Hi ${name} ${lastName}`);*/
}

greet("John");
greet("John" , "Doe");

function square(number){
    return number*number;
}

//let newValue = square(4);
//console.log(newValue);
console.log(square(3));

//Operator variables => expressions
//Javascript operators 
/**
 * Arithmetic
 * Assignment
 * Comparision 
 * Bitwise
 * Logical
 */

 //Arithmetic
 console.log("Arithmetic operator")
 
 let x = 10;
 let y=3;
 console.log(x+y)
 console.log(x-y)
 console.log(x/y)
 console.log(x*y)
 console.log(x%y)
 console.log(x**y)

 //Increment
console.log("Increment")
console.log(++x)
console.log(x++)
console.log(x)

 //Decrement
console.log("Decrement")
console.log(x--)
console.log(x)

//Assignment operator
console.log("Assignment operator")
let z = 10;
//z = z+3

++z
z = 1+ z
z += 3;
console.log(z)

//comparison operator
console.log("comparison operator")
console.log(z>0)
console.log(z>=0)
console.log(z<0)
console.log(z<=0)

//equality operator
console.log("equality operator")
let w = "1"
console.log(w == 1) // value : lose equality
console.log(w === 1) //value and data type  : strict equality

console.log('1' == 1)
console.log(true == 1)
console.log(true == true)

//ternary operators 

//if customer has more than 100 points,
let points = 40 
let type = points > 100 ? 'gold' : (points>50 ? 'silver' : 'bronze');
console.log(type)

//variable = condition ? pass : not_pass;

//logical operators 
//returns TRUE if both operands are TRUE 

//Logical OR (||) 
//returns TRUE if one of the operands are TRUE 

console.log(true && true)
console.log(true && false)

let creditScore = 700
let income = 70000
let highIncome = income > 50000;
let goodCreditScore = creditScore > 500;
//let eligibleForLoan = highIncome && goodCreditScore; //&&
let eligibleForLoan = highIncome || goodCreditScore;    //||

//NOT (!) 
let applicationRefused = !eligibleForLoan;

console.log("Eligible" , eligibleForLoan);

console.log("Not eligible" , applicationRefused)

//Logical operator
let userColor = undefined;
let defaultColor = 'blue';

let currentColor = userColor || defaultColor;

console.log(currentColor);

// Bitwise operator 
console.log("Bitwise operator");
console.log(1 | 2); //Bitwise OR
console.log(1 & 2); //Bitwise AND

//Read, write, execute

//operators precedence
let q = (2+ 3) * 4;
console.log(q);