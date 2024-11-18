import React from 'react';

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <div className='section-title'>
        <h2>
          featured <span>tours</span>
        </h2>
      </div>

      <div className='section-center featured-center'>
        <article className='tour-card'>
          <div className='tour-img-container'>
            <img src='./images/tour-1.jpeg' className='tour-img' alt='' />
            <p className='tour-date'>august 26th, 2020</p>
          </div>
          <div className='tour-info'>
            <div className='tour-title'>
              <h4>Tibet Adventure</h4>
            </div>
            <p>
              Embark on a thrilling journey through the serene landscapes of
              Tibet, where breathtaking views and cultural treasures await.
            </p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fas fa-map'></i>
                </span>{' '}
                china
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>

        <article className='tour-card'>
          <div className='tour-img-container'>
            <img src='./images/tour-2.jpeg' className='tour-img' alt='' />
            <p className='tour-date'>october 1th, 2020</p>
          </div>
          <div className='tour-info'>
            <h4>best of java</h4>
            <p>
              Discover Indonesia’s hidden gems as you traverse lush forests,
              ancient temples, and vibrant markets in Java.
            </p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fas fa-map'></i>
                </span>{' '}
                indonesia
              </p>
              <p>11 days</p>
              <p>from $1400</p>
            </div>
          </div>
        </article>

        <article className='tour-card'>
          <div className='tour-img-container'>
            <img src='./images/tour-3.jpeg' className='tour-img' alt='' />
            <p className='tour-date'>september 15th, 2020</p>
          </div>
          <div className='tour-info'>
            <h4>explore hong kong</h4>
            <p>
              Dive into the dynamic city life of Hong Kong, from bustling
              streets to stunning skylines and tranquil harbors.
            </p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fas fa-map'></i>
                </span>{' '}
                hong kong
              </p>
              <p>8 days</p>
              <p>from $5000</p>
            </div>
          </div>
        </article>

        <article className='tour-card'>
          <div className='tour-img-container'>
            <img src='./images/tour-4.jpeg' className='tour-img' alt='' />
            <p className='tour-date'>december 5th, 2019</p>
          </div>
          <div className='tour-info'>
            <h4>kenya highlights</h4>
            <p>
              Experience the thrill of a safari adventure in Kenya, with
              up-close encounters with wildlife and stunning landscapes.
            </p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fas fa-map'></i>
                </span>{' '}
                kenya
              </p>
              <p>20 days</p>
              <p>from $3300</p>
            </div>
          </div>
        </article>
        <article className='tour-card'>
          <div className='tour-img-container'>
            <img
              src='./images/tour-5.jpeg'
              className='tour-img'
              alt='Alaskan Expedition'
            />
            <p className='tour-date'>June 10th, 2021</p>
          </div>
          <div className='tour-info'>
            <h4>Alaskan Expedition</h4>
            <p>
              Journey through Alaska’s untamed wilderness, where glaciers and
              wildlife create unforgettable memories.
            </p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fas fa-map'></i>
                </span>{' '}
                USA
              </p>
              <p>12 days</p>
              <p>from $2800</p>
            </div>
          </div>
        </article>

        <article className='tour-card'>
          <div className='tour-img-container'>
            <img
              src='./images/tour-6.jpeg'
              className='tour-img'
              alt='Santorini Escape'
            />
            <p className='tour-date'>July 18th, 2021</p>
          </div>
          <div className='tour-info'>
            <h4>Santorini Escape</h4>
            <p>
              Relax on Santorini’s iconic white beaches, soak in picturesque
              sunsets, and enjoy the charm of Greek island life.
            </p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fas fa-map'></i>
                </span>{' '}
                Greece
              </p>
              <p>7 days</p>
              <p>from $3200</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Tours;
