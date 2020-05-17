const router = require('express').Router();
const path = require('path');
const fs = require('fs');

const jsonCompanies = path.join(__dirname, '../companyData/companiesData.json');


router.get('/', (req, res) => {
    res.type('json');
    res.sendFile(jsonCompanies);
});

module.exports = router;

