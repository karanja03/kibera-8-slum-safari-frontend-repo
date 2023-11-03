import React from "react";
import Accomplishments from "./Accomplishment";
import Carousel from "./Carousel";
import WhatDoWeDo from "./WhatDoWeDO";
import MostPopular from "./MostPopular";
import AboutKibera from "./AboutKibera";
import Sidebar from "./ThisSideBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function RouterComponents(){
    return(
        <Router>
            <Routes>
                <Route path="/aboutkibera" element={<AboutKibera/>}/>
                <Route path="/mostpopular" element={<Sidebar/>}/>
                <Route path="/whatwedo" element={<WhatDoWeDo/>}/>
                <Route path="/aboutus" element={<Accomplishments/>}/>
                <Route path="/" element={<Carousel/>}/>
            </Routes>
        </Router>

    )
}

export default RouterComponents

