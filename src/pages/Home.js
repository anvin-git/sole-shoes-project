import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap'; // Import Carousel from react-bootstrap

const HomePage = () => {
  return (
    <main>
      {/* Section 1: Image Slider */}
      <section className="image-slider">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/images/header_downloaded3.jpg"
              alt="Slide 1"
            />
            <Carousel.Caption>
              <h1 className="display-4">Lightweight and Breathable Running Shoes</h1>
              <p className="lead">Experience ultimate comfort with our latest collection of running shoes.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/images/header_downloaded.jpg"
              alt="Slide 2"
            />
            <Carousel.Caption>
              <h1 className="display-4">Elegant Leather Dress Shoes</h1>
              <p className="lead">Elevate your style with our premium leather dress shoes for any occasion.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/images/header_downloaded2.jpg"
              alt="Slide 3"
            />
            <Carousel.Caption>
              <h1 className="display-4">Casual and Comfortable Sneakers</h1>
              <p className="lead">Stay stylish and comfortable with our versatile collection of sneakers.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Section 2: Short Description */}
      <section className="welcome-message">
        <div className="container text-center py-5">
          <h2>Welcome to SoleShoes</h2>
          <p className="lead">
            Discover our latest collection of premium footwear designed for style, comfort, and performance. 
            From running shoes engineered for peak performance to stylish dress shoes perfect for any occasion, 
            we have everything you need to step out in confidence.
          </p>
          <p className="lead">
            Explore our collection today and experience the perfect blend of style and comfort with SoleShoes.
          </p>
          <Link to="/shop" className="btn btn-primary btn-lg mt-3">Shop Now</Link>
        </div>
      </section>

      {/* Section 3: Featured Products */}
      <section className="featured-products">
        <div className="container">
          <h2 className="text-center mb-4">Featured Products</h2>
          <div className="row">
            {/* Sample Product Data */}
            {/* Replace with dynamic data from API or state */}
            {[
              { id: 1, name: 'Adidas Stan Smith', description: 'Classic white sneakers with green accents', price: '99.99', imageUrl: '/assets/images/adidas_stan_smith.jpg' },
              { id: 2, name: 'Nike React Infinity Run Flyknit', description: 'Comfortable running shoes with Flyknit technology', price: '129.99', imageUrl: '/assets/images/nike_react_infinity_run_flyknit.jpg' },
              { id: 3, name: 'Saucony Triumph 18', description: 'High-performance running shoes for long distances', price: '149.99', imageUrl: '/assets/images/saucony_triumph_18.jpg' }
            ].map((shoe) => (
              <div className="col-md-4" key={shoe.id}>
                <div className="card mb-4">
                  <img src={shoe.imageUrl} className="card-img-top" alt={shoe.name} />
                  <div className="card-body">
                    <h5 className="card-title">{shoe.name}</h5>
                    <p className="card-text">{shoe.description}</p>
                    <p className="card-text">${shoe.price}</p>
                    <Link to={`/product/${shoe.id}`} className="btn btn-primary">View Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: What Customers Say */}
      <section className="testimonials">
        <div className="container">
          <h3 className="text-center mb-4">What Our Customers Say</h3>
          <div className="row">
            {/* Sample Testimonials */}
            {/* Replace with dynamic data from API or state */}
            {[
              { text: "Absolutely love my new shoes from SoleShoes! They're so comfortable and stylish. I wear them everywhere!", name: "Sarah K." },
              { text: "The customer service at SoleShoes is top-notch! They helped me find the perfect pair of shoes for my needs.", name: "Michael P." },
              { text: "I've been a loyal customer of SoleShoes for years. Their shoes never disappoint in terms of quality and style!", name: "Emily S." }
            ].map((testimonial, index) => (
              <div className="col-md-4" key={index}>
                <div className="card mb-4">
                  <div className="card-body">
                    <p className="card-text">"{testimonial.text}"</p>
                    <p className="card-text"><small className="text-muted">- {testimonial.name}</small></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
