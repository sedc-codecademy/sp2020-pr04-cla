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

    showSingleAd(id){
        return nam.getSingleAd(id)
    }
    
    getAdTitle(title){
        return nam.getAdByTitle(title)
    }
}

module.exports = NewAdController;