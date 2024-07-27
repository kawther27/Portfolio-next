"use client";

import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './Carrousel-image';
import Image from 'next/image';
import Layout from '../components/Layout';
import user1 from '../../public/images/user1.jpeg';
import user2 from '../../public/images/user2.jpeg';
import user3 from '../../public/images/user3.jpeg';
import '../../styles/Testimonials.css'; // On utilise le style Projects ici

const TestimonialsClient = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

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
    <Layout>
      <section id="testimonials" className="projects-section"> {/* Changement de classe */}
        <div className="carousel-container">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {testimonials.map((testimonial) => (
              <Carousel.Item key={testimonial.id}>
                <div className="carousel-content">
                <Image src={testimonial.img} alt={testimonial.name} width={500} height={430} />               
                   <Carousel.Caption>
                   <div className="description">
                    <h4 className='client-name'
                    >{testimonial.name } </h4>
                      <p>{testimonial.quote}</p>
                    </div>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>
    </Layout>
  );
};

export default TestimonialsClient;

