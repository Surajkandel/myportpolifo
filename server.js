const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

// Body parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

// Serve static HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle POST request from contact form
app.post('/submit_form', (req, res) => {
    const { name, email, message } = req.body;

    // Set up Nodemailer to send email
    const transporter = nodemailer.createTransport({
        service: 'gmail', // You can use other email services or an SMTP server
        auth: {
            user: 'Surajkdl111@gmail.com', // Replace with your Gmail
            pass: 'rzxn ewau csdn fjix',  // Replace with your Gmail app-specific password
        },
    });

    const mailOptions = {
        from: email,
        to: 'Surajkdl111@gmail.com', // Replace with your own email address where you want to receive the messages
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //         console.log(error);
    //         res.send('Error occurred while sending email.');
    //     } else {
    //         console.log('Email sent: ' + info.response);
    //         res.send('Message sent successfully!');
    //     }
    // });

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error:', error);  // Log the detailed error message
            res.send('Error occurred while sending email.');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Message sent successfully!');
        }
    });
});

// Start the server and log the URL to the terminal
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
