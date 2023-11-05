import React from "react";
import Accomplishments from "./Accomplishment";
import Carousel from "./Carousel";
import WhatDoWeDo from "./WhatDoWeDO";
import AboutKibera from "./AboutKibera";
import Sidebar from "./ThisSideBar";
import IntroductionPart from "./IntroductionPart";
import GalleryPart from "./GalleryPart";
import OurChallengesPart from "./OurChallengesPart";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function RouterComponents(){
    return(
        <Router>
            <Routes>

                <Route path="/introduction" element={<IntroductionPart/>}/>
                <Route path="/facts" element={<OurChallengesPart/>}/>
                <Route path="/photogallery" element={<GalleryPart/>}/>
                <Route path="/aboutkibera" element={<AboutKibera/>}/>
                <Route path="/admin" element={<Sidebar/>}/>
                <Route path="/whatwedo" element={<WhatDoWeDo/>}/>
                <Route path="/aboutus" element={<Accomplishments/>}/>
                <Route path="/" element={<Carousel/>}/>
            </Routes>
        </Router>

    )
}

export default RouterComponents

