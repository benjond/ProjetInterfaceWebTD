document.querySelectorAll('#OpenPopup').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('PopUp').style.display = 'block';
        document.getElementById('Effet').style.display = 'block';
        document.getElementById('BoutiqueMain').style.filter = "blur(10px)";
        document.getElementById('BarNavigation').style.filter = "blur(10px)";
    });
});

document.querySelectorAll('#ClosePopup').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('PopUp').style.display = 'none';
        document.getElementById('Effet').style.display = 'none';
        document.getElementById('BoutiqueMain').style.filter = "none";
        document.getElementById('BarNavigation').style.filter = "none";
    });
});