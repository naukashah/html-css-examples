function calculateMax(number1, number2){ //parameter 
    if(number1 > number2)
        return number1
    return number2

    return (number1>number2) ; x : y 
}

let number = calculateMax(10,20);
console.log(number)


function isLandscape(width,height){
    /*if(width > height)
        return true
    return false*/
    /*return (width>height) ? true : false;*/

    return(width>height)
}
console.log(isLandscape(7,5))


function fizzbuzz(fizzbuzzNumber){
    if(typeof fizzbuzzNumber !== 'number'){
        console.log("not a number")
    }
    if((fizzbuzzNumber%3 === 0) || (fizzbuzzNumber%5 === 0)){
        console.log("FizzBuzz")
    }
    if(fizzbuzzNumber%3 === 0){
       console.log("Fizz")
    }else if(fizzbuzzNumber%5 === 0){
        console.log("Buzz")
    }
    else{
        console.log("undefined")
    } 
}
fizzbuzz("nauka")

//spedd limit - 70
//every 5 miles - 1 point 
//more than 12 points - license suspended
//math.floor

function checkSpeed(speed){
    const maxSpeed = 70;
    const milesPerPoint = 5;
    const maxPoint = 12;

    if(speed< maxSpeed + milesPerPoint){
        console.log("ok");
        return;
    }
   
    const points = Math.floor((speed - maxSpeed)/ milesPerPoint);
    if(points >= maxPoint){
            console.log("License Suspended");
    }else{
            console.log("Points", points);
    }
}
checkSpeed(180);

// exercise 3: 
function showNumbers(limit){
    let numberTOCheck = limit;

    function ifOdd(numberTOCheck){
        if(numberTOCheck%2 ==0){
            return "Even"
        }else{
            return "Odd"
        }
    }

    for(let i=0; i<=limit; i++){
        console.log(i, ifOdd(i))
    }
}
showNumbers(10)

///second way 
function showN(limit, options={
    startingPoint :0,
    eventOddText :"Odd",
    eventEvenText : "Even",
}){
    for(let i=options.startingPoint; i<=limit; i++){
        console.log(i, (i%2 ===0)  ?  options.eventOddText: options.eventOddText);
    }
}

showN(5)

//exercise 4: 
const array = [0, 1, 2, 3, 4];
//count how many truthy values in array 
function countTruthy(array){
    let count = 0
    for (let value of array ){
        if(value){
            count++
        }
    }
    return count++
}
console.log(countTruthy(array))


const movie={
    title: 'movie title',
    releaseYear:2020,
    rating:4.5,
    director:'abc',
};
showProperties(movie)

function showProperties(obj){
    for(let key in obj){
        if(typeof obj[key] === 'string'){
            console.log(key, obj[key])
        }
        
    }
}

//exercise for practice

//Limit = 10;
//write a function that calculate the sum of multiples
//Multiples of 3 : 3+6+9 
//Multiples of 5 : 5+10

function calSumOfMultiples(number, limit){
    if(number > limit){
        return "number is larger than limit";
    }
    let sum = 0;

    for(let i = 0; i<=limit ; i++){
        if(i % number == 0){
            sum +=i;
            console.log("Number :", i)
        }
    }
    return sum;
}

console.log("Sum of above numbers", calSumOfMultiples(4,18))


const arrayToCalculate = [3, 5];
function calSumOfMultiplesArray(arrayToCalculate, limit){
    let sum = 0;
    for(let i in arrayToCalculate){
        if (i > limit){
            return "number is larger than limit";
        }else{
            for(let j = 0; j<=limit ; j++){
                if(j % number == 0){
                    sum +=j;
                    console.log("Number :", j)
                }
            }
        }
        return sum;
    }
}

console.log("Sum of above numbers", calSumOfMultiplesArray(4,18))