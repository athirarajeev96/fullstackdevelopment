// ./Components/All.jsx
import React from 'react';
import allimage1 from '../assets/images/allimage1.jpg';
import allimage2 from '../assets/images/allimage2.jpg';
import allimage3 from '../assets/images/allimage3.jpg';

function All() {
    return <>
        <div className="container">
            <div className="row">
            <div className="col-md-4">
                <div className="card" style={{ width: '25rem', height: '18rem' }}>
                    <img className="card-img-top" src={allimage1} alt="Card image cap" style={{ width: '25rem', height: '15rem' }} />
                    <div className="card-body">
                        <h4 className="card-title">Python Objects 101</h4>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card" style={{ width: '25rem', height: '18rem' }}>
                    <img className="card-img-top" src={allimage2} alt="Card image cap" style={{ width: '25rem', height: '15rem' }} />
                    <div className="card-body">
                        <h4 className="card-title">Machine Learning Tools You Must know </h4>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card" style={{ width: '25rem', height: '18rem' }}>
                    <img className="card-img-top" src={allimage3} alt="Card image cap" style={{ width: '25rem', height: '15rem' }} />
                    <div className="card-body">
                        <h4 className="card-title">Unlocking the Power of NLP</h4>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
}

export default All;
