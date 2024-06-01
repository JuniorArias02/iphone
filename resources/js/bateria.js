if ('getBattery' in navigator) {
    navigator.getBattery().then(function(battery) {
        function updateBatteryLevel() {
            // Obtener el nivel de batería (de 0 a 1)
            const level = battery.level;
            // Actualizar el ancho de la barra de batería
            document.querySelector('.bateria-var').style.width = (level * 100) + '%';
        }

        
        updateBatteryLevel();

      
        battery.addEventListener('levelchange', updateBatteryLevel);
    });
} else {
    console.log("Battery API no soportada en este navegador.");
}


  function updateConnectionStatus() {
    const wifiIcon = document.querySelector('.wifi img');
    if (navigator.onLine) {
        wifiIcon.src = 'resources/img/icon-resources/internet.svg'; 
    } else {
        wifiIcon.src = 'resources/img/icon-resources/no-signal.svg'; 
    }
}


updateConnectionStatus();

window.addEventListener('online', updateConnectionStatus);
window.addEventListener('offline', updateConnectionStatus);