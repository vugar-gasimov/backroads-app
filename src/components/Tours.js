import React from 'react';
import Title from './Title';
import ToursComponent from './ToursComponent';
import { tours } from '../data';
const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title='featured' subTitle='tours' />

      <div className='section-center featured-center'>
        {tours.map((tour) => {
          return <ToursComponent key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
