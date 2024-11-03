const nodemailer = require('nodemailer');

exports.handler = async (event) => {

   const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
   };
   
   console.log("Recieved event:", event);

   try {
      // Parse the form data from the request
      const { name, email, service, details } = JSON.parse(event.body);
      console.log("parsed form data:", {name, email, service, details })
   
      // Configure Nodemailer with your email provider
      const transporter = nodemailer.createTransport({
         host: 'smtp.zoho.com',
         port: 465,
         secure: true,
         auth: {
            user: process.env.EMAIL_USER, // Your email address
            pass: process.env.EMAIL_PASS  // Your email password or app password
         }
      });
   
      const mailOptions = {
         from: process.env.EMAIL_USER,
         to: process.env.RECIPIENT_EMAIL, // Your email to receive contact form submissions
         subject: 'New Service Request',
         text: `
            Name: ${name}
            Email: ${email}
            Service Needed: ${service}
            Additional Details: ${details}
         `
      };

      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");

      return {
         statusCode: 200,
         headers,
         body: JSON.stringify({ message: 'Email sent successfully!' })
      };
   } catch (error) {
      return {
         statusCode: 500,
         headers,
         body: JSON.stringify({ message: 'Failed to send email', error })
      };
   }
};
