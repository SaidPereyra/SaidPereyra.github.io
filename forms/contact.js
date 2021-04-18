function sendEmail(name, email, subject, mensaje) {
    Email.send({
        Host: 'smtp.gmail.com',
        Username: 'esteticamaribella21@gmail.com',
        Password: 'EsteticaMaribella217!',
        To: 'esteticamaribella21@gmail.com',
        From: email,
        Subject: name + ' - ' + subject,
        Body: mensaje,
    }).then((message) => console.log('Se envió su correo, gracias!'));
}
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
});