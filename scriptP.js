
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

function togglePlay() {
    if (song.paused) {
        song.play();
        btn.innerHTML = "PAUSE MUSIC";
        btn.style.background = "#ef4444"; 
        label.innerText = "Now Playing";
        
    } else {
        song.pause();
        btn.innerHTML = "PLAY MUSIC";
        btn.style.background = "#38bdf8";
        label.innerText = "Paused"; 
    }
}
document.body.addEventListener('click', function() {
    if (song.paused) {
        song.play();
        btn.innerHTML = "PAUSE MUSIC";
        btn.style.background = "#ef4444";
        
    }
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault ();
        return false;
    }) 
    document.addEventListener('keydown', function (e) {
        if (e.keyCode == "123") {
            e.preventDefault ();
            return false;
        } if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'J' .charCodeAt(0) || e.keyCode == 'U' .charCodeAt(0)) {
             e.preventDefault ();
             return false ;            
        } if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            e.preventDefault ();
            return false;
        }
    })
}, { once: true });
        function startWeb() {
   
    var audio = document.getElementById("myAudio");
    audio.play();
    btn.innerHTML = "PAUSE MUSIC";
    var overlay = document.getElementById("overlay");
    overlay.style.opacity = "0";
    
    setTimeout(function() {
        overlay.style.display = "none";
    }, 800);
}
   
    