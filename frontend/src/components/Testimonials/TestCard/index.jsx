import { Card } from 'react-bootstrap';
import './index.css'; // Assuming you create a separate CSS file for the custom styles

function TestCard({name,review}) {
    return (
        <Card className="dark-card mb-4">
            <Card.Body>
                <Card.Title as="div" className="product-title">
                    <strong>{name}</strong>
                </Card.Title>
                <Card.Text as="p">
                    {review}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default TestCard;
