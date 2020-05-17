const router = require('express').Router();

const compData = require('./routes/companiesData');
const newCompData = require('./routes/writeNewCompData');

router.use('/getCompData', compData);
router.use('/createNewComp', newCompData);


module.exports = router;