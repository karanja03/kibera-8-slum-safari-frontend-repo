

import React, { useEffect, useState } from 'react';

function Carousel() {
  const [isNavActive, setNavActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 1) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <section id="roto" className={isNavActive ? 'active' : ''}>
        <div id="rotoTransition" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000" data-bs-pause="false">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="slide">
                <img
                  src="https://www.shutterstock.com/image-photo/nairobi-kenya-august-2019-kibera-600w-1914202510.jpg"
                  alt="slide-1"
                  className="mainImage"
                />
                <div className="roundOuter">
                  <img
                    src="https://www.shutterstock.com/image-photo/nairobi-kenya-august-2019-kibera-600w-1914202510.jpg"
                  />
                </div>
                <div className="roundInner">
                  <img
                    src="https://www.shutterstock.com/image-photo/nairobi-kenya-august-2019-kibera-600w-1914202510.jpg"
                    alt="slide-1"
                  />
                </div>
                <div className="slideText">
                  <h1 className="animate__animated animate__fadeInUp">KIBERA 8 SLUM SAFARI</h1>
                  <p className="animate__animated animate__fadeInUp">KENYA</p>
                  <button type="button" className="btn btn-primary btn-lg">LEARN MORE</button>
                  <div className="buttonNav animate__animated animate__fadeInDown">
                    <button type="button" data-bs-target="#rotoTransition" data-bs-slide="prev">
                      <i className="fa-solid fa-arrow-left-long"></i>
                    </button>
                    <span></span>
                    <button type="button" data-bs-target="#rotoTransition" data-bs-slide="next">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="slide">
                <img
                  src="https://www.shutterstock.com/image-photo/nairobi-kenya-august-2019-kibera-600w-1914202510.jpg"
                  alt="slide-1"
                  className="mainImage"
                />
                <div className="roundOuter">
                  <img
                    src="https://www.shutterstock.com/image-photo/nairobi-kenya-august-2019-kibera-600w-1914202510.jpg"
                    alt="slide-1"
                  />
                </div>
                <div className="roundInner">
                  <img
                    src="https://www.shutterstock.com/image-photo/nairobi-kenya-august-2019-kibera-600w-1914202510.jpg"
                    alt="slide-1"
                  />
                </div>
                <div className="slideText">
                  <h1 className="animate__animated animate__fadeInUp">Eradicating Poverty </h1>
                  <p className="animate__animated animate__fadeInUp">With Love And Care</p>
                  <button className="btn btn-primary">LEARN MORE</button>
                  <div className="buttonNav animate__animated animate__fadeInDown">
                    <button type="button" data-bs-target="#rotoTransition" data-bs-slide="prev">
                      <i className="fa-solid fa-arrow-left-long"></i>
                    </button>
                    <span></span>
                    <button type="button" data-bs-target="#rotoTransition" data-bs-slide="next">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* {incase i wanna add more items to the carousel} */}
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Why Kibera 8 Slums Safaris?</h2>
              <p className='longparagraph'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officia alias earum deserunt enim molestias
                voluptas placeat sint odit numquam mollitia, rerum qui laboriosam perspiciatis fugiat aspernatur? Commodi
                illum nostrum provident libero impedit voluptates aperiam quaerat aspernatur maxime laborum beatae labore
                numquam praesentium necessitatibus cupiditate saepe neque, aliquam adipisci! Quasi a tenetur magnam
                dignissimos similique temporibus, inventore tempora suscipit, maiores ex libero consequatur itaque rerum
                voluptate porro fugit neque in maxime vero aliquid. Dolore magnam temporibus iusto sapiente blanditiis,
                autem ea possimus nesciunt et quis aliquid a sed dolor illo neque nemo odit quae deserunt accusamus dolores
                debitis est libero.
              </p>
              <button type="button" className="btn btn-primary btn-lg learnmore">KNOW MORE</button>
            </div>
            <div className="col-md-6 d-grid">
              <img
                src="https://www.wearewater.org/images/340599/default.jpg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-grid">
              <img
                src="https://www.wearewater.org/images/340599/default.jpg"
                alt="image"
              />
            </div>
            <div className="col-md-6">
              <h2>What Do we Do?</h2>
              <p className='longparagraph'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officia alias earum deserunt enim molestias
                voluptas placeat sint odit numquam mollitia, rerum qui laboriosam perspiciatis fugiat aspernatur? Commodi
                illum nostrum provident libero impedit voluptates aperiam quaerat aspernatur maxime laborum beatae labore
                numquam praesentium necessitatibus cupiditate saepe neque, aliquam adipisci! Quasi a tenetur magnam
                dignissimos similique temporibus, inventore tempora suscipit, maiores ex libero consequatur itaque rerum
                voluptate porro fugit neque in maxime vero aliquid. Dolore magnam temporibus iusto sapiente blanditiis,
                autem ea possimus nesciunt et quis aliquid a sed dolor illo neque nemo odit quae deserunt accusamus dolores
                debitis est libero.
              </p>
              <button type="button" className="btn btn-primary btn-lg learnmore">KNOW MORE</button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Carousel;
