import React from 'react';
import dataimage1 from '../assets/images/dataimage1.jpg';
import dataimage2 from '../assets/images/dataimage2.jpg';
import dataimage3 from '../assets/images/dataimage3.jpg';

function Datascience() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card" style={{ width: '25rem', height: '18rem' }}>
                        <img className="card-img-top" src={dataimage1} alt="Card image cap" style={{ width: '25rem', height: '14rem' }} />
                        <div className="card-body">
                            <h4 className="card-title">Non Coding jobs in Data Science</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" style={{ width: '25rem', height: '18rem' }}>
                        <img className="card-img-top" src={dataimage2} alt="Card image cap" style={{ width: '25rem', height: '14rem' }} />
                        <div className="card-body">
                            <h4 className="card-title">Roles and Responsibilities</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" style={{ width: '25rem', height: '18rem' }}>
                        <img className="card-img-top" src={dataimage3} alt="Card image cap" style={{ width: '25rem', height: '15rem' }} />
                        <div className="card-body">
                            <h4 className="card-title">How long it would take to learn Data Science?</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Datascience;
