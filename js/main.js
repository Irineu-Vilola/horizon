/**
   Preload toda configuração do preload.
   */
   const preloader = document.querySelector('#preloader');
   if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
   }
   

   /**
   Menu Hamburguer
   */

   const hamburguer = document.querySelector(".hamburguer");
    const navmenu = document.querySelector(".nav-menu");

    hamburguer.addEventListener("click", () => {

    hamburguer.classList.toggle('active');
    navmenu.classList.toggle('active');

    })



    // Obter os elementos
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementsByClassName('close')[0];

// Abrir a modal
openModalBtn.onclick = function() {
    modal.style.display = 'block';
}

// Fechar a modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Fechar a modal ao clicar fora dela
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}



   