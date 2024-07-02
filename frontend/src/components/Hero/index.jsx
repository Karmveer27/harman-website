import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Hero() {
    return (
        <div className="min-h-screen d-flex align-items-center row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h1 className="font-weight-bold pb-3">Have Any Questions?</h1>
                        <p className="text-muted text-left">
                            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consectetur sadipscing elitr
                        </p>D
                        <div className="d-flex justify-content-start">
                            <button className="btn btn-warning btn-lg">Contact us</button>
                        </div>
                    </div>

                    <div className="col-md-6 text-center">
                        <img src="/suit.jpg" alt="Contact" className="img-fluid rounded" />
                    </div>
        </div>
    );
}

export default Hero;
