import './App.css';
import Nav from './components/Header/index.jsx';
import Footer from './components/Footer.jsx';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Nav />
            <main className="flex-grow">
                    <Outlet />   
            </main>
            <Footer />
        </div>
    );
}

export default App;
