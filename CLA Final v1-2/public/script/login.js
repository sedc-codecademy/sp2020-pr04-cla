const loginBtn = document.getElementById("loginBtn");

const login = async () => {
    let email = document.getElementById('usernameLogin').value;
    let password = document.getElementById('passwordLogin').value;

    let user;

     //email && password ? user = await makeLogin({ email, password }) : swal('Missing email or password');

    if (email && password) {
        user = await makeLogin({ email, password })
        return true;
    } else {
        swal({
            position: 'center',
            icon: 'error',
            title: 'Missing email or password',
        })
        return false;
    }

}

const makeLogin = ({ email, password }) => {
    fetch('//167.172.190.47/login', {
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
                return true;
            }
        })
        .catch((e) => {
            console.log(e);
            localStorage.removeItem('user');

            return false;
        })
}


loginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    login();
})

