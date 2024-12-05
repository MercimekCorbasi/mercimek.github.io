document.getElementById('button1').addEventListener('click', function() {
    document.getElementById('content').innerHTML = "<h2>Hizmetler</h2><p>Bizim sunduğumuz hizmetler hakkında bilgiler burada yer alacak.</p>";
});

document.getElementById('button2').addEventListener('click', function() {
    document.getElementById('content').innerHTML = "<h2>Ürünler</h2><p>Ürünlerimiz hakkında detaylı bilgiler burada yer alacak.</p>";
});

document.getElementById('button3').addEventListener('click', function() {
    document.getElementById('content').innerHTML = "<h2>İletişim</h2><p>Bize ulaşmak için iletişim bilgilerimiz burada yer alacak.</p>";
});
