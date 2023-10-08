import React from 'react';
import './Home.css';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import image from '../../assets/images/Background/wine-glass pic1.jpg'
import imageTwo from '../../assets/images/Background/wine-glass2.jpg';
import imageThree from '../../assets/images/Background/wine3.jpg';


const Home = () => {

  return (
    <div className='home'>
      <Button variant="primary">Primary</Button>
      <br />
      <br />
      <Carousel>
        <Carousel.Item interval={1000}>
          <img src={image} alt="" />
          <Carousel.Caption>
            <h3 className='title'>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src={imageTwo} alt="" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src={imageThree} alt="" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     





    </div>
  );
};

export default Home;