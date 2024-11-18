import React from 'react';

const Hero = () => {
  return (
    <section className='hero' id='home'>
      <div className='hero-banner'>
        <h1>continue exploring</h1>
        <p>
          Adventure awaits you—experience new cultures, breathtaking views, and
          thrilling journeys.
        </p>
        <a href='#tours' className='btn hero-btn'>
          explore tours
        </a>
      </div>
    </section>
  );
};

export default Hero;
