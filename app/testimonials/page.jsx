import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Testimonials.css';
import user1 from '../assets/images/user1.jpeg'
import user2 from '../assets/images/user2.jpeg'
import user3 from '../assets/images/user3.jpeg'

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      title: "CEO at Company",
      quote: "This is a fantastic service that has improved our workflow dramatically!",
      img: user1 
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "CTO at Another Company",
      quote: "I highly recommend this to everyone. It's absolutely amazing!",
      img: user2
    },
    {
      id: 3,
      name: "Anna Wilson",
      title: "Developer at Tech Corp",
      quote: "A game-changer for our team. We've seen significant improvements.",
      img: user3
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <Container>
        <h2 className="text-center mb-4">Testimonials</h2>
        <Row>
          {testimonials.map((testimonial) => (
            <Col md={4} key={testimonial.id} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={testimonial.img} alt={testimonial.name} />
                <Card.Body>
                  <Card.Title>{testimonial.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{testimonial.title}</Card.Subtitle>
                  <Card.Text>"{testimonial.quote}"</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;
