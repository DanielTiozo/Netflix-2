const botaoSom = document.querySelector(".button-som");
const video = document.querySelector(".video");
const botaoInfo = document.querySelector(".link-info");
const modal = document.querySelector(".modal");
const audio = document.querySelector(".audio");

botaoSom.addEventListener("click", ligarSom);

function ligarSom() {
	// if (video.muted) {
	// 	video.muted = false;
	// } else {
	// 	video.muted = true;
	// }
	video.muted = !video.muted;
}

botaoInfo.addEventListener("click", mostrarModal);
modal.addEventListener("click", esconderModal);

function mostrarModal() {
	modal.style.display = "block";
}

function esconderModal() {
	modal.style.display = "none";
}

window.addEventListener("load", audioPlay);

function audioPlay() {
	audio.play();
}
