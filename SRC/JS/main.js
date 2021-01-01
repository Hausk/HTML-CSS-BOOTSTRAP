donationWindow()


function donationWindow() {
    console.log('debut')
    var button = document.getElementById('close');
    button.onclick = closeWindow;
    console.log('Engagé')
}


function closeWindow() {
    var giftwindow = document.getElementById('give-window');
    giftwindow.style.display = 'none';
}