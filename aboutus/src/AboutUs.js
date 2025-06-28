import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>About VolunteerHub</h1>
          <p className="hero-subtitle">
            Connecting compassionate hearts with meaningful opportunities to spread love and create gentle positive change.
          </p>
          <div className="flowers">🎯 🌟 🤝 🌻</div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="mission-vision-grid">
          <div className="mission-card">
            <div className="card-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To bridge the gap between passionate volunteers and organizations in need, 
              creating a seamless platform where kindness meets action. We believe every 
              act of service, no matter how small, contributes to building stronger, 
              more compassionate communities.
            </p>
          </div>
          <div className="vision-card">
            <div className="card-icon">🌟</div>
            <h3>Our Vision</h3>
            <p>
              A world where volunteering is accessible to everyone, where communities 
              thrive through collective action, and where every person can easily find 
              ways to make a meaningful difference in the lives of others.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-content">
          <h2>Our Story</h2>
          <div className="story-text">
            <p>
              VolunteerHub was born from a simple observation: there are countless people 
              eager to help and numerous organizations desperately needing volunteers, yet 
              they often struggle to find each other. Founded  by a team of 
              community advocates and technology enthusiasts, we set out to solve this 
              disconnect.
            </p>
            <p>
              What started as a small local initiative has grown into a comprehensive 
              platform serving thousands of volunteers and hundreds of organizations 
              across multiple communities. Our journey has been guided by the belief 
              that technology should serve humanity, making it easier for people to 
              give back and create positive change.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <div className="value-icon">💝</div>
            <h4>Compassion</h4>
            <p>Every interaction is guided by empathy and genuine care for our community members.</p>
          </div>
          <div className="value-item">
            <div className="value-icon">🤝</div>
            <h4>Inclusivity</h4>
            <p>We welcome volunteers from all backgrounds and ensure opportunities are accessible to everyone.</p>
          </div>
          <div className="value-item">
            <div className="value-icon">🌱</div>
            <h4>Growth</h4>
            <p>We foster personal development through meaningful volunteer experiences and continuous learning.</p>
          </div>
          <div className="value-item">
            <div className="value-icon">🔗</div>
            <h4>Connection</h4>
            <p>Building lasting relationships between volunteers, organizations, and the communities they serve.</p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="impact-stats">
        <h2>Our Impact Together</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">12,500+</div>
            <div className="stat-label">Active Volunteers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">850+</div>
            <div className="stat-label">Partner Organizations</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">45,000+</div>
            <div className="stat-label">Hours Volunteered</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">150+</div>
            <div className="stat-label">Communities Served</div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Make a Difference?</h2>
          <p>Join thousands of volunteers who are already creating positive change in their communities.</p>
          <div className="cta-buttons">
            <button className="btn-primary">Start Volunteering</button>
            <button className="btn-secondary">Partner With Us</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;