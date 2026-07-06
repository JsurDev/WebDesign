const btnVideo = document.getElementById('btn-video');
const overlayVideo = document.getElementById('overlay-video');

//Capturamos el iframe dentro de la clase Video
const iframeVideo = overlayVideo.querySelector('iframe');

const urlVideo = "https://www.youtube.com/embed/JgBT6EYSnXk?si=U0nJK5SzXs96yMGT";

//se abre el Video visualmente
btnVideo.addEventListener('click', () => {
    // Le aseguramos el link al iframe antes de mostrarlo
    iframeVideo.setAttribute('src', urlVideo);
    overlayVideo.classList.add('active');
});


overlayVideo.addEventListener('click', (e) => {
    if (e.target === overlayVideo) {
        overlayVideo.classList.remove('active');

        //Vaciamos el src para callar el video
        iframeVideo.setAttribute('src', '');
    }
});