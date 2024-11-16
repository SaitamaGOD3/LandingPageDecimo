// Verificar si el navegador soporta Service Workers
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Registrar el Service Worker
    navigator.serviceWorker.register('./sw.js')
      .then(registration => {
        console.log('Service Worker registrado correctamente:', registration);
      })
      .catch(error => {
        console.error('Error al registrar el Service Worker:', error);
      });

    // Verificar si ya hay un Service Worker activo
    if (!navigator.serviceWorker.controller) {
      console.log('No hay un Service Worker activo. Registrando uno nuevo...');
    } else {
      console.log('El Service Worker ya está controlando esta página.');
    }
  });
} else {
  console.error('Service Worker no soportado en este navegador');
}
