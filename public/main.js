if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(registration => {
        console.log('Service Worker registrado correctamente:', registration);

        // Escuchar si hay una actualización
        registration.onupdatefound = () => {
          const newWorker = registration.installing;
          newWorker.onstatechange = () => {
            if (newWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // Hay una nueva versión disponible, mostrar una notificación
                console.log('Nueva versión disponible. Recarga para actualizar.');
                // Puedes mostrar un mensaje en pantalla o forzar la recarga
                if (confirm('Una nueva versión está disponible. ¿Quieres actualizar la página?')) {
                  window.location.reload();
                }
              }
            }
          };
        };
      })
      .catch(error => console.error('Error al registrar el Service Worker:', error));
  });
}
