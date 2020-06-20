const containerForAds = document.getElementById("dynamicAdsContainer");

const database = "http://localhost/createAd";

function dynamicAd(object){
    return `
    <div class="card">
        <div class="image">
          <img src="./img/pipes.png">
        </div>
        <div class="content">
          <a class="header" href="#">${object.adTitle}</a>
          <div class="description">
          ${object.adDescription.substring(0, 45)}
          </div><br>
          <div class="meta">
            <a>Address: ${object.companyAddress}</a>
          </div>
        </div>
        <div class="extra">
        ${object.companyName}
          <div class="ui star rating" data-rating="4"></div>
          <span class="right floated">${object.companyCountry}
          </span>
        </div>
      </div>
    `

}

window.addEventListener("load", function(){
    fetch(database)
    .then(data => data.json())
    .then(function(result){
        try {
            containerForAds.innerHTML = "";
            let counter = 0;
            for (const item of result) {
                counter++
                if(counter != 9){
                    containerForAds.innerHTML += dynamicAd(item)
                } else {
                    break;
                }
            }
        } catch (error) {
            console.log(error)
        }
    })


})