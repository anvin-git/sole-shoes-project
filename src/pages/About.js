import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Header Section */}
      <section className="header-section">
        <h1 className="text-center mb-5">About The Sole Shoes</h1>
        <p className="lead text-center">
          The Sole Shoes is a premier footwear brand committed to delivering high-quality, stylish shoes that combine comfort and fashion.
        </p>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="mission-vision-values">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="info-box">
                <h2>Our Mission</h2>
                <p>Our mission is to design and produce shoes that exceed our customers' expectations, providing them with unparalleled comfort and style.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info-box">
                <h2>Our Vision</h2>
                <p>Our vision is to become a leading global provider of footwear, known for our dedication to craftsmanship, innovation, and customer satisfaction.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info-box">
                <h2>Our Values</h2>
                <ul>
                  <li><strong>Quality:</strong> We prioritize quality in every aspect of our shoe design and production process.</li>
                  <li><strong>Style:</strong> We strive to create shoes that not only feel great but also look fashionable and on-trend.</li>
                  <li><strong>Comfort:</strong> Comfort is at the core of our shoe designs, ensuring that our customers can wear our shoes all day, every day.</li>
                  <li><strong>Innovation:</strong> We are committed to innovation, continuously exploring new materials and technologies to improve our products.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="text-center mb-4">Our Team</h2>
          <div className="row justify-content-center">
            {[
              { name: 'Anvin Varghese', imageUrl: '/assets/images/anvin.jpeg' },
              { name: 'Rahul Punambhai Patel', imageUrl: '/assets/images/Rahul.jpeg' },
              { name: 'Zhaoning Li', imageUrl: '/assets/images/Zhaoning.jpeg' },
              { name: 'Rajveer Kaur', imageUrl: '/assets/images/Rajveer.jpeg' }
            ].map((member, index) => (
              <div className="col-md-3" key={index}>
                <div className="team-member text-center">
                  <img src={member.imageUrl} alt={member.name} className="img-fluid rounded-circle mb-3" />
                  <p className="team-member-name"><strong>{member.name}</strong></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
