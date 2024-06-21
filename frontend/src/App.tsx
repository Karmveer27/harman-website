import './App.css';
import Nav from './components/Nav.tsx';
import Footer from './components/Footer.tsx';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Nav />
            <main className="flex-grow-1 d-flex">
                <div className="container my-4">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
