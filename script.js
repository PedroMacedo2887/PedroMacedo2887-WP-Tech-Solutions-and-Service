document.addEventListener('DOMContentLoaded', function() {
    const paginaAtual = window.location.pathname.split('/').pop();
    
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            const destino = this.getAttribute('href');
            
            if (paginaAtual === destino) {
                e.preventDefault();
                alert('Você já está nesta página!');
            }
        });
    });
});

const botaoModal = document.querySelector(".botao-modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
	modal.classList.toggle("aberto");
}

botaoModal.addEventListener("click", () => {
	alternarModal();
	video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
	alternarModal();
	video.setAttribute("src", "");
});