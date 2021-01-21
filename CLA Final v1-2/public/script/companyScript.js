const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const password = document.getElementById("password");
const companyName = document.getElementById("companyName");
const companyAddress = document.getElementById("companyAddress");
const companyCountry = document.getElementById("companyCountry");
const companyRegNumber = document.getElementById("companyRegNumber");
const companyCategoryIndustry = document.getElementById("companyCategoryIndustry");
const companyEmail = document.getElementById("companyEmail");
const companyPhone = document.getElementById("companyPhone");
const companyWebsite = document.getElementById("companyWebsite");
const errorParagCo = document.getElementsByClassName("errorParagCo");
const termsAndCond = document.getElementById("termsAndCond");
const btn = document.getElementById("sumbitBtnGj");

// AutoComplete

function initMap() {
    var input = document.getElementById('companyAddress');
    var autocomplete = new google.maps.places.Autocomplete(input)
}


function Company(fName, lName, pass, cName, cAddress, companyCountry, cRegNumber, cCategoryIndustry, cEmail, cPhone, cWebsite) {
    this.firstName = fName,
        this.lastName = lName,
        this.password = pass,
        this.companyName = cName;
    this.companyAddress = cAddress;
    this.companyCountry = companyCountry;
    this.companyRegNumber = cRegNumber;
    this.companyCategory = cCategoryIndustry;
    this.companyEmail = cEmail;
    this.companyPhone = cPhone;
    this.companyWebsite = cWebsite;
}

function Validate(email, compName) {
    this.companyEmail = email
    this.companyName = compName
}

// Clearing function 

let clear = () => {
    errorParagCo[0].innerHTML = "";
    errorParagCo[1].innerHTML = "";
    errorParagCo[2].innerHTML = "";
    errorParagCo[3].innerHTML = "";
    errorParagCo[4].innerHTML = "";
    errorParagCo[5].innerHTML = "";
    errorParagCo[6].innerHTML = "";
    errorParagCo[7].innerHTML = "";
    errorParagCo[8].innerHTML = "";
    errorParagCo[9].innerHTML = "";
    firstName.value = "";
    lastName.value = "";
    password.value = "";
    companyName.value = "";
    companyAddress.value = "";
    companyCountry.value = "";
    companyRegNumber.value = "";
    companyEmail.value = "";
    companyPhone.value = "";
    companyWebsite.value = "";
};

// Validate First Name
let validateFirstName = () => {
    let regex = /^[a-zA-Z ]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/i;
    if (regex.test(firstName.value) === false) {
        errorParagCo[0].style.color = "red"
        errorParagCo[0].innerHTML = "* Please enter a valid first name!"
        return false;
    } else if (firstName.value.length <= 1) {
        errorParagCo[0].style.color = "red"
        errorParagCo[0].innerHTML = "* First name too short!"
        return false;
    } else if (firstName.value.length >= 30) {
        errorParagCo[0].style.color = "red"
        errorParagCo[0].innerHTML = "* First name to big!"
        return false;
    } else {
        errorParagCo[0].innerHTML = ""
        return true;
    }
};

//Validate Last Name
let validateLastName = () => {
    let regex = /^[a-zA-Z ]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/i;
    if (regex.test(lastName.value) === false) {
        errorParagCo[1].style.color = "red"
        errorParagCo[1].innerHTML = "* Please enter a valid last name!"
        return false;
    } else if (lastName.value.length <= 1) {
        errorParagCo[1].style.color = "red"
        errorParagCo[1].innerHTML = "* Last name too short!"
        return false;
    } else if (lastName.value.length >= 30) {
        errorParagCo[1].style.color = "red"
        errorParagCo[1].innerHTML = "* Last name to big!"
        return false;
    } else {
        errorParagCo[1].innerHTML = ""
        return true
    }
}

//Password

let validatePass = () => {
    let regex = /^[a-zA-Z]\w{3,14}$/i
    if (regex.test(password.value) === false) {
        errorParagCo[2].style.color = "red"
        errorParagCo[2].innerHTML = "* Please enter a valid password!"
        return false;
    } else {
        errorParagCo[2].innerHTML = ""
        return true
    }
}

//Company Name

function companyNameValidation() {
    let regex = /^[a-zA-Z ]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/i;

    if (regex.test(companyName.value) === false) {
        errorParagCo[3].style.color = "red"
        errorParagCo[3].innerHTML = "* Please enter a valid company name!"
        return false;
    }
    else if (companyName.value.length >= 30) {
        errorParagCo[3].style.color = "red"
        errorParagCo[3].innerHTML = "* First name to big!"
        return false;
    }
    else if (companyName.value.length < 3) {
        errorParagCo[3].style.color = "red"
        errorParagCo[3].innerHTML = "* First name too short!"
        return false;
    }
    else {
        errorParagCo[3].innerHTML = "";
        return true;
    }
}



//Company Address

function companyAddressValidation() {

    if (companyAddress.value === "") {
        errorParagCo[4].style.color = "red"
        errorParagCo[4].innerHTML = "* Please enter Address!"
        return false;
    }
    else if (companyAddress.value.length >= 100) {
        errorParagCo[4].style.color = "red"
        errorParagCo[4].innerHTML = "* Address too long!"
        return false;
    }
    else if (companyAddress.value.length <= 3) {
        errorParagCo[4].style.color = "red"
        errorParagCo[4].innerHTML = "* Address too short!"
        return false;
    }
    else {
        errorParagCo[4].innerHTML = "";
        return true;
    }
}


