const valControl = require('express').Router();
const ValidateController = require('../controllers/validate.controller');

const vcontrl = new ValidateController();


valControl.post('/', (req, res) => {
    if (!req.body) {
        res.status(412).json({ error: { msg: "Error" } })
    } else {
        if (vcontrl.checkSameCredentials(req.body, res)) {
            // console.log(req.body)
            // console.log(req.body.companyEmail)
            // console.log(req.body.companyName)
            // res.status(200).json({})
        }
        //  else {
            
        //     res.status(400).json({ error: { msg: 'Same Creditentials' } })
        // }
    }
})

module.exports = valControl;