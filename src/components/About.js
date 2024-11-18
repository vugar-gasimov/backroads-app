import React from 'react';

const About = () => {
  return (
    <section className='section' id='about'>
      <div className='section-title'>
        <h2>
          about <span>us</span>
        </h2>
      </div>

      <div className='section-center about-center'>
        <div className='about-img'>
          <img
            src='./images/about.jpeg'
            className='about-photo'
            alt='awesome beach'
          />
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
          <a href='#' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
