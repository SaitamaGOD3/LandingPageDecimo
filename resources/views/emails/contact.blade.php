<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuevo Mensaje de Contacto</title>
</head>
<body>
    <h2>Nuevo mensaje de contacto</h2>

    <p><strong>Correo electrónico:</strong> {{ $data['email'] }}</p>
    <p><strong>Mensaje:</strong> {{ $data['message'] }}</p>

    <br>
    <p>Este mensaje fue enviado desde el formulario de contacto de la landing page.</p>
</body>
</html>
