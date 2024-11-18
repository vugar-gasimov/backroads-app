import React from 'react';

import aboutImg from '../images/about.jpeg';

import Title from './Title';
const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='about' subTitle='us' />

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>explore the difference</h3>
          <p>
            Discover what sets us apart — we craft unforgettable experiences
            with a personal touch, ensuring every moment leaves a lasting
            impression.
          </p>
          <p>
            Our dedication to excellence means you can relax and focus on
            enjoying your journey while we handle the details seamlessly.
          </p>
          <a href='/read-more' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
