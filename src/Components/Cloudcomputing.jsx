// ./Components/All.jsx
import React from 'react';
import cloudimage1 from '../assets/images/cloudimage1.jpg';
import cloudimage2 from '../assets/images/cloudimage2.jpg';
import cloudimage3 from '../assets/images/cloudimage3.jpg';

function Cloudcomputing() {
    return <>
        <div className="container">
            <div className="row">
            <div className="col-md-4">
                <div className="card" style={{ width: '25rem', height: '18rem' }}>
                    <img className="card-img-top" src={cloudimage1} style={{ width: '25rem', height: '14rem' }} />
                    <div className="card-body">
                        <h4 className="card-title">Effective Cloud Computing</h4>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card" style={{ width: '25rem', height: '18rem' }}>
                    <img className="card-img-top" src={cloudimage2} alt="Card image cap" style={{ width: '25rem', height: '15rem' }} />
                    <div className="card-body">
                        <h4 className="card-title">Top 10 Cloud Computing Jobs</h4>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card" style={{ width: '25rem', height: '18rem' }}>
                    <img className="card-img-top" src={cloudimage3} alt="Card image cap" style={{ width: '25rem', height: '14rem' }} />
                    <div className="card-body">
                        <h4 className="card-title">Best Youtube channels to learn</h4>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
}

export default Cloudcomputing;
