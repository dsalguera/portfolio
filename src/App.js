import React from 'react';
import NavbarComponent from './Navbar';
import CarouselComponent from './CarouselComponent';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <CarouselComponent/>
      <Container>
        <h1>Welcome to React Bootstrap Website</h1>
        <p>This is a simple website built with React and Bootstrap.</p>
      </Container>
      <Container>
        <h2>Our Services</h2>
      </Container>
    </div>
  );
}

export default App;
