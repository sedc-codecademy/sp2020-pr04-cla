const fs = require('fs');
const newCompanies = require('./new.comp.setting.model');

class SaveComp {
    constructor() { }

    saveCompany = async (answers, responde) => {

        let newComp = await fs.readFileSync('./companyData/companiesData.json');
        newComp = JSON.parse(newComp.toString() || "[]");
        let details = new newCompanies(answers)
        newComp.push(details);

        fs.writeFile('./companyData/companiesData.json',
            JSON.stringify(newComp, null, 4),
            (err) => {

                if (err) {
                    console.log(err)
                    responde.status(412).send(err);
                }
                else {
                    console.log('Success');
                }
            })

    }

    showCompanies(file){
        return file
    }





}



module.exports = SaveComp;
