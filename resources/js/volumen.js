
// volumen subir
document.querySelector('.boton-subir_volumen').addEventListener('click', function() {
    var tonoIcon = document.querySelector('.volumen');
    tonoIcon.style.opacity = '0.5'; 
    setTimeout(function() {
        tonoIcon.style.opacity = '0'; 
    }, 1000);
});

// volumen bajar
document.querySelector('.boton-bajar_volumen').addEventListener('click', function() {
    var tonoIcon = document.querySelector('.volumen');
    tonoIcon.style.opacity = '0.5'; 
    setTimeout(function() {
        tonoIcon.style.opacity = '0'; 
    }, 1000);
});



const volumenBar = document.querySelector('.volumen-bar');
const botonSubirVolumen = document.querySelector('.boton-subir_volumen');
const botonBajarVolumen = document.querySelector('.boton-bajar_volumen');

let volumen = 50;


function actualizarVolumen() {
    volumenBar.style.height = volumen + 'px';
}


function subirVolumen() {
    if (volumen < 180) {
        volumen += 10; 
        actualizarVolumen();
    }
}


function bajarVolumen() {
    if (volumen > 0) {
        volumen -= 10; 
        actualizarVolumen();
    }
}

botonSubirVolumen.addEventListener('click', subirVolumen);
botonBajarVolumen.addEventListener('click', bajarVolumen);

actualizarVolumen();