//Company Country

function companyCountryValidation() {
    // let companyCountryRegex = /^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/;
    let lettersOnlyRegex = /^[A-Za-z]+$/

    if (companyCountry.value === "") {
        errorParagCo[5].style.color = "red"
        errorParagCo[5].innerHTML = "* Please fill the input!"
        return false;
    }
    else if (companyCountry.value.length >= 30) {
        errorParagCo[5].style.color = "red"
        errorParagCo[5].innerHTML = "* Input too big!"
        return false;
    }
    else if (companyCountry.value.length <= 2) {
        errorParagCo[5].style.color = "red"
        errorParagCo[5].innerHTML = "* Input too short!"
        return false;
    }
    else if (lettersOnlyRegex.test(companyCountry.value) === false) {
        errorParagCo[5].style.color = "red"
        errorParagCo[5].innerHTML = "* Please enter valid country name!"
        return false;
    }
    else {
        errorParagCo[5].innerHTML = "";
        return true;
    }
}


//Company Reg. Number

function companyRegNumberValidation() {
    let regexNum = /([A-Za-z]{2,4})([a-zA-Z0-9\-\_ ]{2,12})/;

    if (companyRegNumber.value === "") {
        errorParagCo[6].style.color = "red"
        errorParagCo[6].innerHTML = "* Please fill the Registration Number! ex. Letters and Numbers"
        return false;
    }
    else if (regexNum.test(companyRegNumber.value) === false) {
        errorParagCo[6].style.color = "red"
        errorParagCo[6].innerHTML = "* Company Reg. Number must contain letters and numbers!"
        return false;
    }
    else {
        errorParagCo[6].innerHTML = "";
        return true
    }
}

//Company Email

function emailValidation() {
    let regex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i


    if (regex.test(companyEmail.value) === false) {
        errorParagCo[7].style.color = "red"
        errorParagCo[7].innerHTML = "* Please enter valid e-mail address!"
        return false;
    }
    else {
        errorParagCo[7].innerHTML = "";
        return true;
    }



}



//Company Phone

function phoneValidation() {
    let phoneNumRegex = /^([\+][0-9]{1,3}([ \.\-])?)?([\(]{1}[0-9]{3}[\)])?([0-9A-Z \.\-]{1,32})((x|ext|extension)?[0-9]{1,4}?)$/i

    if (phoneNumRegex.test(companyPhone.value) === false) {
        errorParagCo[8].style.color = "red"
        errorParagCo[8].innerHTML = "* Please enter valid phone number!"
        return false;
    }
    else {
        errorParagCo[8].innerHTML = "";
        return true;
    }
}

//Company Website

function companyUrlValidation() {
    let phoneNumRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

    if (phoneNumRegex.test(companyWebsite.value) === false) {
        errorParagCo[9].style.color = "red"
        errorParagCo[9].innerHTML = "* Please enter valid web address!"
        return false;
    }
    else if (companyWebsite.value.length >= 60) {
        errorParagCo[9].style.color = "red"
        errorParagCo[9].innerHTML = "* Web address name too big!"
        return false;
    }
    else {
        errorParagCo[9].innerHTML = "";
        return true
    }
}

// Terms and Conditions

function termsAndConditi() {

    if (!termsAndCond.checked) {
        errorParagCo[10].style.color = "red"
        errorParagCo[10].innerHTML = "* Please accept the terms and conditions to proceed!";
    } else {
        errorParagCo[10].innerHTML = ""
        console.log(termsAndCond.value)
        return true
    }
}


let validate = () => {
    companyNameValidation()
    companyAddressValidation()
    companyCountryValidation()
    companyRegNumberValidation()
    emailValidation()
    phoneValidation()
    companyUrlValidation()
    termsAndConditi()
    validateFirstName()
    validateLastName()
    validatePass()
}

let companyAbout = null;
let validateCreditentials = null;

let storingObj = async (key) => {
    companyAbout = await new Company(firstName.value, lastName.value, password.value, companyName.value, companyAddress.value, companyCountry.value, companyRegNumber.value, companyCategoryIndustry.value, companyEmail.value, companyPhone.value, companyWebsite.value);
    localStorage.setItem(key, JSON.stringify(companyAbout));
}


const postUrl = "http://167.172.190.47/validate";

const postData = async (urls, content) => {
    const response = await fetch(urls, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
    }).then(function (res) {
        if (res.status === 400) {
            console.log(res.msg)
            swal({
                position: 'center',
                icon: 'error',
                title: `${res.statusText}`,
            }).then((value) => {
                if (value)
                    window.location.href = "../company.html"
                else
                    window.location.href = "../company.html"

            })
        } else {
            storingObj("company")
            window.location.href = '../Company Information/index.html'
            clear();
            return true
        }
    })
        .catch(function (res) { console.log(res) })

};



btn.addEventListener("click", function () {
    validate();


    if (companyNameValidation() === true && companyAddressValidation() === true && companyCountryValidation() === true && companyRegNumberValidation() === true && emailValidation() === true && phoneValidation() === true && companyUrlValidation() === true && termsAndConditi() === true && validateFirstName() === true && validateLastName() === true && validatePass() === true) {

        validateCreditentials = new Validate(companyEmail.value, companyName.value)

        postData(postUrl, validateCreditentials)

    }

});










