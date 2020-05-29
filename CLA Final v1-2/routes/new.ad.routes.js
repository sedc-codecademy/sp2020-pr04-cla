const newAd = require('express').Router();
const newAdController = require('../controllers/new.ad.controller');
const path = require('path');
const jsonAds = path.join(__dirname, '../companyData/userAd.json');

const nac = new newAdController();

newAd.post('/', (req, res) => {
    if (!req.body) {
        res.status(412).json({ error: { msg: "Error" } })
    }
    else {
        if( nac.saveAd(req.body, res)){
            console.log('Ad Successfully added');
        }
        else {
            res.status(400).json({ error: { msg: 'Error' } })
        }
    }
})


newAd.get('/', (req, res) => {
    nac.showAd(res.sendFile(jsonAds))
})

module.exports = newAd;