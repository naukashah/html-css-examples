/*
var myForm = document.getElementById('contact-form');
if(firstName!=null && email!=null &&age!=null){
    myForm.clickEventListner('submit', function () {
        window.alert(firstName);
    });
}

document.getElementById("myBtn").addEventListener("click", function() {
    document.getElementById("demo").innerHTML = "Hello World";
  });

  */

const show = () => {
/*
    var empt1 = document.forms["contact-form"]["student-name"].value;
    var empt2 = document.forms["contact-form"]["student-email"].value;
    var empt3 = document.forms["contact-form"]["age"].value;
    var empt4 = document.forms["contact-form"]["message"].value;
*/
    const firstName = document.getElementById('student-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('student-email').value;
        const age = document.getElementById('age').value;
        const country = document.getElementById('age').value;
        const message = document.getElementById('message').value;
    console.log(firstName , email, age, message)
    if (firstName == "" || email == "" || age == "" || message == "") {
        alert('please enter required fields');
        return false;
    } else if (age <= 18 || age >= 65) {
        alert('Age is not valid');
        return false;
    } else {
        const firstName = document.getElementById('student-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('student-email').value;
        const age = document.getElementById('age').value;
        const country = document.getElementById('age').value;
        const message = document.getElementById('message').value;

        console.log(firstName, lastName, email, age, country, message)
        alert("Your name is :" + firstName + lastName +
            "Your email is :" + email + 
            "Your age is :" + age +
            "Yoou're from :" + country +
            "Your messgae is: " + message);
        // and just like that you have control of the data

    }


}