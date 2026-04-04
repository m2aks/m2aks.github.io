function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock(); 


var song = document.getElementById("myAudio");
var btn = document.getElementById("pBtn");
const judul = document.getElementById('judul-lagu');
const artist = document.getElementById('artist');
const label = document.getElementById('label');

const toggleBtn = document.getElementById('mode-btn');
const modeIcon = document.getElementById('mode-icon');
const profilePic = document.getElementById('profile');
const body = document.body;


toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        modeIcon.innerText = '🌙';
        profilePic.src = "profiles.jpg";
    } else {
        modeIcon.innerText = '☀️';
        profilePic.src = "profile.jpg";
    }
});


function togglePlay() {
    if (song.paused) {
        song.play();
        btn.innerHTML = "❚❚";
        btn.style.background = "#ef4444"; 
        label.innerText = "Now Playing";
    } else {
        song.pause();
        btn.innerHTML = "►";
        btn.style.background = "#2dce05";
        label.innerText = "Paused"; 
    }
}


const playList = [
    { nama: "My Life Is Going On", artist: "Cecilia Krull", file: "life.mp3" },
    { nama: "Flower In The Rain", artist: "Jaci Velasquez", file: "fitr.mp3" },
    { nama: "Birds Of Feather", artist: "Billie Eilish", file: "bof.mp3" },
    { nama: "My Love Mine All Mine", artist: "Mitski", file: "mylove.mp3"}
];

let indexLagu = 0;


function loadLagu(laguP) {
    judul.innerText = laguP.nama;
    artist.innerText = laguP.artist;
    song.src = laguP.file;
    song.load();
}

function togglePrev() {
    indexLagu--;
    if (indexLagu < 0) {
        indexLagu = playList.length - 1;
    }
    loadLagu(playList[indexLagu]);
    song.play();
    btn.innerHTML = "❚❚";
    btn.style.background = "#ef4444";
    label.innerText = "Now Playing";
}

function toggleNext() {
    indexLagu++;
    if (indexLagu > playList.length - 1) {
        indexLagu = 0;
    }
    loadLagu(playList[indexLagu]);
    song.play();
    btn.innerHTML = "❚❚";
    btn.style.background = "#ef4444";
    label.innerText = "Now Playing";
}


document.body.addEventListener('click', function() {
    if (song.paused) {
        song.play();
        btn.innerHTML = "❚❚";
        btn.style.background = "#ef4444";
    }
}, { once: true });


document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
}); 

document.addEventListener('keydown', function (e) {
    if (e.keyCode == 123) {
        e.preventDefault();
    } 
    if (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74 || e.keyCode == 85)) {
        e.preventDefault();
    } 
    if (e.ctrlKey && e.keyCode == 85) {
        e.preventDefault();
    }
});


function startWeb() {
    song.play();
    btn.innerHTML = "❚❚";
    btn.style.background = "#ef4444";
    var overlay = document.getElementById("overlay");
    overlay.style.opacity = "0";
    
    setTimeout(function() {
        overlay.style.display = "none";
    }, 800);
}
