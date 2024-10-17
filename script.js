const avatar = document.getElementById('avatar');
const tudu = new Audio('./audio/tudum-netflix-sound.mp3')
const saiba = document.querySelector('.saiba');

avatar.addEventListener('click', () => {
    tudu.play();
})

saiba.addEventListener('click', () => {
    $('#modal').modal('show')
})