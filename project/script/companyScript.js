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

function initMap(){
    var input = document.getElementById('companyAddress');
    var autocomplete = new google.maps.places.Autocomplete(input)
}


function Company(cName, cAddress, companyCountry, cRegNumber, cCategoryIndustry, cEmail, cPhone, cWebsite) {
    this.companyName = cName;
    this.companyAddress = cAddress;
    this.companyCountry = companyCountry;
    this.companyRegNumber = cRegNumber;
    this.companyCategoryIndustry = cCategoryIndustry;
    this.companyEmail = cEmail;
    this.companyPhone = cPhone;
    this.companyWebsite = cWebsite;
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
    companyName.value = "";
    companyAddress.value = "";
    companyCountry.value = "";
    companyRegNumber.value = "";
    companyEmail.value = "";
    companyPhone.value = "";
    companyWebsite.value = "";
};

//Company Name

function companyNameValidation() {
    let regex = /^[a-zA-Z ]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/i;

    if (regex.test(companyName.value) === false) {
        errorParagCo[0].style.color = "red"
        errorParagCo[0].innerHTML = "* Please enter a valid company name!"
        return false;
    }
    else if (companyName.value.length >= 30) {
        errorParagCo[0].style.color = "red"
        errorParagCo[0].innerHTML = "* First name to big!"
        return false;
    }
    else if (companyName.value.length < 3) {
        errorParagCo[0].style.color = "red"
        errorParagCo[0].innerHTML = "* First name too short!"
        return false;
    }
    else {
        errorParagCo[0].innerHTML = "";
        return true;
    }
}



//Company Address

function companyAddressValidation() {

    if (companyAddress.value === "") {
        errorParagCo[1].style.color = "red"
        errorParagCo[1].innerHTML = "* Please enter Address!"
        return false;
    }
    else if (companyAddress.value.length >= 100) {
        errorParagCo[1].style.color = "red"
        errorParagCo[1].innerHTML = "* Address too long!"
        return false;
    }
    else if (companyAddress.value.length <= 3) {
        errorParagCo[1].style.color = "red"
        errorParagCo[1].innerHTML = "* Address too short!"
        return false;
    }
    else {
        errorParagCo[2].innerHTML = "";
        return true;
    }
}


//Company Country

function companyCountryValidation() {
    // let companyCountryRegex = /^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/;
    let lettersOnlyRegex = /^[A-Za-z]+$/

    if (companyCountry.value === "") {
        errorParagCo[2].style.color = "red"
        errorParagCo[2].innerHTML = "* Please fill the input!"
        return false;
    }
    else if (companyCountry.value.length >= 30) {
        errorParagCo[2].style.color = "red"
        errorParagCo[2].innerHTML = "* Input too big!"
        return false;
    }
    else if (companyCountry.value.length <= 2) {
        errorParagCo[2].style.color = "red"
        errorParagCo[2].innerHTML = "* Input too short!"
        return false;
    }
    else if (lettersOnlyRegex.test(companyCountry.value) === false) {
        errorParagCo[2].style.color = "red"
        errorParagCo[2].innerHTML = "* Please enter valid country name!"
        return false;
    }
    else {
        errorParagCo[2].innerHTML = "";
        return true;
    }
}


//Company Reg. Number

function companyRegNumberValidation() {
    let regexNum = /([A-Za-z]{2,4})([a-zA-Z0-9\-\_ ]{2,12})/;

    if (companyRegNumber.value === "") {
        errorParagCo[3].style.color = "red"
        errorParagCo[3].innerHTML = "* Please fill the Registration Number! ex. Letters and Numbers"
        return false;
    }
    else if (regexNum.test(companyRegNumber.value) === false) {
        errorParagCo[3].style.color = "red"
        errorParagCo[3].innerHTML = "* Please fill the Registration Number!"
        return false;
    }
    else {
        errorParagCo[3].innerHTML = "";
        return true
    }
}

//Company Email

function emailValidation() {
    let regex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i

    if (regex.test(companyEmail.value) === false) {
        errorParagCo[4].style.color = "red"
        errorParagCo[4].innerHTML = "* Please enter valid e-mail address!"
        return false;
    } else {
        errorParagCo[4].innerHTML = "";
        return true;
    }
}



//Company Phone

function phoneValidation() {
    let phoneNumRegex = /^([\+][0-9]{1,3}([ \.\-])?)?([\(]{1}[0-9]{3}[\)])?([0-9A-Z \.\-]{1,32})((x|ext|extension)?[0-9]{1,4}?)$/i

    if (phoneNumRegex.test(companyPhone.value) === false) {
        errorParagCo[5].style.color = "red"
        errorParagCo[5].innerHTML = "* Please enter valid phone number!"
        return false;
    }
    else {
        errorParagCo[5].innerHTML = "";
        return true;
    }
}

//Company Website

function companyUrlValidation() {
    let phoneNumRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

    if (phoneNumRegex.test(companyWebsite.value) === false) {
        errorParagCo[6].style.color = "red"
        errorParagCo[6].innerHTML = "* Please enter valid web address!"
        return false;
    }
    else if (companyWebsite.value.length >= 60) {
        errorParagCo[6].style.color = "red"
        errorParagCo[6].innerHTML = "* Web address name too big!"
        return false;
    }
    else {
        errorParagCo[6].innerHTML = "";
        return true
    }
}

// Terms and Conditions

function termsAndConditi() {

    if (!termsAndCond.checked) {
        errorParagCo[7].style.color = "red"
        errorParagCo[7].innerHTML = "* Please accept the terms and conditions to proceed!";
    } else {
        errorParagCo[7].innerHTML = ""
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
}

let companyAbout = null;

let storingObj = (key) => {
    companyAbout = new Company(companyName.value, companyAddress.value, companyCountry.value, companyRegNumber.value, companyCategoryIndustry.value, companyEmail.value, companyPhone.value, companyWebsite.value);
    localStorage.setItem(key, JSON.stringify(companyAbout));
}



btn.addEventListener("click", function () {
    validate()
    if (companyNameValidation() === true && companyAddressValidation() === true && companyCountryValidation() === true && companyRegNumberValidation() === true && emailValidation() === true && phoneValidation() === true && companyUrlValidation() === true && termsAndConditi() === true) {
        companyAbout = new Company(companyName.value, companyAddress.value, companyCountry.value, companyRegNumber.value, companyCategoryIndustry.value, companyEmail.value, companyPhone.value, companyWebsite.value);
        storingObj(companyName.value)
        console.log('clicked')

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'You created your company successfully!',
            html: '<a href="home.html">Go to Home Page!</a>',
            showConfirmButton: false,

        })
        clear();
    }

});










