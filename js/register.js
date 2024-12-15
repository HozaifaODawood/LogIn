var emailInput = document.querySelector(`#floatingInput`);
var passwordInput = document.querySelector(`#floatingPassword`);
var passwordInput2 = document.querySelector(`#floatingPassword2`);
var loginInput = document.querySelector(`#register`);


var emailsList = [];
var OldData = JSON.parse(localStorage.getItem(`emails`))

if (OldData !== null) {
    emailsList.push(...OldData)
}

console.log(emailsList);


var isExist = false;
var isPassMatch = true;


function addMail() {
    var folder = {
        mail: emailInput.value,
        pass: passwordInput.value
    }

    emailsList.push(folder);
    
    if (isExist == false && isPassMatch == true) {

        localStorage.setItem(`emails`, JSON.stringify(emailsList));

        var backBtnA = document.querySelector(`#backBtnA`).getAttribute(`href`);
        window.location.href = backBtnA;
    }
}

function check() {
    for (let i = 0; i < emailsList.length; i++) {
        if (emailsList[i].mail == emailInput.value) {
            document.querySelector(`#mailMatch`).classList.replace(`d-none`, `d-block`)
            isExist = true;
        } else {
            document.querySelector(`#mailMatch`).classList.replace(`d-block`, `d-none`)
            isExist = false;
        }
    }
}



loginInput.addEventListener(`click`, addMail);

emailInput.addEventListener(`blur`, function () {
    let isValidMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (isValidMail.test(emailInput.value) == true) {
        document.querySelector(`#floatingInput`).classList.add(`is-valid`);
        document.querySelector(`#floatingInput`).classList.replace(`is-invalid`, `is-valid`);
        document.querySelector(`#mailValidity`).classList.replace(`d-block`, `d-none`);
        check()
        
    } else {
        document.querySelector(`#floatingInput`).classList.add(`is-invalid`);
        document.querySelector(`#floatingInput`).classList.replace(`is-valid`, `is-invalid`);
        document.querySelector(`#mailValidity`).classList.replace(`d-none`, `d-block`);
        
    }

    for (let i = 0; i < emailsList.length; i++) {
        if (emailsList[i].mail == emailInput.value) {
            document.querySelector(`#mailMatch`).classList.replace(`d-none`, `d-block`)
            isExist = true;
        } else {
            document.querySelector(`#mailMatch`).classList.replace(`d-block`, `d-none`)
            isExist = false;
        }
    }
})

passwordInput.addEventListener(`blur`, function () {
    let isValidPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/  //Minimum eight characters, at least one letter and one number

    if (isValidPass.test(passwordInput.value) == true) {
        document.querySelector(`#floatingPassword`).classList.add(`is-valid`);
        document.querySelector(`#floatingPassword`).classList.replace(`is-invalid`, `is-valid`);
        document.querySelector(`#pass1Validity`).classList.replace(`d-block`, `d-none`)
    } else {
        document.querySelector(`#floatingPassword`).classList.add(`is-invalid`);
        document.querySelector(`#floatingPassword`).classList.replace(`is-valid`, `is-invalid`);
        document.querySelector(`#pass1Validity`).classList.replace(`d-none`, `d-block`)
    }
})

passwordInput2.addEventListener(`blur`, function () {
    let isValidPass2 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/  //Minimum eight characters, at least one letter and one number

    if (isValidPass2.test(passwordInput2.value) == true) {
        document.querySelector(`#floatingPassword2`).classList.add(`is-valid`);
        document.querySelector(`#floatingPassword2`).classList.replace(`is-invalid`, `is-valid`);
        document.querySelector(`#pass2Validity`).classList.replace(`d-block`, `d-none`)
        if (passwordInput2.value !== passwordInput.value) {
            document.querySelector(`#pass2Matches`).classList.replace(`d-none`, `d-block`)
            isPassMatch = false;
        } else {
            document.querySelector(`#pass2Matches`).classList.replace(`d-block`, `d-none`);
            isPassMatch = true;
        }
    } else {
        document.querySelector(`#floatingPassword2`).classList.add(`is-invalid`);
        document.querySelector(`#floatingPassword2`).classList.replace(`is-valid`, `is-invalid`);
        document.querySelector(`#pass2Validity`).classList.replace(`d-none`, `d-block`)
    }
})





























