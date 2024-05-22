import React from 'react';

function Card(props) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
          <h6 className="card-price text-center">${props.data.price}<span className="period">/month</span></h6>
          <hr />
          <ul className="fa-ul">
            <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.data.user}</li>
            <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.data.storage}</li>
            {props.data.plans.map((e, i) => {
              if (props.data.plan === "FREE") {
                return (i <= 2) ? (
                  <li key={i}><span className="fa-li"><i className="fas fa-check"></i></span>{e}</li>
                ) : (
                  <li key={i} className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{e}</li>
                );
              }
              if (props.data.plan === "PLUS") {
                return (i <5) ? (
                  <li key={i}><span className="fa-li"><i className="fas fa-check"></i></span>{e}</li>
                ) : (
                  <li key={i} className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{e}</li>
                );
              } 
              if (props.data.plan === "PRO") {
                return (
                  <li key={i}><span className="fa-li"><i className="fas fa-check"></i></span>{e}</li>
                );
              }
            })}
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
