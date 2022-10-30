var submitButton = document.getElementById('submitButton');

submitButton.onclick = function(event) {
    event.preventDefault();
    var name = document.getElementById("inputName");
    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");
    console.dir(email);// show the properties of email
    // console.log(email.value + " " + password.value);
    var resultCont = document.getElementById("centralDiv");
    resultCont.innerHTML = 
    `<div class="col-6 white-bg pt-5 pb-5">
        <h2 class="text-center mb-3">Welcome ${name.value} </h2>
        <h4 class="mb-3">Your Password is: ${password.value}</h4>
        <h4 class="mb-3">Your email is: ${email.value}</h4>
    </div>`
}



