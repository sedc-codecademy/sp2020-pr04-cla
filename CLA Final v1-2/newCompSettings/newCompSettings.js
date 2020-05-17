class newCompanies {
    constructor({ companyName, companyAddress, companyCountry, companyRegNumber, companyCategory, companyEmail, companyPhone, companyWebsite}){
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