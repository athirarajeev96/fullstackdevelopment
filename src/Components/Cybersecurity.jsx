import React from 'react';
import cyberimage1 from '../assets/images/cyberimage1.jpg';
import cyberimage2 from '../assets/images/cyberimage2.jpg';
import cyberimage3 from '../assets/images/cyberimage3.jpg';


function Cybersecurity() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card" style={{ width: '25rem', height: '18rem' }}>
                        <img className="card-img-top" src={cyberimage1} alt="Card image cap" style={{ width: '25rem', height: '15rem' }} />
                        <div className="card-body">
                            <h4 className="card-title">Cyber Security Vs Ethical Hacking</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" style={{ width: '25rem', height: '18rem' }}>
                        <img className="card-img-top" src={cyberimage2} alt="Card image cap" style={{ width: '25rem', height: '15rem' }} />
                        <div className="card-body">
                            <h4 className="card-title">Types of Cyber Security</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" style={{ width: '25rem', height: '18rem' }}>
                        <img className="card-img-top" src={cyberimage3} alt="Card image cap" style={{ width: '25rem', height: '15rem' }} />
                        <div className="card-body">
                            <h4 className="card-title">Cyber Security - Roadmap for beginners</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cybersecurity;
