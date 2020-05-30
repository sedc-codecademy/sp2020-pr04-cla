const NewAdModel = require('../models/new.ad.model');

const nam = new NewAdModel();

class NewAdController {
    constructor(){}

    saveAd(answers, responde){
        return nam.saveAd(answers, responde)
    }

    showAd(file){
        return nam.showAds(file)
    }
}

module.exports = NewAdController;