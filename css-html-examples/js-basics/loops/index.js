//loops

//for 
// for (initialStatement;condition; incrementStatement)

for(let i=0; i<= 5 ; i++){
    if(i%2 !=0){
        console.log('For : odd number', i)
    }
    
}

//while
//while(condition)
let i=0;
while(i<=5){
    if(i%2 !=0)
    console.log('While : odd number', i)
    i++
}

//do..while
let j=9;
do{
    if(j%2 !=0)
    console.log('Do-While : odd number', j)
    j++
}while(j<=5)


//for..in

const person={
    name: 'Nauka',
    age: 29
};

for(let key in person){
    console.log(key, person[key])
}

//arrays
const colors = ['red' , 'green' , 'blue'];

for(let index in colors){
    console.log(index, colors[index])
}

//for..of
for(let color of colors){
    console.log(color)
}

//break ... continue
let k =0; 
while(k<=10){
    console.log(k)
    k++;
}
