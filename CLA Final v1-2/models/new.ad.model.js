const fs = require('fs');
const newAds = require('./user.ad.settings.model');
const path = require('path');
const jsonAds = path.join(__dirname, '../companyData/userAd.json');
const adFile = JSON.parse(fs.readFileSync(jsonAds))

class SaveAd {
    constructor(){

    }

    saveAd = async (answers, responde) => {
        let newAd = await fs.readFileSync('./companyData/userAd.json');
        newAd = JSON.parse(newAd.toString() || "[]");
        let adDetails = new newAds(answers)
        newAd.push(adDetails);

        fs.writeFile('./companyData/userAd.json',
        JSON.stringify(newAd, null, 4),
        (err) => {
            if (err) {
                console.log(err)
                responde.status(412).send(err);
            }
            else {
                console.log('Success');
            }
        })
        responde.status(200).json({})
    }

    showAds(file){
        return file
    }

    getSingleAd( id){
        return adFile.filter(ad => ad.id == id);
    }

    getAdByTitle(title){
        return adFile.filter(ad => ad.adTitle == title);

    }
}

module.exports = SaveAd;