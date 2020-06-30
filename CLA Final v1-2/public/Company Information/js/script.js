const companyEmployees = document.getElementById("companyEmployees");
const companyFounded = document.getElementById("companyFounded");
const serviceDescribe = document.getElementById("serviceDescribe");
const businessEntity = document.getElementsByClassName("businessEntity");
const companyType = document.getElementById("companyType");
const companyAbout = document.getElementById("companyAbout");
const termsAndCond = document.getElementById("termsAndCond");
const errorParagCo = document.getElementsByClassName("errorParagCo");
const btn = document.getElementById("sumbitBtnGj");
const signLogBtns = document.getElementById("signLogBtns");
const yourProfilebtn = document.getElementById("yourProfilebtn");


checkingForUser(signLogBtns, yourProfilebtn);


let radioValue;


function CompanyInformations(fName, lName, pass, cName, cAddress, companyCountry, cRegNumber, cCategoryIndustry, cEmail, cPhone, cWebsite, cEmployees, cFounded, cService, businessEntity, cType, cAbout) {
    this.firstName = fName;
    this.lastName = lName;
    this.password = pass;
    this.companyName = cName;
    this.companyAddress = cAddress;
    this.companyCountry = companyCountry;
    this.companyRegNumber = cRegNumber;
    this.companyCategory = cCategoryIndustry;
    this.companyEmail = cEmail;
    this.companyPhone = cPhone;
    this.companyWebsite = cWebsite;
    this.companyEmployees = cEmployees;
    this.companyFounded = cFounded;
    this.serviceDescribe = cService;
    this.businessEntity = businessEntity;
    this.companyType = cType;
    this.companyAbout = cAbout;
}


let clear = () => {
    errorParagCo[0].innerHTML = "";
    errorParagCo[1].innerHTML = "";
    errorParagCo[2].innerHTML = "";
    errorParagCo[3].innerHTML = "";
    errorParagCo[4].innerHTML = "";
    errorParagCo[5].innerHTML = "";

    companyEmployees.value = "";
    companyFounded.value = "";
    serviceDescribe.value = "";
    businessEntity.value = "";
    companyType.value = "";
    companyAbout.value = "";
}




//Company Employees

function employees() {
    let alphabetRegex = /^[A-Za-z]+$/;

    if (companyEmployees.value === "") {
        errorParagCo[0].style.color = "red";
        errorParagCo[0].innerHTML = "*Please enter how many employees your company has!";
        return false;
    }
    else if (companyEmployees.value.length <= 1) {
        errorParagCo[0].style.color = "red";
        errorParagCo[0].innerHTML = "*It's not a company if you count one employee!";
        return false;
    }
    else if (alphabetRegex.test(companyEmployees.value)) {
        errorParagCo[0].style.color = "red";
        errorParagCo[0].innerHTML = "*Your input contain word. Please try again!";
        return false;
    }
    else {
        errorParagCo[0].innerHTML = "";
        return true;
    }
}



// Company Founded

function cFounded() {
    let cFoundedRegex = /^[A-Za-z]+$/;
    let yearsRegex = /^(19|20)\d{2}$/;

    if (!yearsRegex.test(companyFounded.value)) {
        errorParagCo[1].style.color = "red";
        errorParagCo[1].innerHTML = "Invalid year of company created!";
        return false;
    }
    else if (companyFounded.value === "") {
        errorParagCo[1].style.color = "red";
        errorParagCo[1].innerHTML = "*Please enter when company is founded!";
        return false;
    }
    else if (companyFounded.value.length > 4 || companyFounded.value.length < 4) {
        errorParagCo[1].style.color = "red";
        errorParagCo[1].innerHTML = "*Please enter a valid year!";
        return false;
    }
    else if (cFoundedRegex.test(companyFounded.value)) {
        errorParagCo[1].style.color = "red";
        errorParagCo[1].innerHTML = "*Invalid year! Year may not contain word!";
        return false;
    }
    else {
        errorParagCo[1].innerHTML = "";
        return true;
    }
}



//Service Description

