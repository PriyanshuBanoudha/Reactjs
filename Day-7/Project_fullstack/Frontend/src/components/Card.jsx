// // 
// import { useState } from "react";
// import React from "react";

// const Card = ({ data }) => {
//     return (
//         <>
//             <div className="container">
//                 <div className="row">

//                     {data.map((item) => (
//                         <div className="col-md-4 mb-4" key={item.id}>
//                             <h1>{item.id}</h1>

//                             <div className="card" style={{ width: "18rem" }}>

//                                 {/* <img
//                                     src={item.image}
//                                     className="card-img-top"
//                                     alt={item.title}
//                                     style={{ height: "200px", objectFit: "contain" }}
//                                 /> */}


//                                 <div className="card-body">

//                                     <h5 className="card-title">
//                                         {item.task}
//                                     </h5>


//                                     {/* <p className="card-text">
//                                         {item.description}
//                                     </p> */}


//                                     {/* <h6>
//                                         Price: ${item.price}
//                                     </h6> */}


//                                     {/* <a href="#" className="btn btn-primary">
//                                         Buy Now
//                                     </a> */}

//                                 </div>

//                             </div>

//                         </div>
//                     ))}

//                 </div>
//             </div>
//         </>
//     );
// };




const Card = ({ data }) => {
    console.log(data);
    
  return (
    <div className="container">
      <div className="row">
        {data.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <h1>{item.id}</h1>

            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5>{item.task}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
    export default Card;