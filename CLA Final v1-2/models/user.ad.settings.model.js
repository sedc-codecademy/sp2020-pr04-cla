class newAd {
    constructor({ id, adCategory, adTitle, adType, adAmount, adDescription, companyAddress, companyName, companyEmail, companyWebsite, companyPhone, companyCountry }) {
        this.id = id
        this.adCategory = adCategory
        this.adTitle = adTitle
        this.adType = adType
        this.adAmount = adAmount
        this.adDescription = adDescription
        this.companyAddress = companyAddress
        this.companyName = companyName
        this.companyEmail = companyEmail
        this.companyWebsite = companyWebsite
        this.companyPhone = companyPhone
        this.companyCountry = companyCountry
    }
}

module.exports = newAd;
