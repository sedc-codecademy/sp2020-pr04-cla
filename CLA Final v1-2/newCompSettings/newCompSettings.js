class newCompanies {
    constructor({ firstName, lastName, password, companyName, companyAddress, companyCountry, companyRegNumber, companyCategory, companyEmail, companyPhone, companyWebsite}){
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
    }
}

module.exports = newCompanies;