import React, { useState } from "react";
import "./ImpactPage.css";

function ImpactPage() {
  const [stories, setStories] = useState([
    {
      name: "Anushka R.",
      quote:
        "Planting trees in our local park gave me peace and purpose. Every seedling I planted felt like hope growing in the earth.",
      photo: "https://i.pravatar.cc/100?img=21",
      category: "Environment"
    },
    {
      name: "Tharindu M.",
      quote:
        "Cooking meals for elderly neighbors taught me how powerful a small act of love can be. Their smiles are my greatest reward.",
      photo: "https://i.pravatar.cc/100?img=32",
      category: "Community Care"
    },
    {
      name: "Rashini S.",
      quote:
        "Teaching children to read opened my heart to the magic of learning. Watching their faces light up when they understand is priceless.",
      photo: "https://i.pravatar.cc/100?img=45",
      category: "Education"
    }
  ]);

  const [form, setForm] = useState({
    name: "",
    quote: "",
    photo: "",
    category: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.quote) {
      setStories((prev) => [...prev, { ...form, category: form.category || "General" }]);
      setForm({ name: "", quote: "", photo: "", category: "" });
    }
  };

  const stats = [
    { 
      label: "Total Hours Volunteered", 
      value: "12,400+",
      icon: "⏰",
      color: "lavender"
    },
    { 
      label: "Families Helped", 
      value: "3,200+",
      icon: "👨‍👩‍👧‍👦",
      color: "mint"
    },
    { 
      label: "Green Spaces Created", 
      value: "87",
      icon: "🌱",
      color: "peach"
    },
    { 
      label: "Smiles Shared", 
      value: "∞",
      icon: "😊",
      color: "sky"
    }
  ];

  const categories = ["Environment", "Community Care", "Education", "Health", "Arts & Culture", "General"];

  return (
    <div className="impact-page">
      {/* Floating background elements */}
      <div className="floating-elements">
        <div className="float-element float-1">💝</div>
        <div className="float-element float-2">🌸</div>
        <div className="float-element float-3">✨</div>
        <div className="float-element float-4">🦋</div>
        <div className="float-element float-5">🌿</div>
      </div>

      <section className="impact-hero">
        <div className="hero-content">
          <h1>Impact That Matters</h1>
          <p>
            Every act of kindness creates ripples of change that touch hearts and transform lives. 
            Together, we're painting the world with love, one story at a time.
          </p>
          <div className="hero-decoration">
            <span className="sparkle">✨</span>
            <span className="heart">💕</span>
            <span className="sparkle">✨</span>
          </div>
        </div>
      </section>

      <section className="impact-stats">
        <div className="stats-container">
          <h2 className="stats-title">Our Journey of Love</h2>
          <div className="stats-grid">
            {stats.map((item, index) => (
              <div className={`stat-box ${item.color}`} key={index}>
                <div className="stat-icon">{item.icon}</div>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
                <div className="stat-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="submit-section">
        <div className="submit-container">
          <div className="submit-header">
            <h2>Share Your Beautiful Story</h2>
            <p>Your journey of kindness inspires others to spread love. Tell us how volunteering has touched your heart.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="story-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your beautiful name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="category-select"
              >
                <option value="">Choose your impact area</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <textarea
                name="quote"
                placeholder="Share your heartwarming story of impact..."
                value={form.quote}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="url"
                name="photo"
                placeholder="Your photo URL (optional)"
                value={form.photo}
                onChange={handleChange}
              />
            </div>
            
            <button type="submit" className="submit-btn">
              <span>Share My Story</span>
              <div className="btn-sparkle">✨</div>
            </button>
          </form>
        </div>
      </section>

      <section className="impact-stories">
        <div className="stories-container">
          <h2>Hearts Touched by Love</h2>
          <p className="stories-subtitle">Real stories from real people making a real difference</p>
          
          <div className="stories-grid">
            {stories.map((story, index) => (
              <div className="story-card" key={index}>
                <div className="card-header">
                  <img
                    src={story.photo || "https://i.pravatar.cc/100?img=11"}
                    alt={story.name}
                    className="story-avatar"
                  />
                  <div className="story-info">
                    <h4>{story.name}</h4>
                    <span className="story-category">{story.category}</span>
                  </div>
                </div>
                <div className="quote-container">
                  <div className="quote-mark">"</div>
                  <p className="quote">{story.quote}</p>
                </div>
                <div className="card-footer">
                  <div className="love-indicator">💕</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ImpactPage;