const logoutBtn = document.getElementById("logoutBtn");

const  clearLSandLogout = () => {
    localStorage.clear();
    window.location.href = "../login.html"
}

logoutBtn.addEventListener("click", function(e){
    e.preventDefault();
    clearLSandLogout();
})