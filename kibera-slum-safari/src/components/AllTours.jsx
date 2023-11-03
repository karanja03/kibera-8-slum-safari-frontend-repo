import React from 'react';
import { useNavigate } from 'react-router-dom';


function AllTours() {
 const navigate=useNavigate()
  const handleviewmoreclick=()=>{
    navigate('/aboutkibera')

  }
  return (
    <div>
        <div className='mostpopularTitle'>
            <h3 className='text-black text-2xl ml-36 mb-6 mt-6 font-bold'>All Tours</h3>

        </div>
    <div className='mostpopularbody ml-36 max-w-screen-xl bg-gray-100 shadow-lg py-24 px-14'>
    <div className="containermostpopular ml-12">
        
      <div className="cardmostpopular">
        <div className="card-header">
          <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/c1/9a/06.jpg" alt="rover" />
        </div>
        <div className="card-bodymostpopular">
          <p className='text-black'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
          </p>
          <button type="button" className="btn btn-primary btn-lg learnmore mt-11"  style={{backgroundColor:"#027884"}}>Know More</button>

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
          <button type="button" className="btn btn-primary btn-lg learnmore mt-11"  style={{backgroundColor:"#027884"}}>Know More</button>


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
          <button type="button" className="btn btn-primary btn-lg learnmore mt-11"  style={{backgroundColor:"#027884"}}>Know More</button>


        </div>
      </div>

    </div>
</div>
<div>
<button type="button" className="btn btn-primary btn-lg learnmore mt-11 ml-96 viewmore"  style={{backgroundColor:"#027884", marginLeft:"415px"}} onClick={handleviewmoreclick}>View More</button>

    
</div>
</div>
  );
}

export default AllTours;
