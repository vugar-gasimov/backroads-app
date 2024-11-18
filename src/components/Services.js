import React from 'react';

const Services = () => {
  return (
    <section className='section services' id='services'>
      <div className='section-title'>
        <h2>
          our <span>services</span>
        </h2>
      </div>
      <div className='section-center services-center'>
        <article className='service'>
          <span className='service-icon'>
            <i className='fas fa-wallet fa-fw'></i>
          </span>
          <div className='service-info'>
            <h4 className='service-title'>saving money</h4>
            <p className='service-text'>
              Save more while traveling with our exclusive deals and
              budget-friendly options.
            </p>
          </div>
        </article>

        <article className='service'>
          <span className='service-icon'>
            <i className='fas fa-tree fa-fw'></i>
          </span>
          <div className='service-info'>
            <h4 className='service-title'>endless hiking</h4>
            <p className='service-text'>
              Experience breathtaking trails and explore nature like never
              before on endless hikes.
            </p>
          </div>
        </article>

        <article className='service'>
          <span className='service-icon'>
            <i className='fas fa-socks fa-fw'></i>
          </span>
          <div className='service-info'>
            <h4 className='service-title'>amazing comfort</h4>
            <p className='service-text'>
              Relax in unparalleled comfort with our carefully curated travel
              accommodations.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
