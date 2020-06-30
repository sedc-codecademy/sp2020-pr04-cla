const LoginModel = require('../models/login.model');

class LoginController {
    constructor(){
        this.lm = new LoginModel;
    }

    makeLogin({email, password}){
        return this.lm.checkUser(email, password)
    }
}

module.exports = LoginController;