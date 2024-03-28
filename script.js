function EnableScrool(){
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
    window.onscroll = () =>{
        window.scrollTo(scrollTop, scrollLeft);
    }

    document.querySelector(":root").style.scrollBehavior = 'auto';
}
function DisableScrool() {
    alert('Selamat Datang! \n Silahkan cek waktu dan tempat berlangsungnya acara \n Beserta reservasi kedatangan');
    window.onscroll = () =>{}
    document.querySelector(":root").style.scrollBehavior = 'smooth';

    localStorage.setItem('opened', 'true');
    document.querySelector('#main-btn').classList.add('d-none');
}
if(!localStorage.getItem('opened')){
    EnableScrool();
}else{
    document.querySelector('#main-btn').classList.add('d-none');
}