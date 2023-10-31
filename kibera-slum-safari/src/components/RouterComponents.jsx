import React from "react";
import Accomplishments from "./Accomplishment";
import Carousel from "./Carousel";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function RouterComponents(){
    return(
        <Router>
            <Routes>
                <Route path="/aboutus" element={<Accomplishments/>}/>
                <Route path="/" element={<Carousel/>}/>
            </Routes>
        </Router>

    )
}

export default RouterComponents

