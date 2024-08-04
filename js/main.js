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


    const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})