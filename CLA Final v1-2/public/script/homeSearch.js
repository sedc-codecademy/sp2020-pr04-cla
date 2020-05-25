let selectCategory = document.getElementById("selectCategory");
let enterAddress = document.getElementById("enterAddress");
let enterKeyword = document.getElementById("enterKeyword");


let obj = [];

const searchBtn = document.getElementById("searchBtn");


searchBtn.addEventListener("click", function(){

    let inputCategory = selectCategory.options[selectCategory.selectedIndex].text;
    let inputAddress = enterAddress.value;
    let inputKeyword = enterKeyword.value;
    
    obj.push({
        Cat: inputCategory,
        Address: inputAddress,
        Keyword: inputKeyword
    });


    window.open('../search-companies.html', '_blank')
})


// export default obj;