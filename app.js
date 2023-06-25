// document.addEventListener('DOMContentLoaded', () => {
//     let password = document.querySelector("#password").value;
//     let cPassword = document.querySelector("#cPassword").value;
//     let checkMatch = document.querySelector('.pMatch');

//     function error() {
//         if(password.length > 0 && cPassword.length > 0) {
//             if(password != cPassword)
//                 checkMatch.textContent = '*Passwords do not match. Try again.';
//         }
//     }
//     error();
// })

// document
// let password = document.querySelector("#password").value;
// let cPassword = document.querySelector("#cPassword").value;
// let checkMatch = document.querySelector('.pMatch');

// function error() {
//     if(password.length > 0 && cPassword.length > 0) {
//         if(password != cPassword)
//             checkMatch.textContent = '*Passwords do not match. Try again.';
//     }
// }
// error();


let password = document.querySelector("#password");
let cPassword = document.querySelector("#cPassword");
let checkMatch = document.querySelector('.pMatch');

password.addEventListener('input', () => {
    if(password.value !== cPassword.value)
        checkMatch.textContent = '*Passwords do not match. Try again.';
    else if(password.value === cPassword.value){
        checkMatch.textContent = '';
    }
})

