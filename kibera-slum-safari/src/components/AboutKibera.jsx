import React from "react";
import HeaderAK from "./HeaderAK";
import IntroductionAk from "./IntroductionAK";
import HistoryAK from "./HistoryAK";
import PhotoGalleryAK from "./PhotoGalleryAK";
import Population from "./Population";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Challenges from "./Challenges";


function AboutKibera(){
    return(
        <div>
            <HeaderAK/>
            <IntroductionAk/>
            <div className="mt-12"> <HistoryAK/></div>
            <PhotoGalleryAK/>
            <Population/>
            <Challenges/>
            {/* <Maps/> */}
           
            
        </div>
    )
}

export default AboutKibera

