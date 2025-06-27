import React, { useState, useEffect } from "react";
import "./App.css";

function VolunteerHomepage() {
  const [email, setEmail] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle newsletter subscription
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with email: ${email}`);
      setEmail("");
    }
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  // Counter animation for impact stats
  const CounterAnimation = ({ target, label, suffix = "" }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      const increment = target / 100;
      const timer = setInterval(() => {
        setCount(prev => {
          if (prev < target) {
            return Math.min(prev + increment, target);
          }
          clearInterval(timer);
          return target;
        });
      }, 20);
      
      return () => clearInterval(timer);
    }, [target]);

    return (
      <div className="stat-card">
        <h3>{Math.floor(count).toLocaleString()}{suffix}</h3>
        <p>{label}</p>
      </div>
    );
  };

  return (
    <div className="homepage">
      {/* Enhanced Navbar */}
      <nav className={`pro-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3063/3063825.png"
              alt="VolunteerHub Logo"
              height="40"
            />
            <span className="logo-text">VolunteerHub</span>
          </div>
          
          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#about" onClick={() => scrollToSection('features')}>About</a></li>
            <li><a href="#opportunities" onClick={() => scrollToSection('opportunities')}>Opportunities</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('newsletter')}>Dashbord</a></li>
            <li><a href="#impact" onClick={() => scrollToSection('impact')}>Impact</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('newsletter')}>Contact</a></li>
            
          </ul>
          
          <div className="nav-actions">
            <button className="nav-button secondary">Sign Up</button>
            <button className="nav-button primary">Login</button>
          </div>
          
          {/* Mobile menu toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">🌸 Join 10,000+ Kind Hearts</div>
          <h1>Spread Love Through Volunteering</h1>
          <p>Connect with heartwarming causes, create beautiful impacts, and join a community dedicated to making the world a brighter, more caring place.</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollToSection('features')}>
              Start Your Journey
              <span className="btn-arrow">→</span>
            </button>
            <button className="btn-secondary">
              Watch Stories
              <span className="play-icon">▶</span>
            </button>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Volunteer With Love?</h2>
            <p>Discover gentle tools and a caring community that make volunteering meaningful and heartwarming</p>
          </div>
          
          <div className="feature-cards">
            <div className="card">
              <div className="card-icon">🌷</div>
              <h3>Heart-Led Matching</h3>
              <p>Our gentle system connects you with opportunities that align with your passions, values, and the causes that touch your heart.</p>
              <div className="card-footer">
                <span className="learn-more">Discover More →</span>
              </div>
            </div>
            
            <div className="card featured">
              <div className="card-badge">Most Loved</div>
              <div className="card-icon">🌺</div>
              <h3>Impact Stories</h3>
              <p>Track your beautiful contributions, see the smiles you've created, and share inspiring stories of positive change.</p>
              <div className="card-footer">
                <span className="learn-more">See Stories →</span>
              </div>
            </div>
            
            <div className="card">
              <div className="card-icon">🏵️</div>
              <h3>Community Love</h3>
              <p>Earn appreciation badges, heartfelt certificates, and recognition for your kindness. Build a portfolio of your caring acts.</p>
              <div className="card-footer">
                <span className="learn-more">Join Community →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Opportunities Section */}
      <section id="opportunities" className="opportunities">
        <div className="container">
          <div className="section-header">
            <h2>Heartwarming Opportunities</h2>
            <p>Find the perfect way to share your love and kindness</p>
          </div>
          
          <div className="opportunity-grid">
            <div className="opportunity-card">
              <div className="opportunity-image">
                <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=400&q=80" alt="Environmental care" />
                <div className="opportunity-tag">🌱 Nature Care</div>
              </div>
              <div className="opportunity-content">
                <h3>Garden of Hope Project</h3>
                <p>Help create beautiful green spaces for community wellness</p>
                <div className="opportunity-meta">
                  <span>🌸 This Weekend</span>
                  <span>🏡 Community Garden</span>
                </div>
              </div>
            </div>
            
            <div className="opportunity-card">
              <div className="opportunity-image">
                <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=400&q=80" alt="Food sharing" />
                <div className="opportunity-tag">💝 Community Care</div>
              </div>
              <div className="opportunity-content">
                <h3>Meals with Love</h3>
                <p>Share warm meals and caring conversations with families</p>
                <div className="opportunity-meta">
                  <span>🌷 Weekdays</span>
                  <span>🏠 Community Kitchen</span>
                </div>
              </div>
            </div>
            
            <div className="opportunity-card">
              <div className="opportunity-image">
                <img src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=400&q=80" alt="Education support" />
                <div className="opportunity-tag">🌻 Learning Together</div>
              </div>
              <div className="opportunity-content">
                <h3>Gentle Mentorship</h3>
                <p>Guide young minds with patience and encouragement</p>
                <div className="opportunity-meta">
                  <span>🌺 Flexible Hours</span>
                  <span>📚 Local Schools</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Impact Section */}
      <section id="impact" className="impact">
        <div className="impact-overlay"></div>
        <div className="container">
          <div className="section-header">
            <h2>Hearts United, Impact Multiplied</h2>
            <p>Together, we're weaving threads of kindness across communities worldwide</p>
          </div>
          
          <div className="impact-stats">
            <CounterAnimation target={10000} label="Caring Volunteers" suffix="+" />
            <CounterAnimation target={250000} label="Hours of Love" suffix="+" />
            <CounterAnimation target={500} label="Dreams Fulfilled" suffix="+" />
            <CounterAnimation target={150} label="Partner Hearts" suffix="+" />
          </div>
          
          <div className="impact-testimonial">
            <blockquote>
              "VolunteerHub opened my heart to opportunities I never imagined. In just 6 months, I've shared 50+ hours of love and discovered my passion for nurturing our beautiful planet."
            </blockquote>
            <cite>- Emma Rose, Environmental Angel</cite>
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter Section */}
      <section id="newsletter" className="newsletter">
        <div className="newsletter-overlay"></div>
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2>Stay Connected with Love</h2>
              <p>Receive weekly opportunities to spread kindness, heartwarming stories, and gentle reminders to make a difference.</p>
              <div className="newsletter-benefits">
                <span>💌 Weekly love letters</span>
                <span>🌸 Inspiring stories</span>
                <span>🌷 Community gatherings</span>
              </div>
            </div>
            
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">
                  Join Our Family
                  <span className="btn-arrow">💝</span>
                </button>
              </div>
              <p className="form-disclaimer">
                No spam, only love. Unsubscribe anytime. We treasure your trust.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3063/3063825.png"
                  alt="VolunteerHub Logo"
                  height="32"
                />
                <span>VolunteerHub</span>
              </div>
              <p>Connecting compassionate hearts with meaningful opportunities to spread love and create gentle positive change.</p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">🌸</a>
                <a href="#" aria-label="Twitter">🌷</a>
                <a href="#" aria-label="Instagram">🌺</a>
                <a href="#" aria-label="LinkedIn">🌻</a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#features">About Us</a></li>
                <li><a href="#opportunities">Opportunities</a></li>
                <li><a href="#impact">Impact</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Volunteer Guide</a></li>
                <li><a href="#">Organization Portal</a></li>
                <li><a href="#">Stories Blog</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 VolunteerHub. All rights reserved.</p>
            <p>Made with 💝 for volunteers worldwide</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default VolunteerHomepage;