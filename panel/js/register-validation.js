let formSubmit = document.getElementById('formSubmitBtn');
let registerForm = document.getElementById('registerForm');

let nameF = document.getElementById('name');
let surname = document.getElementById('surname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let passwordConfirm = document.getElementById('repeatPassword');

formSubmit.addEventListener('click', Validate);

let nameValidated = false;
let surnameValidated = false;
let emailValidated = false;
let passwordValidated = false;
let passwordConfirmValidated = false;

nameF.addEventListener('input', () => {
	if (nameF != '') nameValidated = true;
});

surname.addEventListener('input', () => {
	if (surname != '') surnameValidated = true;
});

email.addEventListener('input', () => {
	if (email != '') emailValidated = true;
});

password.addEventListener('input', () => {
	if (password != '') passwordValidated = true;
});

passwordConfirm.addEventListener('input', () => {
	if (passwordConfirm == password) passwordConfirmValidated = true;
});

function Validate() {
	if (
		nameValidated === true &&
		surnameValidated === true &&
		emailValidated === true &&
		passwordValidated === true &&
		passwordConfirmValidated === true
	) {
		registerForm.Submit();
	}
}
