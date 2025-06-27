import React from "react";
import "./CommunityLove.css";

function CommunityLove() {
  return (
    <div className="community-love-page">
      <section className="love-hero">
        <div className="hero-background-elements">
          <div className="floating-element floating-element-1"></div>
          <div className="floating-element floating-element-2"></div>
          <div className="floating-element floating-element-3"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-icon">🏆</span>
              <span>Community Excellence</span>
            </div>
            <h1>
              Empowering Communities Through
              <span className="gradient-text"> Recognition & Love</span>
            </h1>
            <p>
              Transform your community impact into meaningful recognition. Earn prestigious badges, 
              certificates, and build a professional portfolio of your humanitarian contributions 
              that makes a lasting difference.
            </p>
            <div className="hero-buttons">
              <a href="/community" className="join-btn primary">
                <span>Join Our Community</span>
                <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="/learn-more" className="join-btn secondary">
                <span>Learn More</span>
                <svg className="play-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Active Members</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">250K+</div>
                <div className="stat-label">Acts of Kindness</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Communities</div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img 
                src="https://images.unsplash.com/photo-1617080090911-91409e3496ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHZvbHVudGVlcmluZ3xlbnwwfHwwfHx8MA%3D%3D" 
                alt="Community helping hands" 
                className="hero-img"
              />
              <div className="image-overlay">
                <div className="floating-badge">
                  <span className="badge-emoji">💝</span>
                  <div className="badge-content">
                    <div className="badge-title">Impact Score</div>
                    <div className="badge-value">98/100</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="love-badges">
        <div className="section-header">
          <div className="section-badge">
            <span>🎖️</span>
            <span>Recognition System</span>
          </div>
          <h2>Professional Achievement Badges</h2>
          <p className="badges-subtitle">
            Industry-recognized credentials that showcase your community leadership and social impact expertise
          </p>
        </div>
        
        <div className="badge-grid">
          <div className="badge-card featured">
            <div className="card-header">
              <div className="badge-icon premium">👑</div>
              <div className="premium-label">Premium</div>
            </div>
            <h3>Community Leader</h3>
            <p>Certified leadership in community development and social impact initiatives</p>
            <div className="badge-metrics">
              <div className="metric">
                <span className="metric-value">500+</span>
                <span className="metric-label">Hours</span>
              </div>
              <div className="metric">
                <span className="metric-value">50+</span>
                <span className="metric-label">Projects</span>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '85%'}}></div>
            </div>
            <span className="progress-text">85% Complete</span>
          </div>
          
          <div className="badge-card">
            <div className="card-header">
              <div className="badge-icon">💎</div>
            </div>
            <h3>Impact Innovator</h3>
            <p>Recognition for developing creative solutions to community challenges</p>
            <div className="badge-metrics">
              <div className="metric">
                <span className="metric-value">10+</span>
                <span className="metric-label">Solutions</span>
              </div>
              <div className="metric">
                <span className="metric-value">1K+</span>
                <span className="metric-label">Lives Touched</span>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '60%'}}></div>
            </div>
            <span className="progress-text">60% Complete</span>
          </div>
          
          <div className="badge-card">
            <div className="card-header">
              <div className="badge-icon">🌟</div>
            </div>
            <h3>Volunteer Excellence</h3>
            <p>Outstanding dedication to consistent community service and volunteering</p>
            <div className="badge-metrics">
              <div className="metric">
                <span className="metric-value">200+</span>
                <span className="metric-label">Hours</span>
              </div>
              <div className="metric">
                <span className="metric-value">25+</span>
                <span className="metric-label">Events</span>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '40%'}}></div>
            </div>
            <span className="progress-text">40% Complete</span>
          </div>
          
          <div className="badge-card">
            <div className="card-header">
              <div className="badge-icon">🤝</div>
            </div>
            <h3>Partnership Builder</h3>
            <p>Expertise in building strategic partnerships for community development</p>
            <div className="badge-metrics">
              <div className="metric">
                <span className="metric-value">15+</span>
                <span className="metric-label">Partners</span>
              </div>
              <div className="metric">
                <span className="metric-value">5+</span>
                <span className="metric-label">Programs</span>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '70%'}}></div>
            </div>
            <span className="progress-text">70% Complete</span>
          </div>
        </div>
      </section>

      <section className="community-gallery">
        <div className="section-header">
          <div className="section-badge">
            <span>📸</span>
            <span>Success Stories</span>
          </div>
          <h2>Our Community Impact Showcase</h2>
          <p>Real stories, real impact, real change happening in communities worldwide</p>
        </div>
        
        <div className="gallery-grid">
          <div className="gallery-item large">
            <img 
              src="https://images.unsplash.com/photo-1541976844346-f18aeac57b06?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Volunteers helping"
              className="gallery-img"
            />
            <div className="gallery-overlay">
              <div className="overlay-content">
                <div className="impact-badge">
                  <span className="impact-number">2,500+</span>
                  <span className="impact-label">Lives Impacted</span>
                </div>
                <h4>Global Humanitarian Initiative</h4>
                <p>Supporting disaster relief efforts across 15 countries</p>
                <div className="gallery-tags">
                  <span className="tag">Disaster Relief</span>
                  <span className="tag">Global Impact</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="gallery-item">
            <img 
              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=300&h=200&fit=crop&crop=center" 
              alt="Community gathering"
              className="gallery-img"
            />
            <div className="gallery-overlay">
              <div className="overlay-content">
                <div className="impact-badge">
                  <span className="impact-number">50+</span>
                  <span className="impact-label">Programs</span>
                </div>
                <h4>Community Unity Programs</h4>
                <p>Building stronger neighborhood connections</p>
                <div className="gallery-tags">
                  <span className="tag">Unity</span>
                  <span className="tag">Local</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="gallery-item">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&h=200&fit=crop&crop=center" 
              alt="Caring for others"
              className="gallery-img"
            />
            <div className="gallery-overlay">
              <div className="overlay-content">
                <div className="impact-badge">
                  <span className="impact-number">1,200+</span>
                  <span className="impact-label">Beneficiaries</span>
                </div>
                <h4>Healthcare Outreach</h4>
                <p>Providing essential care to underserved communities</p>
                <div className="gallery-tags">
                  <span className="tag">Healthcare</span>
                  <span className="tag">Outreach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="section-header">
          <div className="section-badge">
            <span>💬</span>
            <span>Testimonials</span>
          </div>
          <h2>What Our Community Leaders Say</h2>
        </div>
        
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-mark">"</div>
              <p>This platform transformed how I showcase my community work. The professional badges opened doors to leadership opportunities I never imagined.</p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src="https://images.unsplash.com/photo-1494790108755-2616c5e99e24?w=60&h=60&fit=crop&crop=face" alt="Sarah Chen" />
              </div>
              <div className="author-info">
                <div className="author-name">Sarah Chen</div>
                <div className="author-title">Community Director, NGO Alliance</div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-mark">"</div>
              <p>The recognition system here is world-class. It gave credibility to my volunteer work and helped me transition into a full-time social impact career.</p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" alt="Marcus Rodriguez" />
              </div>
              <div className="author-info">
                <div className="author-name">Marcus Rodriguez</div>
                <div className="author-title">Social Impact Consultant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="love-footer">
        <div className="footer-content">
          <div className="cta-section">
            <div className="cta-icon">🚀</div>
            <h3>Ready to Amplify Your Community Impact?</h3>
            <p>Join thousands of change-makers who are building professional portfolios of their community contributions</p>
            <div className="cta-buttons">
              <a href="/get-started" className="cta-btn primary">
                <span>Get Started Today</span>
                <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="/demo" className="cta-btn secondary">
                <span>View Demo</span>
              </a>
            </div>
          </div>
          
          <div className="social-proof">
            <div className="proof-item">
              <div className="proof-number">4.9/5</div>
              <div className="proof-label">User Rating</div>
            </div>
            <div className="proof-item">
              <div className="proof-number">99%</div>
              <div className="proof-label">Satisfaction Rate</div>
            </div>
            <div className="proof-item">
              <div className="proof-number">24/7</div>
              <div className="proof-label">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CommunityLove;