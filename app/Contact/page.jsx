import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import '../styles/Contact.css';
import locationIcon from '../assets/images/location.png';
import phoneIcon from '../assets/images/phone.png';
import emailIcon from '../assets/images/email.png';

function Contact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleShow();
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="text-center mb-4">Contact Me</h2>
        <Row className="contact-info text-center">
          <Col md={4}>
            <div className="contact-item">
            <img src={locationIcon} alt="Location" className="contact-icon" />              <h4>My Location:</h4>
              <p>71 rue brady Gatineau, QC</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="contact-item">
            <img src={phoneIcon} alt="Phone" className="contact-icon" />              <h4>Phone Number:</h4>
              <p>(+1) 514 233 4859 </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="contact-item">
            <img src={emailIcon} alt="Email" className="contact-icon" />              <h4>Email Address:</h4>
              <p>kawtherkhlif20@gmail.com<br /> 2711419@collegelacite.com</p>
            </div>
          </Col>
        </Row>
        <Row className="contact-form-map">
          <Col md={7}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Control type="text" placeholder="Name" required />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Control type="email" placeholder="Email" required />
              </Form.Group>

              <Form.Group controlId="formSubject">
                <Form.Control type="text" placeholder="Subject" required />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Control as="textarea" rows={3} placeholder="Message" required />
              </Form.Group>

              <Button variant="danger" type="submit" className="w-100 mt-3">
                Send Message
              </Button>
            </Form>
          </Col>
          <Col md={5}>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.7759821876934!2d-75.719694384443!3d45.46980597910185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0505e940bb45%3A0x9d6bb6be9f3f9157!2s71%20Rue%20Brady%2C%20Gatineau%2C%20QC%20J8Y%202C1%2C%20Canada!5e0!3m2!1sen!2sus!4v1624484567358!5m2!1sen!2sus"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message Received</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you for contacting us. Your message has been successfully received.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default Contact;
