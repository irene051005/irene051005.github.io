let modal = document.getElementById('my_modal');
let btn = document.getElementById('apply');
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = 'flex';
};

span.onclick = function() {
    modal.style.display = 'none';
};

window.onclick = function() {
    if(Event.target == modal) {
        modal.style.display = 'none';
    }
};

const changeHandler = e => {
    const value = e.value;
    e.value = value.replace(/\D/g, '');
};

const notNumbers = e => {
    const value = e.value;
    e.value = value.replace(/[0-9]/g, '');
};

let inputEmail = document.getElementById('email_link');
let btnSubmit = document.getElementById('modal-submit');

inputEmail.addEventListener("input", function() {
    btnSubmit.disabled = (this.value === '');
});

function saveRegistration() {
    let registerLink = document.getElementById('registerLink');
    let name = document.getElementById('signUpUsername').value;

    registerLink.text = name;
    console.log(name);

    let signInLink = document.getElementById('signInLink');
    let email = document.getElementById('email_link').value;

    signInLink.text = email;
    console.log(email);

    modal.style.display = 'none';
}
