import React from 'react';
import Founding from './Founding';

function Accomplishments() {
  return (
    <div>
    <div className="container">

      <div className="content">
        <section id="hero">
          <div className="hero-banner">
            <span className="overlay-text">KIBERA 8 SLUM  SAFARIS <br/> WHO ARE WE?</span>
          </div>
        </section>

        <Founding/>
        
        <section id="testimonies" >
          <p className="common-header">What our customers are saying about us?</p>
          <div id="testimonies_customers">
            <div className="flex-second-one">
              <blockquote>
                <i className="fa fa-quote-left"></i>
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp;A kind gesture can reach a wound,
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp;that only compassion can heal
                <br />
                <br />
                <i className="fa fa-quote-right"></i>
                <br />
                <cite>- Steve Maraboli</cite>
              </blockquote>
            </div>
            <div className="flex-second-two">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/jQeKEGrDoQ4?si=qK8IBJVZj7hDQGV-" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

            </iframe>
            </div>
          </div>

          <div id="testimonies_customers">
            <div className="flex-second-one">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/0suVUkppxNs?si=l87B05pjNmcyC4QA"
             title="YouTube video player" frameborder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

             </iframe>
            </div>
            <div className="flex-second-one">
              <blockquote>
                <i className="fa fa-quote-left"></i>
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp;The meaning of life is to find your gift.
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp;The purpose of life is to give it away.
                <br />
                <i className="fa fa-quote-right"></i>
                <br />
                <cite>- Pablo Picasso</cite>
              </blockquote>
            </div>
          </div>

          <div id="testimonies_customers">
            <div className="flex-second-one">
              <blockquote>
                <i className="fa fa-quote-left"></i>
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp;Charity is not about 'giving to',
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; - charity is about 'being with'.
                <br />
                <i className="fa fa-quote-right"></i>
                <br />
                <cite>- Mother Teresa</cite>
              </blockquote>
            </div>
            <div className="flex-second-one">
            <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/4PmCimD1MMc?si=QzHyYDt5ftC35VJK" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

            </iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
  );
}

export default Accomplishments;
