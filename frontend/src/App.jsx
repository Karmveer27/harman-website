import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';

const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100 mb-5'>
      <Header />
      <main className='flex-grow-1 mb-5'>
        <Container className=''>
          <Outlet />
        </Container>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
