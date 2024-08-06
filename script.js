$(document).ready(function () {
    $('#loginForm').submit(function (event) {
        event.preventDefault();
        
        const username = $('#username').val();
        const password = $('#password').val();
        
        if (username === 'Juancito' && password === '123456') {
            alert('¡Felicidades, has iniciado sesión!');
            window.location.href = 'principal.html';
        } else {
            $('#error-message').show().text('Usuario o contraseña incorrectos. Intente nuevamente.');
        }
    });
});
