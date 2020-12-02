const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// INICIO
router.get('/', (req, res) => {
    res.render('index.html', { title: '  Hotel Cotranal Plaza' });

});

//NOSOTROS
router.get('/about', (req, res) => {
    res.render('about.html', { title: 'Cotranal | Nosotros' });

});

// SERVICIOS
router.get('/services', (req, res) => {
    res.render('services.html', { title: 'Cotranal | Servicios' });

});



// CONTACTO
router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contact' });

});


//DATOS DEL FORMULARIO  ( NODEMAILER ) 
router.post('/contact', async(req, res) => {
    const { nombre, celular, correo, asunto, mensaje } = req.body;

    contentHTML = `
       
        <center><h1 style="color:coral;">INFORMACION DEL CLIENTE</h1></center>
        <ul>

            <li><b>Nombre del cliente:</b> ${nombre}</li>
            <li><b>Correo del cliente:</b> ${correo}</li>
            <li><b>Numero Celular del cliente:</b> ${celular}</li>
        </ul>
        <br><br>
        <p> ${mensaje} </p>
    `;


    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: false,
        auth: {
            user: 'juanbernalcode@gmail.com', // quien lo envia
            pass: 'juanbernalcode2018',
        },
        tls: {
            rejectUnathorized: false
        }
    });

    const info = await transporter.sendMail({ //  mailOptions
        from: "'HOTEL COTRANAL' <juanbernalcode@gmail.com>",
        to: 'cotranalplaza@gmail.com', /// a quien le llega
        subject: ' SOLICITUD / RESERVACION', //Asunto
        html: contentHTML
    });



    console.log('Message sent', info.messageId);

    res.redirect('/contact');



});

router.post('/check', async(req, res) => {
    const { checkin, checkout, adultos, ninos, precio } = req.body;

    console.log(req.body);
    res.redirect('/');

});

//SALON DE EVENTOS 
router.get('/s-eventos', (req, res) => {
    res.render('s-eventos.html', { title: 'Salon de Eventos' });

})





module.exports = router;