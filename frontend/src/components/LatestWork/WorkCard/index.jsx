import {Row,Col} from 'react-bootstrap'
import "../WorkCard/index.css"
function WorkCard({imgSrc,description}){
    return (
            <div className="work-card">
                <img src={imgSrc} alt="Work 1" className="img-fluid rounded" />
                <p>{description}</p>
            </div>
    )
}

export default WorkCard;