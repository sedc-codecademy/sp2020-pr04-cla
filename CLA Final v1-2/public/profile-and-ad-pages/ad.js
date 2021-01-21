const newDatabase = "http://167.172.190.47/createAd/title/"
const signLogBtns = document.getElementById("signLogBtns");
const yourProfilebtn = document.getElementById("yourProfilebtn");
let adType = document.querySelectorAll(".adType");
let ezDescrip = document.getElementById("adTextArea").firstElementChild;
let adDescription = document.getElementById('adDescription');
let adCategories = document.getElementById("adCategories");
let minCompInfo = document.querySelectorAll(".minCompInfo");
let adPrice = document.getElementById('price').firstElementChild;
checkingForUser(signLogBtns, yourProfilebtn);

// Getting to page and fethcing data
const checkIfAd = (item) => {
  let ad = item.getItem("adToRedirect");
  let keyWord = JSON.parse(ad);

  fetchingAd(keyWord);

}

const fetchingAd = async (adName) => {
  const response = await fetch(`${newDatabase + adName}`)
  const data = await response.json()
  printData(data);
}

const printData = (data) => {
  adType[0].innerHTML = `${data[0].adType}`
  adType[1].innerHTML = `${data[0].adType}`
  ezDescrip.innerHTML = `Posted by ${data[0].companyName}`
  adDescription.innerHTML = `${data[0].adDescription}`
  printFromArr(data[0].adCategory)
  minCompInfo[0].innerHTML = `${data[0].companyCountry}`
  minCompInfo[1].innerHTML = `${data[0].companyName}`
  minCompInfo[2].innerHTML = `${data[0].companyPhone}`
  adPrice.innerHTML = `${data[0].adAmount}`
}

const printFromArr = (array) => {
  array.forEach(e => {
    adCategories.innerHTML += `
    <a class="ui label">
      ${e}
    </a>
    `
  });
}

window.onload = () => {
  checkIfAd(localStorage)
}

// Printing data















// Other
$('#next').click(function () {

  $('.shape')

    .shape('flip right');

});



