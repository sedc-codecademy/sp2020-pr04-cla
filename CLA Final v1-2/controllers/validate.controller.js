const ValidateModel = require('../models/validate.model');

class ValidateController {
    constructor(){
        this.vc = new ValidateModel;
    }

    checkSameCredentials(answers, responde){
        return this.vc.seeSameCredidentials(answers, responde)
    }
}

module.exports = ValidateController;