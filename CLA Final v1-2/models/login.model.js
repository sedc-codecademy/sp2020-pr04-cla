const path = require('path');
const fs = require('fs');
const allUsers = path.join(__dirname, '../companyData/companiesData.json');
const file = fs.readFileSync(allUsers)
let parsedFile = JSON.parse(file)


class LoginModel {
    constructor() {

        this.users = parsedFile
    }

    checkUser(email, password) {
        if (!email || !password) {
            return false;
        } else {
            return this.users.filter((user) => {
                if (user.companyEmail == email && user.password == password) {
                    // console.log(user)
                    return user;
                } else {
                    return false;
                }
            })
        }


    }
}

module.exports = LoginModel;
