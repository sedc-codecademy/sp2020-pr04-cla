const NewCompModel = require('../models/new.company.model');

const ncm = new NewCompModel();

class NewCompController {
    constructor(){}

    saveComp(answers, responde){
        return ncm.saveCompany(answers, responde)
    }

    showComp(file){
        return ncm.showCompanies(file)
    }
}

module.exports = NewCompController;