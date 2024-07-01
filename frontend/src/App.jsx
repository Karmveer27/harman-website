import './App.css';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Nav />
            <main className="flex">
                    <Outlet />   
            </main>
            <Footer />
        </div>
    );
}

export default App;
