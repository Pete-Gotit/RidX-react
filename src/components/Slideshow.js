import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Slideshow.css';


function Slideshow() {
    return (
            <Carousel>
                <Carousel.Item interval={1000} className='carousel-item'>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://images.pexels.com/photos/409701/pexels-photo-409701.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="First slide"
                    />
                    <Carousel.Caption className='carousel-caption'>
                        <h1>Xpress your needs and let RidX handle the rest</h1>    
                        <p>The latest and best ridesharing platform - available worldwide.</p>
                    </Carousel.Caption>
                </Carousel.Item >
                <Carousel.Item interval={500} className='carousel-item'>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://images.pexels.com/photos/58724/pexels-photo-58724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Second slide"
                    />
                    <Carousel.Caption className='carousel-caption'>
                        <h1>Get in the driver's seat and start earning</h1>
                        <p>Be your own boss.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://images.pexels.com/photos/2416591/pexels-photo-2416591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Third slide"
                    />
                    <Carousel.Caption className='carousel-caption'>
                        <h1>Ride. Relax. Repeat</h1>
                        <p>
                            We are committed to helping to create a safe environment for our users.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    );
}

export default Slideshow;
