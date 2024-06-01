// poner hora
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
// principal
function actualizarHora2() {
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
    document.getElementById('hora-actual-principal').innerText = horaActual;
}
setInterval(actualizarHora2, 1000);

// poner fecha
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
