donationWindow()
donateButton()


function donationWindow() {
    var button = document.getElementById('close');
    button.onclick = closeWindow;
}


function closeWindow() {
    var giftwindow = document.getElementById('give-window');
    giftwindow.style.display = 'none';
}

function donateButton() {
    var donate = document.getElementById('donate');
    donate.onclick = donationClick;
}

function donationClick() {
    alert('Ceci est un site "Exemple" Aucune réele donation ne peut être faite.');
}