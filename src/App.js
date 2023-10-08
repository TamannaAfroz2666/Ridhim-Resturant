
import './App.css';
import Home from './components/Home/Home';
import Carousel from 'react-bootstrap/Carousel';
// import image1 from '../../assets/images/Background/wine-glass2.jpg';
import image from './assets/images/Background/wine-glass pic1.jpg'

function App() {
  return (
    <div >
      <Home></Home>

      <br />

      <Carousel>
        <Carousel.Item>
          <img src={image} alt="" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={image} alt="" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <image text="Third slide" /> */}
          <img src={image} alt="" />
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
}

export default App;
