import './App.css';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
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
