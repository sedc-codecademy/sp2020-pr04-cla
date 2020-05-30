const loginBtn = document.getElementById("loginBtn");

const login = async () => {
    let email = document.querySelector('input[name="email"]').value;
    let password = document.querySelector('input[name="password"]').value;

    let user;

    email && password ? user = await makeLogin({ email, password }) : alert('Missing email or password');

}

const makeLogin = ({ email, password }) => {
    fetch('//localhost/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            if (data.length === 0) {
                swal({
                    position: 'center',
                    icon: 'error',
                    title: `Wrong email or password`,
                }).then((value) => {
                    if (value)
                        window.location.href = "../login.html"
                    else
                        window.location.href = "../login.html"
    
                })
                return false;
            } else {
                localStorage.setItem('user', JSON.stringify(data));
                window.location.href = '../profile-and-ad-pages/company-profile.html'
                // console.log(data)
                return true;
            }
        })
        .catch((e) => {
            console.log(e);
            localStorage.removeItem('user');

            return false;
        })
}

loginBtn.addEventListener('click', function(e){
    e.preventDefault();
    login();
})