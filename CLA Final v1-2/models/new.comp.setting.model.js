const path = require('path');
const fs = require('fs');
const allUsers = path.join(__dirname, '../companyData/companiesData.json');
const file = fs.readFileSync(allUsers)
let parsedFile = JSON.parse(file)


class newCompanies {
    constructor({id ,firstName, lastName, password, companyName, companyAddress, companyCountry, companyRegNumber, companyCategory, companyEmail, companyPhone, companyWebsite, companyEmployees, companyFounded, serviceDescribe, businessEntity, companyType, companyAbout}){
        this.id = parsedFile.length +1
        this.firstName = firstName
        this.lastName = lastName
        this.password = password
        this.companyName = companyName
        this.companyAddress = companyAddress
        this.companyCountry = companyCountry
        this.companyRegNumber = companyRegNumber
        this.companyCategory = companyCategory
        this.companyEmail = companyEmail
        this.companyPhone = companyPhone
        this.companyWebsite = companyWebsite
        this.companyEmployees = companyEmployees;
        this.companyFounded = companyFounded;
        this.serviceDescribe = serviceDescribe;
        this.businessEntity = businessEntity;
        this.companyType = companyType;
        this.companyAbout = companyAbout;
    }
}

module.exports = newCompanies;