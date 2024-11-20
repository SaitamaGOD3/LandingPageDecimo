{
// Función para cambiar el idioma
const changeLanguage = async (language) => {
    const response = await fetch(`./${language}.json`);
    const translations = await response.json();

// Recorre cada elemento con data-section y data-value
    document.querySelectorAll('[data-section]').forEach(element => {
        const section = element.getAttribute('data-section');
        const value = element.getAttribute('data-value');

// Actualiza el contenido del elemento
        if (section && value && translations[section] && translations[section][value]) {
            element.textContent = translations[section][value];
        }
    });
};

// Evento para cambiar el idioma cuando se hace clic en una bandera
document.getElementById('flags').addEventListener('click',
 (e) => { const language = e.target.parentElement.dataset.language;
    if (language) 
    {
        changeLanguage(language);
    }
});
}