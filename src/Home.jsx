import React from 'react';
import './styles/Home.css';
import { NavLink } from 'react-router-dom';
import carousel1 from './images/carousel-1.jpg';
import carousel2 from './images/carousel-2.jpg';
import carousel3 from './images/carousel-3.jpg';
import catalogue from './images/catalogue-img.jpg';
import riset from './images/riset-img.jpg';
import card from './images/card-img-1.jpg';
import Navbar from './components/Navbar/Navbar';
import Footer from './Footer';

function Home() {
  return (
    <div className="home">
    <Navbar />
            <div className="container-fluid pl-0 pr-0">
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={carousel1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={carousel2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={carousel3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    <div className="container-img">
      <img src={catalogue} alt="" />
      <img src={riset} alt="" />
    </div>
  </div>
      <div className="footer">
        <div className="card blue">
          <NavLink to="/#" style={{textDecoration: 'none'}}><img src={card} alt="" />
          <h4>Hot Books!</h4></NavLink>
        </div>
        
        <div className="card green">
          <NavLink to="/#" style={{textDecoration: 'none'}}><img src={card} alt="" />
            <h4>E-Books!</h4></NavLink>
        </div>
        <div className="card red">
          <NavLink to="/#" style={{textDecoration: 'none'}}><img src={card} alt="" />
            <h4>Our News!</h4></NavLink>
        </div>
      </div>
      <Footer />
        </div>
    )
}

export default Home
