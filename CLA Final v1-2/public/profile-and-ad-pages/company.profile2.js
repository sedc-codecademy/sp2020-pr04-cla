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
const compNameUrl = "http://167.172.190.47/createNewComp/title/";
checkingForUser(signLogBtns, yourProfilebtn);

let loggedUser = null;

const getCompany = async (url) => {
  let lsCompany = await localStorage.getItem("compProfile");
  let response = await fetch(`${url}${lsCompany}`);
  let data = await response.json();
  seeLocalStr(data);
  // AD resposnse
  getAds(data[0].id);
  localStorage.removeItem("compProfile");
};

let seeLocalStr = async (data) => {
  welcomeUser.innerText = `Company: 
        ${data[0].companyName}`;
  welcomeUserMobile.innerText = `Company:
        ${data[0].companyName}`;

  fullName.innerText = `${data[0].firstName} ${data[0].lastName}`;
  fullNameMobile.innerText = `${data[0].firstName} ${data[0].lastName}`;
  description.innerText = `${data[0].firstName} is young Start-up entrepreneur.
     He started this company with his friend back in ${data[0].companyFounded}.`;
  descriptionMobile.innerText = `${data[0].firstName} is young Start-up entrepreneur.
     He started this company with his friend back in ${data[0].companyFounded}.`;
  companyName.innerText = `${data[0].companyName}`;
  companyNameMobile.innerText = `${data[0].companyName}`;
  aboutCompany.innerText = `Our company is  ${data[0].businessEntity},
      built with love with group of friends that are interested in ${data[0].companyCategory}.`;
  aboutCompanyMobile.innerText = `Our company is  ${data[0].businessEntity},
      built with love with group of friends that are interested in ${data[0].companyCategory}.`;
  street.innerText = data[0].companyAddress;
  streetMobile.innerText = data[0].companyAddress;
  phoneNumber.innerText = data[0].companyPhone;
  phoneNumberMobile.innerText = data[0].companyPhone;
  companyEmail.innerText = data[0].companyEmail;
  companEmailMobile.innerText = data[0].companyEmail;
  aboutTheCompany[0].innerText = data[0].serviceDescribe;
  aboutTheCompany[1].innerText = data[0].companyAbout;
};

const companyAdURL = `http://167.172.190.47/createAd/`;

const getAds = async (id) => {
  let response = await fetch(`http://167.172.190.47/createAd/` + id);
  let data = await response.json();
  filterUserAds(data);
};

const adRedirect = (element) => {
  window.location.href = "../profile-and-ad-pages/classified-ad.html";
  localStorage.removeItem("adToRedirect");
  localStorage.setItem("adToRedirect", JSON.stringify(element.innerHTML));
};

const filterUserAds = async (arr) => {
  arr.forEach((e) => {
    ads.innerHTML += `
        <div class="left floated card">
                <div  class="content">
                    <img class="left floated mini ui image" src="./assets/images/unnamed.jpg">
                    <div class="header">
                        ${e.adType}
                    </div>
                    <div id="${e.adTitle.replace(/\s/g, "")}" class="meta">${
      e.adTitle
    }
                    </div>
                    <div class="description">
                        ${e.adDescription}
                    </div>
                </div>
                <div class="extra content">
                    <button onclick="adRedirect(document.getElementById('${e.adTitle.replace(
                      /\s/g,
                      ""
                    )}'))" class="positive ui button">See AD</button>
                </div>
        </div>
            `;
  });
};

window.onload = () => {
  getCompany(compNameUrl);
};
