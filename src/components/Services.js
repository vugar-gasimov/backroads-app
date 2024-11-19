import React from 'react';
import Title from './Title';
import { services } from '../data';
import ServicesComponent from './ServicesComponent';

const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {services.map((service) => {
          return <ServicesComponent key={services.id} {...service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
