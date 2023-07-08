const watchButton = document.querySelector('.watchButton');
const videoContainer = document.querySelector('.videoContainer');
const closeButton = document.querySelector('.bi');
const video = document.querySelector('video');


watchButton.addEventListener('click', () => {
    videoContainer.classList.remove('active');
})
closeButton.addEventListener('click', () => {
    videoContainer.classList.add('active');
    video.pause();
    video.load();
})
