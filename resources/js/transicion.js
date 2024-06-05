document.querySelector('.boton-encender').addEventListener('click', function() {
    var pantallaOff = document.querySelector('.pantalla-off');
    var pantallaBloqueo = document.querySelector('.pantalla-bloqueado');
    var pantallaDesbloqueo = document.querySelector('.pantalla-desbloqueo');
    var pantallaPrincipal = document.querySelector('.pantalla-principal');

    pantallaOff.style.display = 'flex';

    if (pantallaOff.style.display === 'none' || pantallaOff.style.opacity === '0') {
        pantallaOff.style.display = 'none';
        setTimeout(function() {
            pantallaOff.style.opacity = '1';
        }, 10);

        pantallaBloqueo.classList.remove('blur-effect');
        pantallaBloqueo.style.display = 'flex';
        pantallaBloqueo.style.opacity = '1';

        pantallaDesbloqueo.style.opacity = '0';
        setTimeout(function() {
            pantallaDesbloqueo.style.display = 'none';
        }, 1000);

        pantallaPrincipal.style.display = 'none';
    } else {
        pantallaOff.style.opacity = '0';
        setTimeout(function() {
            pantallaOff.style.display = 'none';
        }, 500);

        pantallaBloqueo.style.display = 'none';
        pantallaDesbloqueo.style.display = 'none';
        pantallaPrincipal.style.display = 'none';

        imgIndex = 0;
        const images = document.querySelectorAll('.valor img');
        images.forEach(image => {
            image.src = 'resources/img/icon-resources/unchekc.svg';
        });
    }
});
document.querySelector('.boton-silencio').addEventListener('click', function() {
    var tonoIcon = document.querySelector('.tono-icon img');
    if (tonoIcon.src.includes('alerta-de-notificacion.png')) {
        tonoIcon.src = 'resources/img/icon-resources/notificacion.png';
    } else {
        tonoIcon.src = 'resources/img/icon-resources/alerta-de-notificacion.png';
    }
});

document.querySelector('.boton-silencio').addEventListener('click', function() {
    var tonoIcon = document.querySelector('.boton-tono');
    tonoIcon.style.opacity = '0.5'; 
    setTimeout(function() {
        tonoIcon.style.opacity = '0'; 
    }, 1000);
});

