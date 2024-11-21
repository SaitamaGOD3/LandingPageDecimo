// Función para cambiar el idioma
const changeLanguage = async (language) => {
    try {
        const response = await fetch(`./${language}.json`);
        if (!response.ok) {
            throw new Error(`Error al cargar el archivo de traducción: ${language}.json`);
        }
        const translations = await response.json();

        // Actualiza el contenido general de la página
        document.querySelectorAll('[data-section]').forEach(element => {
            const section = element.getAttribute('data-section');
            const value = element.getAttribute('data-value');

            if (section && value && translations[section] && translations[section][value]) {
                element.innerHTML = translations[section][value];
            }
        });

        // Actualiza específicamente el formulario
        translateForm(translations);
    } catch (error) {
        console.error("Error al cambiar el idioma:", error);
    }
};

// Función para traducir el formulario específicamente
const translateForm = (translations) => {
    try {
        const nameLabel = document.querySelector('[data-section="contact_us"][data-value="form.name"]');
        const emailLabel = document.querySelector('[data-section="contact_us"][data-value="form.email"]');
        const messageLabel = document.querySelector('[data-section="contact_us"][data-value="form.message"]');
        const submitButton = document.querySelector('[data-section="contact_us"][data-value="form.submit"]');

        if (nameLabel) nameLabel.textContent = translations.contact_us.form.name;
        if (emailLabel) emailLabel.textContent = translations.contact_us.form.email;
        if (messageLabel) messageLabel.textContent = translations.contact_us.form.message;
        if (submitButton) submitButton.textContent = translations.contact_us.form.submit;
    } catch (error) {
        console.error("Error al traducir el formulario:", error);
    }
};

// Evento para cambiar el idioma al hacer clic en una bandera
document.getElementById('flags').addEventListener('click', (e) => {
    const language = e.target.parentElement.dataset.language;
    if (language) {
        changeLanguage(language);
    }
});

// Verificar elementos con atributos de traducción (debugging opcional)
document.querySelectorAll('[data-section]').forEach(element => {
    console.log('Elemento encontrado:', element);
});
