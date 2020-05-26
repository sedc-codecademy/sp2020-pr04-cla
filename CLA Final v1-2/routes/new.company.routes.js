const newCompany = require('express').Router();
const newCompanyController = require('../controllers/new.company.controller');
const path = require('path');
const jsonCompanies = path.join(__dirname, '../companyData/companiesData.json');

const ncc = new newCompanyController();


newCompany.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body) {
        res.status(412).json({ error: { msg: "Error" } })
    } else {
        if (ncc.saveComp(req.body, res)) {
            res.status(200).json({})
        } else {
            res.status(400).json({ error: { msg: 'Company cannot be added' } })
        }
    }

})

newCompany.get('/', (req, res) => {
    ncc.showComp(res.sendFile(jsonCompanies))
})

module.exports = newCompany;