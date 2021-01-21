const welcomeUser = document.getElementById("welcomeUser");
const welcomeUserMobile = document.getElementById("welcomeUserMobile");
const fullName = document.getElementById("fullName");
const fullNameMobile = document.getElementById("fullNameMobile");
const description = document.querySelector(".description");
const descriptionMobile = document.getElementById("descriptionMobile");
const companyName = document.getElementById("companyName");
const companyNameMobile = document.getElementById("companyNameMobile");
const aboutCompany = document.getElementById("aboutCompany");
const aboutCompanyMobile = document.getElementById("aboutCompanyMobile");
const street = document.getElementById("street");
const streetMobile = document.getElementById("streetMobile");
const phoneNumber = document.getElementById("phoneNumber");
const phoneNumberMobile = document.getElementById("phoneNumberMobile");
const companyEmail = document.getElementById("companEmail");
const companEmailMobile = document.getElementById("companEmailMobile");
const aboutTheCompany = document.getElementsByClassName("aboutTheCompany");
const body = document.querySelector("body");
const ads = document.getElementById("ads");
const signLogBtns = document.getElementById("signLogBtns");
const yourProfilebtn = document.getElementById("yourProfilebtn");

checkingForUser(signLogBtns, yourProfilebtn);

let loggedUser;

let seeLocalStr = async () => {
  if (localStorage.length != 0) {
    let LSuser = await localStorage.getItem("user");
    loggedUser = JSON.parse(LSuser)[0];
    welcomeUser.innerText = `Welcome ${loggedUser.firstName}`;
    welcomeUserMobile.innerText = `Welcome ${loggedUser.firstName}`;
    fullName.innerText = `${loggedUser.firstName} ${loggedUser.lastName}`;
    fullNameMobile.innerText = `${loggedUser.firstName} ${loggedUser.lastName}`;
    description.innerText = `${loggedUser.firstName} is young Start-up entrepreneur.
     He started this company with his friend back in ${loggedUser.companyFounded}.`;
    descriptionMobile.innerText = `${loggedUser.firstName} is young Start-up entrepreneur.
     He started this company with his friend back in ${loggedUser.companyFounded}.`;
    companyName.innerText = `${loggedUser.companyName}`;
    companyNameMobile.innerText = `${loggedUser.companyName}`;
    aboutCompany.innerText = `Our company is  ${loggedUser.businessEntity},
      built with love with group of friends that are interested in ${loggedUser.companyCategory}.`;
    aboutCompanyMobile.innerText = `Our company is  ${loggedUser.businessEntity},
      built with love with group of friends that are interested in ${loggedUser.companyCategory}.`;
    street.innerText = loggedUser.companyAddress;
    streetMobile.innerText = loggedUser.companyAddress;
    phoneNumber.innerText = loggedUser.companyPhone;
    phoneNumberMobile.innerText = loggedUser.companyPhone;
    companyEmail.innerText = loggedUser.companyEmail;
    companEmailMobile.innerText = loggedUser.companyEmail;
    aboutTheCompany[0].innerText = loggedUser.serviceDescribe;
    aboutTheCompany[1].innerText = loggedUser.companyAbout;
    // console.log(loggedUser);
  } else {
    swal({
      position: "center",
      icon: "error",
      title: "You need to be logged in, in order to see your profile!",
    }).then((value) => {
      if (value) window.location.href = "../login.html";
      else window.location.href = "../login.html";
    });
  }
};

const companyURL = "http://localhost/createAd";

const getAds = async (url) => {
  let response = await fetch(url);
  let data = await response.json();
  filterUserAds(data);
};

const adRedirect = (element) => {
  window.location.href = "../profile-and-ad-pages/classified-ad.html";

  localStorage.removeItem("adToRedirect");
  localStorage.setItem("adToRedirect", JSON.stringify(element.innerHTML));
};

let test;
const filterUserAds = (arr) => {
  return (test = arr.filter((ad) => {
    if (ad.id === loggedUser.id) {
      ads.innerHTML += `
    <div class="left floated card">
            <div  class="content">
                <img class="left floated mini ui image" src="./assets/images/unnamed.jpg">
                <div class="header">
                    ${ad.adType}
                </div>
                <div id="${ad.adTitle.replace(/\s/g, "")}" class="meta">${
        ad.adTitle
      }
                </div>
                <div class="description">
                    ${ad.adDescription}
                </div>
            </div>
            <div class="extra content">
                <button onclick="adRedirect(document.getElementById('${ad.adTitle.replace(
                  /\s/g,
                  ""
                )}'))" class="positive ui button">See AD</button>
            </div>
    </div>
        `;
    }
  }));
};

window.onload = () => {
  seeLocalStr();
  getAds(companyURL);
};
