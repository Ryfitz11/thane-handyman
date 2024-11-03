import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './ContactForm.css';

const ContactForm = () => {
   const validationSchema = Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email format').required('Required'),
      service: Yup.string().required('Please specify the service needed'),
   });

const handleSubmit = async (values, actions) => {
  try {
     const response = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
     });
     const result = await response.json();
     if (response.ok) {
        alert(result.message);
        actions.resetForm();
     } else {
        alert(result.message);
     }
  } catch (error) {
     alert('There was an error sending the email. Please try again later.');
  }
};


   return (
      <Formik
         initialValues={{ name: '', email: '', service: '', details: '' }}
         validationSchema={validationSchema}
         onSubmit={handleSubmit}
      >
         {() => (
            <Form className="contact-form container p-4 border rounded">
               <div className="mb-3">
                  <label htmlFor="name">Name</label>
                  <Field name="name" type="text" className="form-control" />
                  <ErrorMessage name="name" component="div" className="text-danger" />
               </div>
               <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <Field name="email" type="email" className="form-control" />
                  <ErrorMessage name="email" component="div" className="text-danger" />
               </div>
               <div className="mb-3">
                  <label htmlFor="service">Service Needed</label>
                  <Field name="service" type="text" className="form-control" />
                  <ErrorMessage name="service" component="div" className="text-danger" />
               </div>
               <div className="mb-3">
                  <label htmlFor="details">Additional Details</label>
                  <Field name="details" as="textarea" className="form-control" />
               </div>
               <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
         )}
      </Formik>
   );
};

export default ContactForm;
