


const checkingForUser = (elemOne, elemTwo) => {
    if(localStorage.getItem("user") != null){
        elemOne.style.display = 'none'
        elemTwo.style.display = 'block'
        return true;
    }else {
        return false;
    }
};

