const router = require('express').Router();
const login = require('./routes/login.routes');
const newCompData = require('./routes/new.company.routes');
const valControl = require('./routes/validate.routes');
const newAd = require('./routes/new.ad.routes');

router.use('/createNewComp', newCompData);
router.use('/login', login);
router.use('/validate', valControl);
router.use('/createAd', newAd);

module.exports = router;