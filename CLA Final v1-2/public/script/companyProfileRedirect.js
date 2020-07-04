const seeCompanyProfile = (lsName, location, element) => {
    window.location.href = `${location}`

    localStorage.setItem(`${lsName}`, element);
};