import React from 'react';
import image4 from "../images/children1.jpg";

function JoinOrHost() {
    return (
        <>
            <div className="card" style={{width: "18rem"}}>
                <img src={image4} className="card-img-top" alt="img4"/>
                <div className="card-body">
                    <h5 className="card-title">Join</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Join Now</a>
                </div>
            </div>

            {/* <div className="card" style={{width: "18rem"}}>
                <img src={image4} className="card-img-top" alt="img4"/>
                <div className="card-body">
                    <h5 className="card-title">Join</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Join Now</a>
                </div>
            </div> */}
        </>
    )
}

export default JoinOrHost
