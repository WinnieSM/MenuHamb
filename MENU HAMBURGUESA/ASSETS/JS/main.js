const botonMenu = document.getElementById("iNav");
const header = document.getElementById("header");
const imgLC = document.getElementById("imgLC");
const imgLN = document.getElementById("imgLN");
const listMenu = document.getElementById("listMenu");
const listMulIconsenu = document.getElementById("ulIcons");

const enlaces = ulIcons.querySelectorAll("li a");

const TOEditor = " Editor de Texto";
const TOActiv = " Actividades";


botonMenu.addEventListener("click", function(){

if(botonMenu.classList.contains("fa-bars")){
    botonMenu.classList.remove("fa-bars");
    botonMenu.classList.add("fa-x");
    header.classList.add("wid250");
    listMenu.classList.remove("text-center");
    imgLN.classList.add("dNone");
    imgLC.classList.remove("dNone");
    listMenu.classList.add("listMenu2");
    enlaces.forEach(enlace => {
        enlace.classList.add("pl-4");
    });
    /* Poner texto */
    aEditor.textContent = TOEditor;
    aActiv.textContent = TOActiv;

    

}else{
    botonMenu.classList.remove("fa-x");
    botonMenu.classList.add("fa-bars");
    header.classList.remove("wid250");
    imgLN.classList.remove("dNone");
    imgLC.classList.add("dNone");
    listMenu.classList.add("text-center");
    listMenu.classList.remove("listMenu2");
    enlaces.forEach(enlace => {
        enlace.classList.remove("pl-4");
    });
    /* Quitar texto */
    aEditor.textContent = "";
    aActiv.textContent = "";
}





});