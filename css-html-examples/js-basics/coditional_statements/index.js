//if..else..

let hour = 10

if(hour > 6 && hour <12){
    console.log("Good morning!")
}else if (hour>12 && hour < 18){
    console.log("Good afternoon!")
}else {
    console.log("Good evening!")
}

//switch 

let role  = 'guest'

switch(role){
    case 'guest': 
        console.log("guest User");
        break;

    case 'moderator':
        console.log("Moderator User!");
        break;

    default:
        console.log("Unknown User!");
}

if(role == 'guest') console.log("Guest User!");
else if (role == 'Moderator') console.log("Moderator User!");
else console.log("Unknown User!");
