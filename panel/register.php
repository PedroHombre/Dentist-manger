<!-- TODO:
- field animations
- styles
- realtime password strength calculator
- js validations
- php validations
- loggedin redirect
- email account verication -->

<form method="POST" id="registerForm">
    <label for="name">Name</label>
    <input type="text" name="name" id="name">
    <br />

    <label for="surname">Surname</label>
    <input type="text" name="surname" id="surname">
    <br />

    <label for="mail">E-mail</label>
    <input type="email" name="Email" id="email">
    <br />

    <label for="password">Password</label>
    <input type="password" name="password" id="password">
    <br />

    <label for="repeat password">Repeat password</label>
    <input type="password" name="repeatPassword" id="repeatPassword">
    <br />

    <input type="button" id="formSubmitBtn" value="Register">
</form>

<script src="js/register-validation.js"></script>