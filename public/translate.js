const changeLanguage = async (language) => {
    try {
        const response = await fetch(`./${language}.json`);
        if (!response.ok) {
            throw new Error(`Error al cargar el archivo de traducción: ${language}.json`);
        }
        const translations = await response.json();

        document.querySelectorAll('[data-section]').forEach(element => {
            const section = element.getAttribute('data-section');
            const value = element.getAttribute('data-value');

            if (section && value && translations[section] && translations[section][value]) {
                element.innerHTML = translations[section][value];
            }            
        });
    } catch (error) {
        console.error("Error al cambiar el idioma:", error);
    }
};

document.getElementById('flags').addEventListener('click', (e) => {
    const language = e.target.parentElement.dataset.language;
    if (language) {
        changeLanguage(language);
    }
});
document.querySelectorAll('[data-section]').forEach(element => {
    console.log('Elemento encontrado:', element);
});
