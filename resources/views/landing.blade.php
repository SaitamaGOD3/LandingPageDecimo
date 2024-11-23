<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Healing Nano - Informative Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <script src=main.js></script>
    <script src=sw.js></script>
    <link rel="manifest" href="manifest.json">
</head>

<body>
    <!-- Contenido de tu página -->
    <script src="main.js"></script>
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg custom-navbar">
            <div id="flags" class="flags">
                <div class="flags_item" data-language="es">
                    <img src="{{ asset('img/mx.svg') }}" alt="bandera mx" class="bandera-mx">
                </div>
                <div class="flags_item" data-language="en">
                    <img src="{{ asset('img/us.svg') }}" alt="bandera us" class="bandera-us">
                </div>
            </div>
            <div class="container">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#about-us" data-section="navbar" data-value="about_us">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#proposito" data-section="navbar" data-value="value_proposition">Propuesta de Valor</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#testimonio" data-section="navbar" data-value="testimonials">Testimonios</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact-map" data-section="navbar" data-value="contact_us">Contáctanos</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Image between Navbar and Header -->
            <img src="{{ asset('img/wave2.png') }}" alt="Wave Image" class="wave-image">
        </nav>

        <!-- Header -->
        <header class="custom-header text-white text-center p-4" id="main-header">
            <div class="container d-flex flex-column align-items-center">
                <img src="{{ asset('img/logo.jpeg') }}" alt="Logo" width="50" height="50" class="d-inline-block align-text-top mb-2">
                <h1  data-section="header" data-value="title">Healing Nano</h1>
                <h2 data-section="header" data-value="subtitle">¡Conocenos con la ayuda de nanobots!</h2>
                <p class="lead"  data-section="header" data-value="lead">Un viaje educativo que te enseña la importancia de consultar a un médico y evitar la automedicación.</p>
                <p class="mt-3"  data-section="header" data-value="cta"><strong>Únete a nosotros y aprende cómo nuestros nanobots pueden ayudarte a saber como mantenerte saludable y seguro.</strong></p>
            </div>
            <script src="translate.js"></script>
        </header>

    <!-- Carousel -->
    <section class="mt-4">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="{{ asset('img/nano.jpeg') }}" class="d-block w-100" alt="Imagen de nanobots">
                </div>
                <div class="carousel-item">
                    <img src="{{ asset('img/portada.jpeg') }}" class="d-block w-100" alt="Portada de Healing Nano">
                </div>
                <div class="carousel-item">
                    <img src="{{ asset('img/virus.jpeg') }}" class="d-block w-100" alt="Imagen de virus">
                </div>
            </div>
        </div>
    </section>

    <!-- About Us -->
    <section id="about-us" class="bg-light py-5 ">
        <div class="container text-center">
            <h2  data-section="about_us" data-value="title">About Us</h2>
            <p  data-section="about_us" data-value="description">En <strong>Healing Nano</strong>, somos un equipo apasionado de desarrolladores y científicos que han unido sus fuerzas para crear una experiencia de juego única e informativa. Nuestro juego te permite controlar un nanobot en su misión dentro del cuerpo humano, luchando contra enfermedades y aprendiendo sobre la importancia de la consulta médica profesional en el proceso. Nuestra misión es educar y entretener al mismo tiempo, brindando a los jugadores una experiencia inmersiva y educativa sobre la salud y la prevención de la automedicación.</p>
        </div>
    </section>    

    <!-- Proposito -->
    <section id="proposito" class="py-5">
        <div class="container text-center">
            <h2 data-section="value_proposition" data-value="title">Propuesta de Valor</h2>
            <p data-section="value_proposition" data-value="description">En <strong>Healing Nano</strong>, ofrecemos una experiencia de juego inigualable que combina educación y entretenimiento. A través de nuestra plataforma, los jugadores no solo se divierten enfrentándose a diversos patógenos y enfermedades, sino que también aprenden sobre la biología humana y la importancia de buscar atención médica profesional en lugar de automedicarse. Nuestro enfoque innovador y educativo distingue a <strong>Healing Nano</strong> de otros juegos en el mercado, haciendo que aprender sobre salud y prevención sea divertido y emocionante.</p>
        </div>
    </section>    

   <!-- Testimonio -->
