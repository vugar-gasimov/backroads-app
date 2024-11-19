import React from 'react';
import aboutImg from '../images/about.jpeg';
import Title from './Title';
import ReadMore from './ReadMore';
import { additionalText, text } from '../data';
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
          <ReadMore text={text} additionalText={additionalText} />
        </article>
      </div>
    </section>
  );
};

export default About;
