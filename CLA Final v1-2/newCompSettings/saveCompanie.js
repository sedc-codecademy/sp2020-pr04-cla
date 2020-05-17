const fs = require('fs');
const newCompanies = require('./newCompSettings');


const saveCompany = async (answers, responde) => {

    let newComp = await fs.readFileSync('./companyData/companiesData.json');
    newComp = JSON.parse(newComp.toString() || "[]");
    let details = new newCompanies(answers)
    newComp.push(details);
    
    fs.writeFile('./companyData/companiesData.json',
        JSON.stringify(newComp ,null, 4),
        (err) => {

            if (err) {
                console.log(err)
                responde.status(412).send(err);
            }
            else {
                responde.status(200).send(details);
                console.log('Success');
            }
        })

};

const events = require('events').EventEmitter;
const saveCompanies = new events();

saveCompanies.on('save-companie', saveCompany);

module.exports = {
    saveCompanies
};