<section id="testimonio" class="bg-light py-5">
    <div class="container text-center">
        <h2 data-section="testimonials" data-value="title">Testimonios</h2>
        <div class="d-flex flex-column align-items-center">
            <img src="{{ asset('img/userm.jpg') }}" class="img-fluid rounded-circle mb-3" alt="Imagen Usuario m">
            <blockquote class="blockquote">
                <p>"<strong data-section="testimonials" data-value="testimony_1">Healing Nano</strong> no solo es entretenido, sino también increíblemente educativo. He aprendido mucho sobre el sistema inmunológico y la importancia de consultar a un médico, todo mientras juego. ¡Altamente recomendado!"</p>
                <footer class="blockquote-footer" data-section="testimonials" data-value="author_1">María González</footer>
            </blockquote>
        </div>
        <div class="d-flex flex-column align-items-center mt-4">
            <img src="{{ asset('img/userv.jpg') }}" class="img-fluid rounded-circle mb-3" alt="Imagen Usuario v">
            <blockquote class="blockquote">
                <p data-section="testimonials" data-value="testimony_2">"Este juego es una obra maestra. Mis hijos ahora entienden mejor cómo funciona su cuerpo y por qué no deben automedicarse. ¡Un gran éxito!"</p>
                <footer class="blockquote-footer" data-section="testimonials" data-value="author_2">Carlos Martínez</footer>
            </blockquote>
        </div>
    </div>
</section>

  <!-- Contact Form and Map Section -->
<section id="contact-map" class="py-5">
    <div class="container">
        <div class="row">
            <!-- Contact Form -->
            <div class="col-md-6">
                <h2 class="text-center" data-section="contact_us" data-value="title">Contáctanos</h2>
                <p class="text-center" data-section="contact_us" data-value="description">¿Tienes alguna pregunta o comentario sobre <strong>Healing Nano</strong>? Nos encantaría saber de ti. Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.</p>
                <form id="contact-form" action="{{ route('contact.submit') }}" method="POST" autocomplete="off">
                    @csrf
                    <div class="mb-3">
                        <label for="name" class="form-label" data-section="contact_us" data-value="form.name">Nombre</label>
                        <input type="text" name="name" class="form-control" id="name" required autocomplete="off">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label" data-section="contact_us" data-value="form.email">Correo Electrónico</label>
                        <input type="email" name="email" class="form-control" id="email" required autocomplete="off">
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label" data-section="contact_us" data-value="form.message">Mensaje</label>
                        <textarea name="message" class="form-control" id="message" required autocomplete="off"></textarea>
                    </div>
                    <button type="submit" class="btn custom-btn w-100" data-section="contact_us" data-value="form.submit">Enviar</button>
                </form>
            </div>
            <!-- Map -->
            <div class="col-md-6" id="map" style="margin-top: 80px;">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.1313753069785!2d-104.90095522501412!3d21.42408057408399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84273123eaaaf2b9%3A0x16adf6ada41de099!2sUniversidad%20Tecnol%C3%B3gica%20de%20Nayarit!5e0!3m2!1ses!2smx!4v1730163880666!5m2!1ses!2smx" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</section>

    <footer id="Footer" class="custom-footer text-white text-center p-3">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="social-icons">
                        <img src="{{ asset('img/facebook-icon.png') }}" alt="facebook" class="social-icon">
                        <img src="{{ asset('img/instagram-icon.png') }}" alt="instagram" class="social-icon">
                        <img src="{{ asset('img/linkedin-icon.png') }}" alt="linkedin" class="social-icon">
                        <img src="{{ asset('img/snapchat-icon.png') }}" alt="snapchat" class="social-icon">
                        <img src="{{ asset('img/twitter-icon.png') }}" alt="twitter" class="social-icon">
                        <img src="{{ asset('img/whatsapp-icon.png') }}" alt="whatsapp" class="social-icon">
                    </div>
                    <p data-section="footer"data-value="rights_reserved">&copy; 2024 Healing Nano. Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    </footer>
    
    <script>
// Manejo del envío del formulario con traducción para SweetAlert
$(document).ready(function() {
    $('#contact-form').on('submit', function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado
        $.ajax({
            url: "{{ route('contact.submit') }}",
            method: "POST",
            data: $(this).serialize(),
            success: function(response) {
                // Usar las traducciones de las alertas
                const successMessage = window.alertTranslations?.form?.successMessage || 'Formulario enviado';
                const successText = window.alertTranslations?.form?.successText || 'Tu mensaje ha sido enviado correctamente.';
                const confirmButtonText = window.alertTranslations?.buttons?.confirm || 'Aceptar';

                Swal.fire({
                    icon: 'success',
                    title: successMessage,
                    text: successText,
                    confirmButtonText: confirmButtonText
                });
                $('#contact-form')[0].reset(); // Resetea el formulario
            },
            error: function(xhr) {
                // Usar las traducciones de las alertas
                const errorMessage = window.alertTranslations?.form?.errorMessage || 'Error';
                const errorText = window.alertTranslations?.form?.errorText || 'Ocurrió un error al enviar tu mensaje. Por favor, intenta de nuevo.';
                const confirmButtonText = window.alertTranslations?.buttons?.confirm || 'Aceptar';

                Swal.fire({
                    icon: 'error',
                    title: errorMessage,
                    text: errorText,
                    confirmButtonText: confirmButtonText
                });
            }
        });
    });
});
    </script>
    
</body>
</html>
