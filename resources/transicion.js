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
    tonoIcon.style.opacity = '0.5'; // Mostrar el icono
    setTimeout(function() {
        tonoIcon.style.opacity = '0'; // Ocultar el icono después de 1 segundo
    }, 1000);
});

function actualizarHora() {
    var fecha = new Date();
    var horas = fecha.getHours();
    var ampm = horas >= 12 ? 'PM' : 'AM';
    horas = horas % 12;
    horas = horas ? horas : 12; // Si son las 0 horas, establecer como 12
    var minutos = fecha.getMinutes();
    // Agregar ceros delante de los minutos si es necesario
    if (minutos < 10) {
        minutos = '0' + minutos;
    }
    // Formatear la hora en formato HH:MM AM/PM
    var horaActual = horas + ':' + minutos ;
    // Actualizar el contenido del elemento con la hora actual
    document.getElementById('hora-actual').innerText = horaActual;
}

// Llamar a la función para actualizar la hora cada segundo
setInterval(actualizarHora, 1000);

function actualizarFecha() {
    var fecha = new Date();
    var dias = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var diaSemana = dias[fecha.getDay()];
    var diaMes = fecha.getDate();
    var mes = meses[fecha.getMonth()];
    // Formatear la fecha en el formato "Día de la semana, Mes Día, Año"
    var fechaActual = diaSemana + ', ' + mes + ' ' + diaMes;
    // Actualizar el contenido del elemento con la fecha actual
    document.getElementById('fecha-actual').innerText = fechaActual;
}

// Llamar a la función para actualizar la fecha cada segundo
actualizarFecha();
