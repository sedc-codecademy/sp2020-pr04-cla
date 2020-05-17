const router = require('express').Router();
const saveCompanie = require('../newCompSettings/saveCompanie');


router.post('/', (req, res) => {
    saveCompanie.saveCompanies.emit('save-companie', req.body, res)
});


module.exports = router;