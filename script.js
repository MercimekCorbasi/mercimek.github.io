const modals = {
    register: document.getElementById('register'),
    login: document.getElementById('login'),
    profile: document.getElementById('profile'),
    addProduct: document.getElementById('addProduct'),
};

const closeButtons = document.getElementsByClassName('close');

for (let btn of closeButtons) {
    btn.onclick = function() {
        for (let modal of Object.values(modals)) {
            modal.style.display = "none";
        }
    };
}

const profileLink = document.getElementById('profileLink');

// Kullanıcı giriş işlemi (basit simülasyon)
document.getElementById('login-form').onsubmit = function(event) {
    event.preventDefault();
    profileLink.style.display = 'inline'; // Profil linkini göster
    modals.login.style.display = "none"; // Modalı kapat
    alert('Giriş başarılı');
};

// Kayıt ol işlemi (basit simülasyon)
document.getElementById('register-form').onsubmit = function(event) {
    event.preventDefault();
    modals.register.style.display = "none"; // Modalı kapat
    alert('Kayıt başarılı. Giriş yapabilirsiniz.');
};

// Kullanıcı profilini görüntüle
profileLink.onclick = function() {
    modals.profile.style.display = "block";
    document.getElementById('profileInfo').innerText = "Kullanıcı Adı: test_user@example.com"; // Basit bilgi
};

// Ürün ekleme
document.getElementById('add-product-form').onsubmit = function(event) {
    event.preventDefault();
    const productName = event.target[0].value;
    const productDescription = event.target[1].value;
    const productPrice = event.target[2].value;

    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerText = `${productName} - ${productDescription} (${productPrice} TL)`;
    document.getElementById('productList').appendChild(productDiv);

    modals.addProduct.style.display = "none"; // Modalı kapat
    alert('Ürün eklendi!');
};

// Ürün ekle modalını açmak için bir buton ekleyin (örneğin, giriş yaptıktan sonra)
document.body.onload = function() {
    if (profileLink.style.display === 'inline') {
        const addProductButton = document.createElement('button');
        addProductButton.innerText = 'Ürün Ekle';
        addProductButton.onclick = function() {
            modals.addProduct.style.display = 'block';
        };
        document.body.appendChild(addProductButton);
    }
};

// Dışarıya tıkladığında modal kapama
window.onclick = function(event) {
    for (let modal of Object.values(modals)) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
};
