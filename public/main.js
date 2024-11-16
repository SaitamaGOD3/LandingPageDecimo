// Verificar si el navegador soporta Service Workers
if ('serviceWorker' in navigator) {
    // Registrar el Service Worker al cargar la página
    window.addEventListener('load', () => {
      navigator.serviceWorker.getRegistration().then(registration => {
        if (!registration) {
          console.log('No hay un Service Worker activo. Registrando uno nuevo...');
          navigator.serviceWorker.register('./sw.js')
            .then(res => console.log('Service Worker registrado correctamente:', res))
            .catch(err => console.error('Error al registrar el Service Worker:', err));
        } else {
          console.log('Ya existe un Service Worker registrado:', registration);
        }
      });
    });
  } else {
    console.error('Service Worker no soportado en este navegador.');
  }
  