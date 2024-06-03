import React from 'react';
import fsdimage1 from '../assets/images/fsdimage1.jpg';
import fsdimage2 from '../assets/images/fsdimage2.jpg';
import fsdimage3 from '../assets/images/fsdimage3.jpg';
function Fsd() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card" style={{ width: '25rem', height: '18rem' }}>
                        <img className="card-img-top" src={fsdimage1} alt="Card image cap" style={{ width: '25rem', height: '15rem' }} />
                        <div className="card-body">
                            <h4 className="card-title">Full Stack Developer RoadMap</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" style={{ width: '25rem', height: '18rem' }}>
                        <img className="card-img-top" src={fsdimage2} alt="Card image cap" style={{ width: '25rem', height: '14rem' }} />
                        <div className="card-body">
                            <h4 className="card-title" >Best Full Stack Development Project</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" style={{ width: '25rem', height: '18rem' }}>
                        <img className="card-img-top" src={fsdimage3}alt="Card image cap" style={{ width: '25rem', height: '15rem' }} />
                        <div className="card-body">
                            <h4 className="card-title">How to learn React JS</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fsd;
