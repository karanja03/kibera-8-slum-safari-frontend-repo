// import React from "react";


// function OurCoreValues(){
//     return(

//         <div className="card text-bg-dark  mx-20">
//   <img src="https://www.shutterstock.com/image-photo/nairobi-kenya-august-2019-kibera-600w-1914202510.jpg" className="card-img  max-w-8xl corevaluesimage " alt="..."/>
//   <div className="card-img-overlay">
//     <div className="ourcorevaluestext">
//     <h1 className="card-title">OUR CORE VALUES</h1>
//     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//     <p className="card-text"><small>Last updated 3 mins ago</small></p>
//     </div>
//     <div className="ourcorevaluestext1">
//     <h1 className="card-title">OUR CORE VALUES</h1>
//     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//     <p className="card-text"><small>Last updated 3 mins ago</small></p>
//     </div>
//     <div className="ourcorevaluestext2">
//     <h1 className="card-title">OUR CORE VALUES</h1>
//     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//     <p className="card-text"><small>Last updated 3 mins ago</small></p>
//     </div>


//   </div>
// </div>

//     )
// }

// export default  OurCoreValues

import React from "react";

const coreValues = [
  {
    title: "Inclusive",
    description: "",
  },
  {
    title: "Collaborative",
    description: "",
  },
  {
    title: "Responsive",
    description: "",
  },
];

function OurCoreValues() {
  return (
    <div className="relative w-full h-96 bg-cover bg-center">
      <img
        src="https://www.shutterstock.com/image-photo/nairobi-kenya-august-2019-kibera-600w-1914202510.jpg"
        alt="Core Values Background"
        className="absolute inset-0 w-full h-full object-cover filter blur-md"
      />

      <div className="absolute inset-0 flex items-center justify-center  bg-opacity-70 text-white">
      <h2 className="text-3xl font-bold mb-44">WE ARE:</h2>
        <div className="flex flex-wrap justify-center items-center  space-x-20">
          {coreValues.map((coreValue, index) => (
            <div
              key={index}
              className="core-values-container p-6 w-64 rounded-lg  border border-#027884 text-center shadow-xl"
            >
              <h1 className="core-values-title text-2xl font-bold mb-4">{coreValue.title}</h1>
              <p className="core-values-description text-white">{coreValue.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurCoreValues;
