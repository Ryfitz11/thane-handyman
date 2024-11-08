
import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import ContactForm from './components/ContactForm';

function App() {
   const [showModal, setShowModal] = useState(false);

   const handleShow = () => setShowModal(true);
   const handleClose = () => setShowModal(false);

   return (
      <div>
         {/* Hero Section */}
         <header className="hero-section text-white d-flex flex-column justify-content-end"
                 style={{
                    backgroundImage: "url('https://your-image-url.com/hero.jpg')",
                    backgroundSize: 'cover',
                    height: '100vh',
                    position: 'relative',
                 }}>
            <Container className="text-center mb-4">
               <h1 className="display-4 font-weight-bold">Handyman Services</h1>
               <p className="lead">Reliable and professional home repair services.</p>

               {/* Our Services Section */}
               <Container className="services-section mb-4">
                  <h2 className="text-white">Our Services</h2>
                  <Row>
                     <Col md={4} className="mb-3">
                        <div className="card h-100 text-center shadow">
                           <div className="card-body">
                              <h5 className="card-title">Plumbing</h5>
                              <p className="card-text">High-quality plumbing repairs and maintenance.</p>
                           </div>
                        </div>
                     </Col>
                     <Col md={4} className="mb-3">
                        <div className="card h-100 text-center shadow">
                           <div className="card-body">
                              <h5 className="card-title">Electrical</h5>
                              <p className="card-text">Experienced electricians for all types of repairs.</p>
                           </div>
                        </div>
                     </Col>
                     <Col md={4} className="mb-3">
                        <div className="card h-100 text-center shadow">
                           <div className="card-body">
                              <h5 className="card-title">Carpentry</h5>
                              <p className="card-text">Custom carpentry solutions for your home.</p>
                           </div>
                        </div>
                     </Col>
                  </Row>
               </Container>

               {/* Button at the Bottom */}
               <Button variant="primary" size="lg" onClick={handleShow}>
                  Request Service
               </Button>
            </Container>
         </header>

         {/* Contact Form Modal */}
         <Modal show={showModal} onHide={handleClose} centered>
            <Modal.Header closeButton>
               <Modal.Title>Request a Service</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <ContactForm />
            </Modal.Body>
         </Modal>
      </div>
   );
}

export default App;
