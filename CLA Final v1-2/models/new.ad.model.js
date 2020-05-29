const fs = require('fs');
const newAds = require('./user.ad.settings.model');


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
}

module.exports = SaveAd;