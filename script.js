const btnmenu = document.getElementById("botao_menu");
// Como a propria função diz, "pegar o ID", então so funciona com IDs, não com classes ou tags

const menu = document.getElementById("menu");


const links = document.querySelectorAll("#menu a");

btnmenu.addEventListener("click",() =>{
    menu.classList.toggle("ativo");

});

links.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("ativo");
  });
}); 

