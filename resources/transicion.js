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

function actualizarHora() {
    var fecha = new Date();
    var horas = fecha.getHours();
    var ampm = horas >= 12 ? 'PM' : 'AM';
    horas = horas % 12;
    horas = horas ? horas : 12;
    var minutos = fecha.getMinutes();
    if (minutos < 10) {
        minutos = '0' + minutos;
    }
    var horaActual = horas + ':' + minutos ;
    document.getElementById('hora-actual').innerText = horaActual;
}
setInterval(actualizarHora, 1000);

function actualizarFecha() {
    var fecha = new Date();
    var dias = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var diaSemana = dias[fecha.getDay()];
    var diaMes = fecha.getDate();
    var mes = meses[fecha.getMonth()];
    var fechaActual = diaSemana + ', ' + mes + ' ' + diaMes;
    document.getElementById('fecha-actual').innerText = fechaActual;
}

actualizarFecha();
