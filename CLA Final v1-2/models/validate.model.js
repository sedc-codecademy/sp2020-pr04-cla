const fs = require('fs');
const path = require('path');
const allUsers = path.join(__dirname, '../companyData/companiesData.json');
const file = fs.readFileSync(allUsers)
let parsedFile = JSON.parse(file)


class Validate {
    constructor() {
        this.users = parsedFile
    }


    checkForSameEmail(answers) {
        return this.users.filter((user) => user.companyEmail == answers.companyEmail)
    }

    checkForSameName(answers) {
        return this.users.filter((user) => user.companyName == answers.companyName)
    }

    seeSameCredidentials(answers, responde) {
        if (this.checkForSameEmail(answers).length) {
            responde.statusMessage = 'There is already company with same email!'
            responde.status(400).end();
            return false;
        } else if (this.checkForSameName(answers).length) {
            responde.statusMessage = 'There is already company with same name!'
            responde.status(400).end();
            return false;
        } else {
            responde.status(200).json({})
            return true
        }

    }
}

module.exports = Validate;