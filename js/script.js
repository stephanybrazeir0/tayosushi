const btnMobile = document.querySelector(".header button");
const nav = document.querySelector(".header nav");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  nav.classList.toggle("ativo");

  const ativo = nav.classList.contains("ativo");
  event.currentTarget.setAttribute("aria-expanded", ativo);

  if (ativo) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

// fechar menu ao escolher uma opção
const links = document.querySelectorAll(".header li a");

function fecharMenu(event) {
  const clicada = event.currentTarget;
  if (clicada) {
    nav.classList.toggle("ativo");

    const ativo = nav.classList.contains("ativo");
    btnMobile.setAttribute("aria-expanded", ativo);

    if (ativo) {
      btnMobile.setAttribute("aria-label", "Fechar Menu");
    } else {
      btnMobile.setAttribute("aria-label", "Abrir Menu");
    }
  }
}

function cliqueMenu(link) {
  link.addEventListener("click", fecharMenu);
}

links.forEach(cliqueMenu);

//Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
