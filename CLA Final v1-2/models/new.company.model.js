const fs = require('fs');
const newCompanies = require('./new.comp.setting.model');
const path = require('path');
const jsonComp = path.join(__dirname, '../companyData/companiesData.json');
const compFile = JSON.parse(fs.readFileSync(jsonComp))

class SaveComp {
    constructor() {}

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
        responde.status(200).json({})
    }

    showCompanies(file) {
        return file
    }

    getCompTitle(title){
        return compFile.filter(comp => comp.companyName == title)
    }


}









module.exports = SaveComp;
