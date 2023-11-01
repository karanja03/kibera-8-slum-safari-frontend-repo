import React from 'react';

function CardComponent() {
  return (
    <div>
        <div className='mppageheading'>
            <h1 className='mt-6 py-5 bg-red-300 text-5xl text-black text-center'>Kibera-8 Slum Safaris</h1>

        </div>
        <div className='mostpopularTitle'>
            <h3 className='text-black text-3xl ml-36'>Most Popular</h3>

        </div>
    <div className='mostpopularbody ml-96'>
    <div className="containermostpopular">
        
      <div className="cardmostpopular">
        <div className="card-header">
          <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/c1/9a/06.jpg" alt="rover" />
        </div>
        <div className="card-bodymostpopular">
          <p className='text-black'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
          </p>
          <button type="button" className="btn btn-primary btn-lg learnmore mt-11"  style={{backgroundColor:"#027884"}}>KNOW MORE</button>

        </div>
      </div>
      <div className="cardmostpopular">
        <div className="card-header">
          <img src="https://genetsafaris.com/wp-content/uploads/2016/09/kibera-slum.jpg" alt="balloons" />
        </div>
        <div className="card-bodymostpopular">
          <p className='text-black'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
          <button type="button" className="btn btn-primary btn-lg learnmore mt-11"  style={{backgroundColor:"#027884"}}>KNOW MORE</button>


        </div>
      </div>
      <div className="cardmostpopular">
        <div className="card-header">
          <img src="https://genetsafaris.com/wp-content/uploads/2016/09/kibera-slum.jpg" alt="balloons" />
        </div>
        <div className="card-bodymostpopular">
          <p className='text-black'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
          <button type="button" className="btn btn-primary btn-lg learnmore mt-11"  style={{backgroundColor:"#027884"}}>KNOW MORE</button>


        </div>
      </div>

    </div>
</div>
</div>
  );
}

export default CardComponent;
