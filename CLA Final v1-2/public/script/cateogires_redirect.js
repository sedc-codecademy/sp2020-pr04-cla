const listOfItems = document.getElementsByClassName("for-selection");


$(document).on("click", ".for-selection", function(){
    
    const value = $(this).text();

    localStorage.setItem("category_value", value);
    window.open('../search-companies.html', '_self');


})