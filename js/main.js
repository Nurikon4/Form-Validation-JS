let btn = document.querySelector('.signin__form-button');

const modal = document.querySelector('.modal');
const section = document.querySelector('.section');
const ok = document.querySelector('.modal__ok')

    btn.addEventListener('click', function(e) {
        e.preventDefault();

    let userName = document.forms["signin"]["username"];
    let password = document.forms["signin"]["password"];
    let userNameUp = document.forms["signin"]["username"];
    let nameUp = document.forms["signin"]["name"];
    let telUp = document.forms["signin"]["tel"];
    let passwordUp = document.forms["signin"]["password"];

    if( userName.value == '' || password.value == '' || userNameUp.value == '' || nameUp.value == '' || telUp.value == '' || passwordUp.value == '') {
        modal.classList.remove('hidden');
        section.classList.add('blur');
    } 

});

ok.addEventListener('click', () => {
    modal.classList.add('hidden');
    section.classList.remove('blur');
})