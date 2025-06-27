import React from "react";
import "./HeartLedMatching.css";

function HeartLedMatching() {
  return (
    <div className="heart-matching-page">
      <div className="background-decoration">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
      
      <section className="matching-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span>✨ Connecting Hearts & Purpose</span>
          </div>
          <h1>Heart-Led Matching</h1>
          <p>
            Our gentle system connects you with opportunities that align with your passions, values,
            and the causes that touch your heart. Discover meaningful work that resonates with your soul.
          </p>
          <div className="hero-buttons">
            <a href="/opportunities" className="discover-btn primary">
              <span>Discover Opportunities</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="/learn-more" className="discover-btn secondary">
              Learn More
            </a>
          </div>
        </div>
        <div className="hero-illustration">
          <div className="heart-icon">💖</div>
          <div className="pulse-ring"></div>
        </div>
      </section>

      <section className="matching-info">
        <div className="section-header">
          <h2>How Our Magic Works</h2>
          <p>A gentle journey from discovery to meaningful connection</p>
        </div>
        
        <div className="info-grid">
          <div className="info-card">
            <div className="card-icon">
              <span className="icon">🌸</span>
              <div className="icon-bg"></div>
            </div>
            <h3>Share Your Heart</h3>
            <p>Tell us what ignites your passion — whether it's education, environment, health, community, or the causes that make your heart sing.</p>
            <div className="card-decoration"></div>
          </div>
          
          <div className="info-card featured">
            <div className="card-icon">
              <span className="icon">✨</span>
              <div className="icon-bg"></div>
            </div>
            <h3>We Listen & Learn</h3>
            <p>Our intelligent matching system gently analyzes your values, skills, and aspirations to find opportunities that truly resonate with your essence.</p>
            <div className="card-decoration"></div>
          </div>
          
          <div className="info-card">
            <div className="card-icon">
              <span className="icon">🌟</span>
              <div className="icon-bg"></div>
            </div>
            <h3>You Shine Bright</h3>
            <p>Step into meaningful work that reflects your authentic self and allows you to share your unique gifts with the world.</p>
            <div className="card-decoration"></div>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="testimonial-card">
          <div className="quote-icon">"</div>
          <p>"This platform helped me find my calling. I'm now working with a cause I'm truly passionate about, and it doesn't feel like work anymore."</p>
          <div className="testimonial-author">
            <div className="author-avatar">S</div>
            <div>
              <strong>Sarah Chen</strong>
              <span>Environmental Advocate</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeartLedMatching;