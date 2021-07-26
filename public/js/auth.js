// ---------------------------------------------------------------------------------
// Account Info and Toggle Class

const user = firebase.auth().currentUser;
const loggedOutClass = document.querySelectorAll('.logged-out');
const loggedInClass = document.querySelectorAll('.logged-in');
const accountDetails = document.getElementById('account-details');

// const setupUI = (user) => {
//     if (user) {
//         const  html = `
//             <div>Logged in as ${this.email}</div>
//         `;
//         accountDetails.innerHTML = html;

//         loggedInClass.forEach(item => item.style.display = 'block');
//         loggedOutClass.forEach(item => item.style.display = 'none');
//     } else {
//         accountDetails.innerHTML = '';

//         loggedInClass.forEach(item => item.style.display = 'none');
//         loggedOutClass.forEach(item => item.style.display = 'block');
//     }
// };


// ---------------------------------------------------------------------------------
// Listen for auth status changes

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log(user);
        const  html = `
            <div>Logged in as ${user.email}</div>
        `;
        accountDetails.innerHTML = html;

        loggedInClass.forEach(item => item.style.display = 'block');
        loggedOutClass.forEach(item => item.style.display = 'none');
    } else {
        accountDetails.innerHTML = '';

        loggedInClass.forEach(item => item.style.display = 'none');
        loggedOutClass.forEach(item => item.style.display = 'block');
    }
});


// ---------------------------------------------------------------------------------
// Sign up

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    user.displayName = signupForm['signup-displayname'].value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(cred => {
            
            const signupModal = document.querySelector('#modal-signup');
            //TODO: Hide modal and successful signup message
            signupForm.reset();
        });
});


// ---------------------------------------------------------------------------------
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

        //TODO: Hide modal and successful login message
        loginForm.reset();
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    });
});


// ---------------------------------------------------------------------------------
// Logout

const logout = document.querySelector('#logout');

logout.addEventListener('click', (e) => {
    e.preventDefault();
    firebase.auth().signOut()
        .then(() => {
         
            //TODO: Hide modal and successful logout message
        });
});


