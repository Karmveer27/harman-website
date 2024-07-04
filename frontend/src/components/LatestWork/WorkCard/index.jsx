import React from 'react';
import "../WorkCard/index.css";

function WorkCard({ imgSrc, description }) {
    return (
        <div className="work-card d-flex flex-column align-center">
            <div className="image-container">
                <img src={imgSrc} alt="Work" className="img-fluid rounded" />
            </div>

            <div className="p-container">
                <p>{description}</p>
            </div>
            
        </div>
    );
}

export default WorkCard;
