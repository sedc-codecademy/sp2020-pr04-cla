let artsAndEntertainment = document.getElementById("arts");
let businessAndConsumer = document.getElementById("business");
let computerElectronics = document.getElementById("computer");
let eCommerce = document.getElementById("eCommerce");
let finance = document.getElementById("finance");
let foodAndDrink = document.getElementById("food");
let health = document.getElementById("health");
let heavyIndustry = document.getElementById("industry");
let homeAndGarden = document.getElementById("home");
let petsAndAnimals = document.getElementById("pets");

function initCompCategory() {
  const getData = async (url) => {
    let response = await fetch(url);
    let data = await response.json();

    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    var count4 = 0;
    var count5 = 0;
    var count6 = 0;
    var count7 = 0;
    var count8 = 0;
    var count9 = 0;
    var count10 = 0;
    var count11 = 0;
    var count12 = 0;
    var count13 = 0;
    var count14 = 0;
    var count15 = 0;

    for (let i = 0; i < data.length; i++) {
      if (data[i].companyCategory === "Arts & Entertainment") {
        count1++;

        artsAndEntertainment.innerHTML = "";
        artsAndEntertainment.innerHTML += `
                <div class="content">
            <div class="header"><i class="ship scale blue icon"></i></div>
            <div class="meta">Arts & Entertainment</div>
          </div>
          <div class="extra content">
            <i class="check icon"></i>
            ${count1} Compainies
          </div>
                
                `;
      } else if (
        data[i].companyCategory === "Business and Consumer Servicese"
      ) {
        count2++;

        businessAndConsumer.innerHTML = "";
        businessAndConsumer.innerHTML += `
                <div class="content">
            <div class="header"><i class="wrench scale blue icon"></i></div>
            <div class="meta">Business and Consumer...</div>
          </div>
          <div class="extra content">
            <i class="check icon"></i>
            ${count2} Companies
          </div>
                
                `;
      } else if (
        data[i].companyCategory === "Computer Electronics & Technology"
      ) {
        count3++;

        computerElectronics.innerHTML = "";
        computerElectronics.innerHTML += `
                <div class="content">
            <div class="header"><i class="wrench scale blue icon"></i></div>
            <div class="meta">Computer Electronics &...</div>
          </div>
          <div class="extra content">
            <i class="check icon"></i>
            ${count3} Companies
          </div>
                
                `;
      } else if (data[i].companyCategory === "E-Commerce & Shopping") {
        count4++;

        eCommerce.innerHTML = "";
        eCommerce.innerHTML += `
                <div class="content">
            <div class="header"><i class="wrench scale blue icon"></i></div>
            <div class="meta">E-Commerce & Shopping</div>
          </div>
          <div class="extra content">
            <i class="check icon"></i>
            ${count4} Companies
          </div>
                
                `;
      } else if (data[i].companyCategory === "Finance") {
        count5++;

        finance.innerHTML = "";
        finance.innerHTML += `
                <div class="content">
            <div class="header"><i class="wrench scale blue icon"></i></div>
            <div class="meta">Finance</div>
          </div>
          <div class="extra content">
            <i class="check icon"></i>
            ${count5} Companies
          </div>
                
                `;
      } else if (data[i].companyCategory === "Food & Drink") {
        count6++;

        foodAndDrink.innerHTML = "";
        foodAndDrink.innerHTML += `
                <div class="content">
            <div class="header"><i class="wrench scale blue icon"></i></div>
            <div class="meta">Food & Drink</div>
          </div>
          <div class="extra content">
            <i class="check icon"></i>
            ${count6} Companies
          </div>
                
                `;
      } else if (data[i].companyCategory === "Health") {
        count7++;

        health.innerHTML = "";
        health.innerHTML += `
                <div class="content">
            <div class="header"><i class="wrench scale blue icon"></i></div>
            <div class="meta">Health</div>
          </div>
          <div class="extra content">
            <i class="check icon"></i>
            ${count7} Companies
          </div>
                
                `;
      } else if (data[i].companyCategory === "Heavy industry & Engineering") {
        count8++;

        heavyIndustry.innerHTML = "";
        heavyIndustry.innerHTML += `
                <div class="content">
            <div class="header"><i class="ship scale blue icon"></i></div>
            <div class="meta">Heavy industry &...</div>
          </div>
          <div class="extra content">
            <i class="check icon"></i>
            ${count8} Compainies
          </div>
                
                `;
      } else if (data[i].companyCategory === "Home & Garden") {
        count9++;

        homeAndGarden.innerHTML = "";
        homeAndGarden.innerHTML += `
                <div class="content">
            <div class="header"><i class="ship scale blue icon"></i></div>
            <div class="meta">Home & Garden</div>
          </div>
          <div class="extra content">
            <i class="check icon"></i>
            ${count9} Compainies
          </div>
                
                `;
      } else if (data[i].companyCategory === "Pets & Animals") {
        count10++;

        petsAndAnimals.innerHTML = "";
        petsAndAnimals.innerHTML += `
                <div class="content">
            <div class="header"><i class="ship scale blue icon"></i></div>
            <div class="meta">Pets & Animals</div>
          </div>
          <div class="extra content">
            <i class="check icon"></i>
            ${count10} Compainies
          </div>
                
                `;
      } else if (data[i].companyCategory === "Real Estate") {
        count11++;
      } else if (data[i].companyCategory === "Scince & Education") {
        count12++;
      } else if (data[i].companyCategory === "Sports") {
        count13++;
      } else if (data[i].companyCategory === "Travel & Tourism") {
        count14++;
      } else if (data[i].companyCategory === "Vehicles") {
        count15++;
      }
    }
  };

  getData(companyURL);
}

initCompCategory();
