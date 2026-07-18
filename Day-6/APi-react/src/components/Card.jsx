// 

import React from "react";

const Card = ({ box }) => {
    return (
        <>
            <div className="container">
                <div className="row">

                    {box.map((item) => (
                        <div className="col-md-4 mb-4" key={item.id}>

                            <div className="card" style={{ width: "18rem"}}>

                                <img
                                    src={item.image}
                                    className="card-img-top"
                                    alt={item.title}
                                    style={{ height: "200px", objectFit: "contain" }}
                                />


                                <div className="card-body">

                                    <h5 className="card-title">
                                        {item.title}
                                    </h5>


                                    <p className="card-text">
                                        {item.description}
                                    </p>


                                    <h6>
                                        Price: ${item.price}
                                    </h6>


                                    <a href="#" className="btn btn-primary">
                                        Buy Now
                                    </a>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </>
    );
};

export default Card;