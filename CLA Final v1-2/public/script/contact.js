const firstNameGj = document.getElementById("firstNameGj");
const lastNameGj = document.getElementById("lastNameGj");
const emailGj = document.getElementById("emailGj");
const sumbitBtnGj = document.getElementById("sumbitBtnGj");
const textareaGj = document.getElementById("textareaGj");
const errorParagGj = document.getElementsByClassName("errorParagGj");
const signLogBtns = document.getElementById("signLogBtns");
const yourProfilebtn = document.getElementById("yourProfilebtn");


checkingForUser(signLogBtns, yourProfilebtn);

// Clear Function

let clear = () => {
    errorParagGj[0].innerHTML = "";
    errorParagGj[1].innerHTML = "";
    errorParagGj[2].innerHTML = "";
    errorParagGj[3].innerHTML = "";
    firstNameGj.value = "";
    lastNameGj.value = "";
    emailGj.value = "";
    textareaGj.value = "";
};

// Validate fName and lName
let validateName = () => {
    let regex = /^[a-zA-Z ]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/i;
    if (regex.test(firstNameGj.value) === false) {
        errorParagGj[0].style.color = "red"
        errorParagGj[0].innerHTML = "* Please enter a valid first name!"
        return false;
    } else if (firstNameGj.value.length <= 1) {
        errorParagGj[0].style.color = "red"
        errorParagGj[0].innerHTML = "* First name too short!"
        return false;
    } else if (firstNameGj.value.length >= 30) {
        errorParagGj[0].style.color = "red"
        errorParagGj[0].innerHTML = "* First name to big!"
        return false;
    } else {
        errorParagGj[0].innerHTML = ""
        return true;
    }
};
//Validate Last Name
let validateLastName = () => {
    let regex = /^[a-zA-Z ]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/i;
    if (regex.test(lastNameGj.value) === false) {
        errorParagGj[1].style.color = "red"
        errorParagGj[1].innerHTML = "* Please enter a valid last name!"
        return false;
    } else if (lastNameGj.value.length <= 1) {
        errorParagGj[1].style.color = "red"
        errorParagGj[1].innerHTML = "* Last name too short!"
        return false;
    } else if (lastNameGj.value.length >= 30) {
        errorParagGj[1].style.color = "red"
        errorParagGj[1].innerHTML = "* Last name to big!"
        return false;
    } else {
        errorParagGj[1].innerHTML = ""
        return true
    }
}

// Validate Email

let validateMail = () => {
    let regex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i
    if (regex.test(emailGj.value) === false) {
        errorParagGj[2].style.color = "red"
        errorParagGj[2].innerHTML = "* Please enter valid e-mail address!"
        return false;
    } else {
        errorParagGj[2].innerHTML = ""
        return true;
    }
};

// Validate Message

let validateMsg = () => {
    if (textareaGj.value === "") {
        errorParagGj[3].style.color = "red"
        errorParagGj[3].innerHTML = "* Please enter message!"
        return false;
    } else {
        errorParagGj[3].innerHTML = ""
        return true;
    }
};


let validate = () => {
    validateName();
    validateLastName();
    validateMail();
    validateMsg();
}

sumbitBtnGj.addEventListener("click", function () {
    validate();
    if (validateName() === true && validateLastName() === true && validateMail() === true && validateMsg() === true) {

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'You have sent your message successfully!',
            html: '<a href="index.html">Go to Home Page!</a>',
            showConfirmButton: false,

        })
        clear();
    }
});