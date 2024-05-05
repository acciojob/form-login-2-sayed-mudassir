//your JS code here. If required.
const form = document.querySelector("#form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let firstname = form.firstName.value;
    let lastname = form.lastName.value;
    let phoneNum = form.PhoneNumber.value;
    let email = form.emailID.value;

    let alertString = "First Name: "+firstname + " Last Name: " +lastname+ " Phone Number: "+ phoneNum +" Email ID: "+ email;
    alert(alertString);
})