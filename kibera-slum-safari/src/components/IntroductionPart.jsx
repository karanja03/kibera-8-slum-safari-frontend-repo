import React from "react";
import IntroductionAK from "./IntroductionAK";
import HistoryAK from "./HistoryAK";
import HeaderAK from "./HeaderAK";

function Introduction(){
    return(
        <div>
            <HeaderAK/>
            <IntroductionAK/>
            <div className="mt-12"> <HistoryAK/></div>
            
        </div>
    )
}
export default Introduction;