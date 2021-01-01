donationWindow()


function donationWindow() {
    console.log('debut')
    var button = document.getElementById('close');
    button.onclick = showAlert;
    console.log('Engagé')
}


function showAlert() {
    var giftwindow = document.getElementById('give-window');
    giftwindow.style.display = 'none';
}