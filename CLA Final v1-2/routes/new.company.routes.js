const newCompany = require('express').Router();
const newCompanyController = require('../controllers/new.company.controller');
const path = require('path');
const jsonCompanies = path.join(__dirname, '../companyData/companiesData.json');

const ncc = new newCompanyController();


newCompany.post('/', (req, res) => {

    if (!req.body) {
        res.status(412).json({ error: { msg: "Error" } })
    } else {
        if (ncc.saveComp(req.body, res)) {
            console.log('Success');
        } else {
            res.status(400).json({ error: { msg: 'Same Email' } })
        }
    }

})

newCompany.get('/', (req, res) => {
    ncc.showComp(res.sendFile(jsonCompanies))
})

newCompany.get('/title/:name', (req, res) => {
    if(req.params.name)
    res.status(200).json(ncc.getCompTitle(req.params.name))

})
module.exports = newCompany;