// Sign up
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(cred => {
            const signupModal = document.querySelector('#modal-signup');
            //TODO: Hide modal and successful signup message
            signupForm.reset();
        });
});

// Logout
const logout = document.querySelector('#logout');

logout.addEventListener('click', (e) => {
    e.preventDefault();
    firebase.auth().signOut()
        .then(() => {
            console.log('user signed out');
            //TODO: Hide modal and successful logout message
        });
});


// Login
const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('click', (e) => {
    e.preventDefault();

    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        //TODO: Hide modal and successful login message
        loginForm.reset();
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    });
});


