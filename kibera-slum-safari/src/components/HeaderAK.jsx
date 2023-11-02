import React from "react";
import { useNavigate } from "react-router-dom";


function HeaderAK(){
  const navigate= useNavigate()
  const handleaboutclick=()=>{
    navigate('/introduction')
  }
    return(
        <div>
            <div className=" p-8">
      <header className="text-center bg-custom  py-8">
        <h1 className="text-4xl font-bold mb-4">Exploring Kibera: A Glimpse into Nairobi's Largest Slum</h1>
      </header>

      <nav className="text-center my-8 bg-custom py-6 ">
        <ul className="space-x-10">
          <li className="inline-block font-semibold" onClick={handleaboutclick}>
            About Kibera
          </li>
          <li className="inline-block font-semibold">
            <a href="#community">Community</a>
          </li>
          <li className="inline-block font-semibold">
            <a href="#challenges">Challenges</a>
          </li>
          <li className="inline-block font-semibold">
            <a href="#hope">Hope</a>
          </li>
        </ul>
      </nav>

      {/* Content sections go here */}
    </div>
        </div>
    )

}
export default  HeaderAK