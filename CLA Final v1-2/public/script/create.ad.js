const selCateg = document.getElementById('selCateg')
const categ = document.getElementsByClassName("categ");
const adTitle = document.getElementById("adTitle");
const prodType = document.getElementById("prodType");
const amount = document.getElementById("amount");
const unitDrpDwn = document.getElementById("unitDrpDwn");
const txtArea = document.getElementById("txtArea");
const termsCond = document.getElementById("termsCond");
const errMsg = document.getElementsByClassName("errMsg");
const myBtn = document.getElementById("btn");
const menu = document.querySelector("#menuCate");
const myInputTest = document.getElementById("myInputTest")
const signLogBtns = document.getElementById("signLogBtns");
const yourProfilebtn = document.getElementById("yourProfilebtn");


checkingForUser(signLogBtns, yourProfilebtn);


window.onload = () => {
     checkLC();
};




let LCInfo;

let checkLC = async () => {
    if (localStorage.length > 0) {
        let lStorageComapny = await localStorage.getItem("user");
        LCInfo = JSON.parse(lStorageComapny);
    }
};




function Ad(id, category, title, type, amount, description, companyAddress, companyName, companyEmail, companyWebsite, companyPhone, companyCountry) {
    this.id = id
    this.adCategory = category
    this.adTitle = title
    this.adType = type
    this.adAmount = amount
    this.adDescription = description
    this.companyAddress = companyAddress
    this.companyName = companyName
    this.companyEmail = companyEmail
    this.companyWebsite = companyWebsite
    this.companyPhone = companyPhone
    this.companyCountry = companyCountry
};


const checkCategory = () => {
    if (myInputTest.value === "") {
        errMsg[0].style.color = "red";
        errMsg[0].innerText = "* You must fill atleast one category!";
        return false;
    } else {
        errMsg[0].innerText = "";
        return true;
    }
}

const checkAdTitle = () => {
    if (adTitle.value === "") {
        errMsg[1].style.color = "red";
        errMsg[1].innerText = "* You must fill title for your ad!";
        return false;
    } else if (adTitle.value.length < 5) {
        errMsg[1].style.color = "red";
        errMsg[1].innerText = "* Title for ad too short!";
        return false;
    } else if (adTitle.value.length > 100) {
        errMsg[1].style.color = "red";
        errMsg[1].innerText = "* Title for ad too long!";
        return false;
    } else {
        errMsg[1].innerText = "";
        return true;
    }
};

const checkprodType = () => {
    if (prodType.value === "") {
        errMsg[2].style.color = "red";
        errMsg[2].innerText = "* You must fill type for your ad!";
        return false;
    } else if (prodType.value.length < 5) {
        errMsg[2].style.color = "red";
        errMsg[2].innerText = "* Type for ad too short!";
        return false;
    } else if (prodType.value.length > 100) {
        errMsg[2].style.color = "red";
        errMsg[2].innerText = "* Type for ad too long!";
        return false;
    } else {
        errMsg[2].innerText = "";
        return true;
    }
};

const checkAmount = () => {
    if (amount.value === "") {
        errMsg[3].style.color = "red";
        errMsg[3].innerText = "* You must fill amount for your ad!";
        return false;
    } else if (amount.value.length < 5) {
        errMsg[3].style.color = "red";
        errMsg[3].innerText = "* Text for amount for ad too short!";
        return false;
    } else if (amount.value.length > 100) {
        errMsg[3].style.color = "red";
        errMsg[3].innerText = "* Text for amount for ad too long!";
        return false;
    } else {
        errMsg[3].innerText = "";
        return true;
    }
};

const checkDescription = () => {
    if (txtArea.value === "") {
        errMsg[4].style.color = "red";
        errMsg[4].innerText = "* You must fill description for your ad!";
        return false;
    } else if (txtArea.value.length < 20) {
        errMsg[4].style.color = "red";
        errMsg[4].innerText = "* Text for description for ad too short!";
        return false;
    } else if (txtArea.value.length > 1000) {
        errMsg[4].style.color = "red";
        errMsg[4].innerText = "* Text for amount for ad too long!";
        return false;
    } else {
        errMsg[4].innerText = "";
        return true;
    }
};


const trmAndCond = () => {

    if (!termsCond.checked) {
        errMsg[5].style.color = "red";
        errMsg[5].innerHTML = "* Please accept the terms and conditions to proceed!";
    } else {
        errMsg[5].innerHTML = "";
        return true;
    }
};

const clering = () => {
    errMsg[0].innerText = "";
    errMsg[1].innerText = "";
    errMsg[2].innerText = "";
    errMsg[3].innerText = "";
    errMsg[4].innerText = "";
    errMsg[5].innerText = "";
    adTitle.value = "";
    prodType.value = "";
    amount.value = "";
    txtArea.value = "";
    termsCond.checked = false;
};

let validate = () => {
    checkCategory();
    checkAdTitle();
    checkprodType();
    checkAmount();
    checkDescription();
    trmAndCond();
};

const postUrl = "http://167.172.190.47/createAd";

const postData = async (urls, content) => {

    const response = await fetch(urls, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
    }).then(function (res) { console.log(res) })

        .catch(function (err) { console.log(err) })


};



myBtn.addEventListener("click", function () {

    validate();
    if (checkCategory() === true && checkAdTitle() === true && checkprodType() === true && checkAmount() === true && checkDescription() === true && trmAndCond() === true) {
        let ad = new Ad(LCInfo[0].id, myInputTest.value.split(','), adTitle.value, prodType.value, amount.value, txtArea.value, LCInfo[0].companyAddress, LCInfo[0].companyName, LCInfo[0].companyEmail, LCInfo[0].companyWebsite, LCInfo[0].companyPhone, LCInfo[0].companyCountry)
        console.log(ad)
        postData(postUrl, ad)
        clering()
        swal({
            position: 'center',
            icon: 'success',
            title: `Ad successfully created`,
        }).then((value) => {
            if (value)
                window.location.href = "../profile-and-ad-pages/company-profile.html"
            else
                window.location.href = "../profile-and-ad-pages/company-profile.html"

        })
        // window.location.reload()
    }
})