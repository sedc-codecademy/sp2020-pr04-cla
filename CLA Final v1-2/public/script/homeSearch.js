var selectCategory = document.getElementById("companyCategoryIndustry");
var enterAddress = document.getElementById("enterAddress");
var enterKeyword = document.getElementById("enterKeyword");


var obj = {};

const searchBtn = document.getElementById("searchBtn");


searchBtn.addEventListener("click", function(){

    var inputCategory = selectCategory.value;
    var inputAddress = enterAddress.value;
    var inputKeyword = enterKeyword.value;

    obj.keyword = inputKeyword;
    obj.address = inputAddress;
    obj.category = inputCategory;

    const entries = Object.entries(obj);

    for (let [key, value] of entries) {
        localStorage.setItem(key, value);
    }

    window.open('../search-companies.html', '_self');
})
