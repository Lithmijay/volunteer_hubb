import React, { useState } from "react";
import "./OpportunitiesPage.css";

const opportunities = [
  {
    category: "Environmental Care",
    icon: "🌱",
    title: "Nature Care",
    project: "Garden of Hope Project",
    description: "Help create beautiful green spaces for community wellness and environmental restoration",
    date: "🌸 This Weekend",
    location: "🏡 Community Garden",
    spots: 12,
    gradient: "nature"
  },
  {
    category: "Food Sharing",
    icon: "💝",
    title: "Community Care",
    project: "Meals with Love",
    description: "Share warm meals and caring conversations with families in need",
    date: "🌷 Weekdays",
    location: "🏠 Community Kitchen",
    spots: 8,
    gradient: "warmth"
  },
  {
    category: "Education Support",
    icon: "🌻",
    title: "Learning Together",
    project: "Gentle Mentorship",
    description: "Guide young minds with patience and encouragement through learning journey",
    date: "🌺 Flexible Hours",
    location: "📚 Local Schools",
    spots: 15,
    gradient: "wisdom"
  },
  {
    category: "Senior Care",
    icon: "🌸",
    title: "Golden Hearts",
    project: "Companion Circle",
    description: "Bring joy and friendship to our beloved senior community members",
    date: "🌼 Afternoons",
    location: "🏥 Care Centers",
    spots: 6,
    gradient: "caring"
  },
  {
    category: "Creative Arts",
    icon: "🎨",
    title: "Artistic Souls",
    project: "Colors of Joy",
    description: "Inspire creativity and self-expression through collaborative art projects",
    date: "🌹 Weekends",
    location: "🎭 Art Studio",
    spots: 10,
    gradient: "creative"
  },
  {
    category: "Animal Welfare",
    icon: "🐾",
    title: "Furry Friends",
    project: "Paws & Hearts",
    description: "Care for rescued animals and help them find loving forever homes",
    date: "🌻 Daily",
    location: "🏠 Animal Shelter",
    spots: 20,
    gradient: "animal"
  }
];

function OpportunitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = ["All", ...new Set(opportunities.map(opp => opp.category))];
  
  const filteredOpportunities = selectedCategory === "All" 
    ? opportunities 
    : opportunities.filter(opp => opp.category === selectedCategory);

  return (
    <div className="opportunities-page">
      <div className="page-header">
        <div className="header-content">
          <h1 className="main-title">
            <span className="title-accent">✨</span>
            Heartwarming Opportunities
            <span className="title-accent">✨</span>
          </h1>
          <p className="intro-text">
            Discover meaningful ways to share your love, kindness, and make a lasting impact in your community
          </p>
        </div>
        <div className="floating-elements">
          <div className="float-element heart">💖</div>
          <div className="float-element star">⭐</div>
          <div className="float-element flower">🌺</div>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="opportunity-grid">
        {filteredOpportunities.map((item, index) => (
          <div 
            className={`opportunity-card ${item.gradient}`}
            key={index}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="card-glow"></div>
            <div className="opportunity-header">
              <div className="icon-container">
                <span className="icon">{item.icon}</span>
                <div className="icon-ripple"></div>
              </div>
              <div className="header-text">
                <span className="category-tag">{item.category}</span>
                <h2 className="opportunity-title">{item.title}</h2>
                <h3 className="project-name">{item.project}</h3>
              </div>
            </div>
            
            <p className="description">{item.description}</p>
            
            <div className="opportunity-details">
              <div className="detail-item">
                <span className="detail-icon">📅</span>
                <span className="detail-text">{item.date}</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">📍</span>
                <span className="detail-text">{item.location}</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">👥</span>
                <span className="detail-text">{item.spots} spots left</span>
              </div>
            </div>
            
            <div className="card-footer">
              <button className="join-btn">
                <span className="btn-text">Join with Love</span>
                <span className="btn-icon">💕</span>
                <div className="btn-ripple"></div>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cta-section">
        <div className="cta-content">
          <h2>Ready to Make a Difference?</h2>
          <p>Every act of kindness creates ripples of positive change</p>
          <button className="cta-button">
            <span>🌟</span>
            Start Your Journey
            <span>🌟</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpportunitiesPage;