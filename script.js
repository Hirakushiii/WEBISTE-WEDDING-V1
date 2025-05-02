const song = document.querySelector('#song');
const DiskOn = document.querySelector('#disk-on');
const DiskIcon = document.querySelector('#disk-on i');
let SongOnPlay = false;

function EnableScrool(){
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = () =>{
        window.scrollTo(scrollTop, scrollLeft);
    }
    document.querySelector(":root").style.scrollBehavior = 'auto';
}
function DisableScrool() {
    alert('Selamat Datang!\nSilahkan cek waktu dan tempat berlangsungnya acara\nBeserta reservasi kedatangan anda');
    window.onscroll = () =>{}
    document.querySelector(":root").style.scrollBehavior = 'smooth';
    document.querySelector('#main-btn').setAttribute('href', '#home');
    localStorage.setItem('opened', 'true');
    document.querySelector('#main-btn').classList.add('d-none');
    Playaudio();
}
function Playaudio(){
    DiskOn.style.display = 'flex';
    song.play();
    song.volume = 0.3;
    SongOnPlay = true;
}
DiskOn.addEventListener('click', () =>{
    if(SongOnPlay){
        song.pause();
        DiskIcon.classList.remove('bi-disc');
        DiskIcon.classList.add('bi-pause-circle');
    }else{
        song.play();
        DiskIcon.classList.remove('bi-pause-circle');
        DiskIcon.classList.add('bi-disc');
    }
    SongOnPlay = !SongOnPlay;
})
EnableScrool();

// SCRIPT TAMU
const URL = new URLSearchParams(window.location.search);
const NamaTamu = URL.get('n') || '';
const verb = URL.get('p') || 'Bapak/Ibu/Saudara/i';

document.querySelector('.hero-section main h4 span').innerText = `${verb} ${NamaTamu}`.replace(/ ,$/ ,',');
document.querySelector('#Nama').value = NamaTamu;