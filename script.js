let modal = document.getElementById('my_modal');
let btn = document.getElementById('apply');
let span = document.getElementsByClassName("close")[0];
let res = document.getElementById('more');

res.onclick = function() {
    localStorage.setItem("reg", 0);
};

btn.onclick = function() {
    let reg = parseInt(localStorage.getItem("reg")) || 0;

    if (reg == 1) {
        alert("Запись на мастер класс уже была осуществлена");
    } else {
        modal.style.display = 'flex';   
    } 
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
    localStorage.setItem("reg", 1);
    modal.style.display = 'none';
}