function serviceDescription() {
    let txtRegex = /[^A-Za-z0-9 .'?!,@$#\-_]/;
    let wordLen = 256;

    let lengthTxt = serviceDescribe.value.split(/[\s]+/);
    if (lengthTxt.length > wordLen) {
        errorParagCo[2].style.color = "red";
        errorParagCo[2].innerHTML = "*You cannot put more than " + wordLen + " words!";
        return false;
    }
    if (serviceDescribe.value === "") {
        errorParagCo[2].style.color = "red";
        errorParagCo[2].innerHTML = "*Please describe your company service!";
        return false;
    }
    else if (serviceDescribe.value.length < 10) {
        errorParagCo[2].style.color = "red";
        errorParagCo[2].innerHTML = "*Your description is too short for the company!";
        return false;
    }
    else if (txtRegex.test(serviceDescribe.value)) {
        errorParagCo[2].style.color = "red";
        errorParagCo[2].innerHTML = "*Invalid Text. Text Area may contain max 256 characters, even years and some symbols.";
        return false;
    }
    else {
        errorParagCo[2].innerHTML = "";
        return true;
    }
}



//Type of Entity

function typesOfEntity() {
    if (!(businessEntity[0].checked || businessEntity[1].checked || businessEntity[2].checked) && companyType.value === "") {
        errorParagCo[3].style.color = "red";
        errorParagCo[3].innerHTML = "*You must check your type of business entity!";
        return false;
    }
    else if ((businessEntity[0].checked || businessEntity[1].checked || businessEntity[2].checked) && companyType.value !== "" || (businessEntity[0].checked && businessEntity[1].checked) || (businessEntity[1].checked && businessEntity[2].checked)) {
        errorParagCo[3].style.color = "red";
        errorParagCo[3].innerHTML = "*One of the given types is already been selected!";
        return false;
    }
    else if (companyType.value.length >= 20) {
        errorParagCo[3].style.color = "red";
        errorParagCo[3].innerHTML = "*Type is not valid!";
        return false;
    }
    else {
        errorParagCo[3].innerHTML = "";
        return true;
    }
}



//Checked Type of Entity

function whatIsChecked() {
    let radioElements = document.getElementsByClassName("businessEntity");

    for (let i = 0; i < radioElements.length; i++) {
        if (radioElements[i].checked) {
            return radioValue = radioElements[i].value;
        }
    }

}

//About the Company

function aboutTheCompany() {
    let regexAbout = /[^A-Za-z0-9 .'?!,@$#-_]/;
    let wordLen = 500;

    let lengthTxt = companyAbout.value.split(/[\s]+/);

    if (companyAbout.value === "") {
        errorParagCo[4].style.color = "red";
        errorParagCo[4].innerHTML = "*Please enter something about the company!";
        return false;
    }
    else if (regexAbout.test(companyAbout.value)) {
        errorParagCo[4].style.color = "red";
        errorParagCo[4].innerHTML = "*Invalid Text. Text Area may contain max 500 characters, even years and some symbols.";
        return false;
    }
    else if (companyAbout.value.length < 10) {
        errorParagCo[4].style.color = "red";
        errorParagCo[4].innerHTML = "*Your text about the company is too short!";
        return false;
    }
    else if (lengthTxt.length > wordLen) {
        errorParagCo[4].style.color = "red";
        errorParagCo[4].innerHTML = "*You cannot put more than " + wordLen + " words!";
        return false;
    }
    else {
        errorParagCo[4].innerHTML = "";
        return true;
    }
}






// Terms and Conditions

function termsAndConditi() {
    if (!termsAndCond.checked) {
        errorParagCo[5].style.color = "red";
        errorParagCo[5].innerHTML = "* Please accept the terms and conditions to proceed!";
    }
    else {
        errorParagCo[5].innerHTML = ""
        return true
    }
}



let validate = () => {
    employees();
    cFounded();
    serviceDescription();
    typesOfEntity();
    whatIsChecked();
    aboutTheCompany();
    termsAndConditi();
}


let LCInfo;

let checkLC = async () => {
    if (localStorage.length > 0) {
        let lStorageComapny = await localStorage.getItem("company");
        LCInfo = JSON.parse(lStorageComapny);
        console.log(LCInfo)
    }
}
checkLC()

const postUrl = "http://localhost/createNewComp";

const postData = async (urls, content) => {

    const response = await fetch(urls, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
    }).then(function (res) {
        console.log(res)
        if (res.status === 200) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'You created your company successfully!',
                html: `<a href="../index.html">Go to Home Page!</a>
                    or you can <a href="../login.html">Login!</a>` ,
                showConfirmButton: false,
            })
            return true
        }
    })
        .catch(function (err) { console.log(err) })


};




btn.addEventListener("click", function () {
    validate()
    if (employees() === true && cFounded() === true && serviceDescription() === true && typesOfEntity() === true && aboutTheCompany() === true && termsAndConditi() === true) {
        let allInfos = new CompanyInformations(LCInfo.firstName, LCInfo.lastName, LCInfo.password, LCInfo.companyName, LCInfo.companyAddress, LCInfo.companyCountry, LCInfo.companyRegNumber, LCInfo.companyCategory, LCInfo.companyEmail, LCInfo.companyPhone, LCInfo.companyWebsite, companyEmployees.value, companyFounded.value, serviceDescribe.value, radioValue, companyType.value, companyAbout.value);
      
        postData(postUrl, allInfos)

        clear();
        Object.keys(allInfos).forEach(key => allInfos[key] === undefined ? delete allInfos[key] : {});
        $('input[type=radio]').prop('checked', false);
        $('input[type=checkbox]').prop('checked', false);
        localStorage.clear();
    }
});