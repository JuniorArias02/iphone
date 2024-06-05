let imgIndex = 0;

function cambiarImagen(num) {
    const images = document.querySelectorAll('.valor img');
    if (imgIndex < images.length) {
        images[imgIndex].src = 'resources/img/icon-resources/check.svg';
        imgIndex++;
    }

    if (imgIndex === images.length) {
        document.querySelector('.pantalla-desbloqueo').style.display = 'none';
        document.querySelector('.pantalla-bloqueado').style.display = 'none';
        const pantallaPrincipal = document.querySelector('.pantalla-principal');
        pantallaPrincipal.style.display = 'flex';
        pantallaPrincipal.style.flexDirection = 'column';
        pantallaPrincipal.style.alignItems = 'center';
    }
}
