import React from "react";
import HeaderAK from "./HeaderAK";
import IntroductionAk from "./IntroductionAK";
import HistoryAK from "./HistoryAK";
import PhotoGalleryAK from "./PhotoGalleryAK";
import Population from "./Population";

import Challenges from "./Challenges";
import YouTubeVideos from "./YoutubeVideos";


function AboutKibera(){
    return(
        <div>
            <HeaderAK/>
            <IntroductionAk/>
            <div className="mt-12"> <HistoryAK/></div>
            <PhotoGalleryAK/>
            <Population/>
            <Challenges/>
            <YouTubeVideos/>
            {/* <Maps/> */}
           
            
        </div>
    )
}

export default AboutKibera

