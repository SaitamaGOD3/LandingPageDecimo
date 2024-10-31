if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(res => console.log('Service Worker registrado correctamente', res))
        .catch(err => console.log('Error al registrar el Service Worker', err));
} else {
    console.log('Service Worker no soportado en este navegador');
}
