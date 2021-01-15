clickReload();

function clickReload() {
    var nextBtn = document.getElementById('next');
    var prevBtn = document.getElementById('prev');
    nextBtn.onclick = setInterval(monthSelect, 0);
    prevBtn.onclick = setInterval(monthSelect, 0);
}

function monthSelect() {
    var january = document.getElementById('january');
    var febuary = document.getElementById('febuary');
    var march = document.getElementById('march');

    var januaryList = document.getElementById('january-list');
    var febuaryList = document.getElementById('febuary-list');
    var marchList = document.getElementById('march-list');

    januaryList.style.display = 'flex';
    febuaryList.style.display = 'none';
    marchList.style.display = 'none';

    if(january.classList.contains('active')) {
        januaryList.style.display = 'flex';
        febuaryList.style.display = 'none';
        marchList.style.display = 'none';
    }
    else if(febuary.classList.contains('active')) {
        januaryList.style.display = 'none';
        febuaryList.style.display = 'flex';
        marchList.style.display = 'none';
    }
    else if(march.classList.contains('active')) {
        januaryList.style.display = 'none';
        febuaryList.style.display = 'none';
        marchList.style.display = 'flex';
    }
    else {
        console.log('Erreur ! Aucune donnée n\'a été prise en compte');
    }
}