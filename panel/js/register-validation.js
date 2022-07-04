let formSubmit = document.getElementById('formSubmitBtn');
let registerForm = document.getElementById('registerForm');

let nameF = document.getElementById('name');
let surname = document.getElementById('surname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let passwordConfirm = document.getElementById('repeatPassword');

let nameValidated = false;
let surnameValidated = false;
let emailValidated = false;

nameF.addEventListener('input', () => {
	if (nameF != '') nameValidated = true;
});

surname.addEventListener('input', () => {
	if (surname != '') surnameValidated = true;
});

email.addEventListener('input', () => {
	if (email != '') emailValidated = true;
});
