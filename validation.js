const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const lastname_input = document.getElementById('lastname-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const confirm_password_input = document.getElementById('confirm-password-input')
const error_message = document.getElementById('errorMessage')
const onlyLetters = /^[\p{L}\s]+$/u;

form.addEventListener('submit', (e) => {
    let errors = []

    if(firstname_input){
        // If we have a firstname input, then we are in the signup page
        errors = getSignupFormErrors(firstname_input.value, lastname_input.value, email_input.value, password_input.value, confirm_password_input.value)
    }
    else{
        // If we have no firstname input, then we are in the login page
        errors = getLoginFormErrors(email_input.value, password_input.value)
    }
    if(errors.length > 0){
        // If there are any error in the form, it will not be submitted
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
})

function getSignupFormErrors(firstname, lastname, email, password, confirmPassword){
    let errors = []

    if(firstname === '' || firstname == null){
        errors.push('Nama depan harus diisi')
    }
    if(lastname === '' || lastname == null){
        errors.push('Nama belakang harus diisi')
    }
    if(email === '' || email == null){
        errors.push('Email harus diisi')
    }
    if(password === '' || password == null){
        errors.push('Password harus diisi')
    }
    if(confirmPassword === '' || confirmPassword == null){
        errors.push('Password harus diisi')
    }
    if(password !== confirmPassword){
        errors.push('Password tidak sama')
    }
    if(!onlyLetters.test(firstname) || !onlyLetters.test(lastname)){
        errors.push('Harus diisi dengan huruf')
    }

    return errors;
}

function getLoginFormErrors(email, password){
    if(email === '' || email == null){
        errors.push('Email harus diisi')
    }
    if(password === '' || password == null){
        errors.push('Password harus diisi')
    }

    return errors;
}

const allInputs = [firstname_input, lastname_input, email_input, password_input, confirm_password_input]

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
        }
    })
})