import {Row,Col} from 'react-bootstrap'
import "../WorkCard/index.css"
function WorkCard({imgSrc}){
    return (
        <Row>
                <Col lg={12}>
                    <img src={imgSrc}/>
                </Col>
                <Col lg={12}>
                    Great house come by and take a look or a viewing!
                </Col>
        </Row>
    )
}

export default WorkCard;