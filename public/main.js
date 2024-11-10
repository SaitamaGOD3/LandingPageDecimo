if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Verificar si ya hay un Service Worker registrado
        if (!navigator.serviceWorker.controller) {
            navigator.serviceWorker.register('./sw.js')
                .then(res => console.log('Service Worker registrado correctamente', res))
                .catch(err => console.log('Error al registrar el Service Worker', err));
        } else {
            console.log('El Service Worker ya está controlando esta página.');
        }
    });
} else {
    console.log('Service Worker no soportado en este navegador');
}
