document.querySelector('.barra_navegacion').addEventListener('click', function() {
    var pantallaBloqueado = document.querySelector('.pantalla-bloqueado');
    var pantallaDesbloqueo = document.querySelector('.pantalla-desbloqueo');

    if (pantallaBloqueado.classList.contains('blur-effect')) {
        pantallaBloqueado.classList.remove('blur-effect');
        pantallaDesbloqueo.style.opacity = '0';
        setTimeout(function() {
            pantallaDesbloqueo.style.display = 'none';
        }, 1000); 
    } else {
        pantallaBloqueado.classList.add('blur-effect');
        pantallaDesbloqueo.style.display = 'flex';
        setTimeout(function() {
            pantallaDesbloqueo.style.opacity = '1';
        }, 100); 
    }
});


document.querySelector('.barra_navegacion2').addEventListener('click', function() {
    var pantallaBloqueado = document.querySelector('.pantalla-bloqueado');
    var pantallaDesbloqueo = document.querySelector('.pantalla-desbloqueo');

    if (pantallaBloqueado.classList.contains('blur-effect')) {
        pantallaBloqueado.classList.remove('blur-effect');
        pantallaDesbloqueo.style.opacity = '0';
        setTimeout(function() {
            pantallaDesbloqueo.style.display = 'none';
        }, 1000);
    } else {
        pantallaBloqueado.classList.add('blur-effect');
        pantallaDesbloqueo.style.display = 'flex';
        setTimeout(function() {
            pantallaDesbloqueo.style.opacity = '1';
        }, 100); 
    }
});
