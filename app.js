//MENU RESPONSIVE
var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menuBar"),
    enlaces = document.getElementById("enlaces");

    //Abrir click
    btnMenuOpen.addEventListener("click", function() {
        menuResponsive.classList.add("active");
    });

    //Cerrar click
    btnMenuClose.addEventListener("click", function() {
        menuResponsive.classList.remove("active");
    });

    //Cerrar menu con elementos de enlace
    enlaces.addEventListener("click", function() {
        menuResponsive.style.transitionDelay = "0.5s";
        menuResponsive.classList.remove("active");
    });

//SLIDER DE PRODUCTOS
var contenedor = document.querySelector(".slider"),
    btnIzquierda = document.getElementById("btn-izquierda"),
    btnDerecha = document.getElementById("btn-derecha");

    //Evento Boton Derecha
    btnDerecha.addEventListener("click", function() {
        contenedor.scrollLeft += contenedor.offsetWidth;
    });

    //Evento Boton Izquierda
    btnIzquierda.addEventListener("click", function() {
        contenedor.scrollLeft -= contenedor.offsetWidth;
    });