import './App.css';
import Nav from './components/Header/index.jsx';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import {Row,Col} from "react-bootstrap"

function App() {
    return (
        <>
        
        <Row>
            <Col md={12} sd={12}>
            <Nav />
            </Col>
            <Col md={12} sd={12}>
                <Outlet />  
            </Col>
            <Col md={12} sd={12}>
             <Footer />
            </Col>
        </Row>
        </>
    );
}

export default App;
