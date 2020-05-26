const router = require('express').Router();

const newCompData = require('./routes/new.company.routes');

router.use('/createNewComp', newCompData);



module.exports = router;