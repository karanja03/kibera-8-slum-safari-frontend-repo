import React from 'react';
import Founding from './Founding';
import FounderMessage from './FounderMessage';

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
        <FounderMessage/>
        
<div id="testimonies" className="bg-gray-100">
        <div id="testimonies_customers" className="flex justify-center items-center space-x-3 space-y-1 p-8">
          <div className="w-1/2  p-4 rounded-lg shadow-lg">
          <blockquote className="bg-gradient-027884 text-black text-lg font-bold rounded-lg p-4">
              <i className="fas fa-quote-left"></i>
              <br />
              A kind gesture can reach a wound,
              <br />
              that only compassion can heal
              <br />
              <i className="fas fa-quote-right"></i>
              <br />
              <cite>- Steve Maraboli</cite>
            </blockquote>
          </div>
          <div className="w-1/2  p-4 rounded-lg shadow-lg">
            <iframe
              width="560"
              height="280"
              src="https://www.youtube.com/embed/jQeKEGrDoQ4?si=qK8IBJVZj7hDQGV-"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div id="testimonies_customers" className="flex justify-center items-center space-x-3 space-y-1 p-8">
          <div className="w-1/2  p-4 rounded-lg shadow-lg">
            <iframe
              width="560"
              height="280"
              src="https://www.youtube.com/embed/0suVUkppxNs?si=l87B05pjNmcyC4QA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-1/2  p-4 rounded-lg shadow-lg">
          <blockquote className="bg-gradient-027884 text-black text-lg font-bold rounded-lg p-4">
              <i className="fas fa-quote-left"></i>
              <br />
              The meaning of life is to find your gift.
              <br />
              The purpose of life is to give it away.
              <br />
              <i className="fas fa-quote-right"></i>
              <br />
              <cite>- Pablo Picasso</cite>
            </blockquote>
          </div>
        </div>

        <div id="testimonies_customers" className="flex justify-center items-center space-x-3 space-y-1 p-8">
          <div className="w-1/2  p-4 rounded-lg shadow-lg">
          <blockquote className="bg-gradient-027884 text-black text-lg font-bold rounded-lg p-4">
              <i className="fas fa-quote-left"></i>
              <br />
              Charity is not about 'giving to',
              <br />
              - charity is about 'being with'.
              <br />
              <i className="fas fa-quote-right"></i>
              <br />
              <cite>- Mother Teresa</cite>
            </blockquote>
          </div>
          <div className="w-1/2  p-4 rounded-lg shadow-lg">
            <iframe
              width="560"
              height="280"
              src="https://www.youtube.com/embed/4PmCimD1MMc?si=QzHyYDt5ftC35VJK"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>      </div>
    </div>
    </div>
  );
}

export default Accomplishments;
