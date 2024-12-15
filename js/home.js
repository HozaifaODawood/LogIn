var userName = document.querySelector(`#userName`);
var logOutBtn = document.querySelector(`#logOut`);
var importedName = localStorage.getItem(`currentName`);

logOutBtn.addEventListener(`click`, function () {
    logOutBtn.getAttribute(`href`);
    window.location.href = logOutBtn;
})


if (importedName !== null) {
    userName.innerHTML = importedName;
}










