document.querySelector('.boton-encender').addEventListener('click', function() {
    var pantallaOff = document.querySelector('.pantalla-off');
    if (pantallaOff.style.display === 'none' || pantallaOff.style.opacity === '0') {
        pantallaOff.style.display = 'block';
        setTimeout(function() {
            pantallaOff.style.opacity = '1';
        }, 10); 
    } else {
        pantallaOff.style.opacity = '0';
        setTimeout(function() {
            pantallaOff.style.display = 'none';
        }, 500);
    }
});

document.querySelector('.boton-silencio').addEventListener('click', function() {
    var tonoIcon = document.querySelector('.tono-icon img');
    if (tonoIcon.src.includes('alerta-de-notificacion.png')) {
        tonoIcon.src = 'resources/notificacion.png';
    } else {
        tonoIcon.src = 'resources/alerta-de-notificacion.png';
    }
});

document.querySelector('.boton-silencio').addEventListener('click', function() {
    var tonoIcon = document.querySelector('.boton-tono');
    tonoIcon.style.opacity = '0.5'; 
    setTimeout(function() {
        tonoIcon.style.opacity = '0'; 
    }, 1000);
});

