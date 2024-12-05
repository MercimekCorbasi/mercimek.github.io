// Modal açma ve kapama
const modals = {
    register: document.getElementById('register'),
    login: document.getElementById('login'),
};

const closeButtons = document.getElementsByClassName('close');

for (let btn of closeButtons) {
    btn.onclick = function() {
        for (let modal of Object.values(modals)) {
            modal.style.display = "none";
        }
    };
}

// Kayıt ol ve giriş yapma bağlantılarına tıklama
document.querySelector('nav a[href="#register"]').onclick = function() {
    modals.register.style.display = "block";
};

document.querySelector('nav a[href="#login"]').onclick = function() {
    modals.login.style.display = "block";
};

// Dışarıya tıkladığında modal kapama
window.onclick = function(event) {
    for (let modal of Object.values(modals)) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
};
