import React, { useEffect, useState } from "react";
import "./UserProfile.css";

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulated fetched user data
    const fetchedUser = {
      name: "Jane Doe",
      email: "jane@example.com",
      photo: "https://i.pravatar.cc/150?img=32",
      hours: 120,
      joinedOpportunities: ["🌳 Tree Plantation", "🍱 Food Drive", "📚 Book Donation"],
      interests: ["Environment", "Education", "Community"],
      badges: ["🌱 Eco Hero", "🎓 Literacy Leader", "💖 Compassion Star"],
    };
    setUser(fetchedUser);
  }, []);

  if (!user) return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading your amazing profile...</p>
    </div>
  );

  return (
    <div className="user-profile">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-photo-container">
            <img src={user.photo} alt="User" className="profile-photo" />
            <div className="photo-ring"></div>
          </div>
          <div className="profile-info">
            <h2 className="profile-name">{user.name}</h2>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>

        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number">{user.hours}</div>
            <div className="stat-label">Volunteer Hours</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{user.joinedOpportunities.length}</div>
            <div className="stat-label">Opportunities</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{user.badges.length}</div>
            <div className="stat-label">Badges Earned</div>
          </div>
        </div>

        <div className="profile-section">
          <h3 className="section-title">🤝 Joined Opportunities</h3>
          <div className="opportunities-grid">
            {user.joinedOpportunities.map((op, i) => (
              <div key={i} className="opportunity-tag">{op}</div>
            ))}
          </div>
        </div>

        <div className="profile-section">
          <h3 className="section-title">💡 Interests</h3>
          <div className="interests-container">
            {user.interests.map((interest, i) => (
              <span key={i} className="interest-chip">{interest}</span>
            ))}
          </div>
        </div>

        <div className="profile-section">
          <h3 className="section-title">🏆 Achievement Badges</h3>
          <div className="badges-container">
            {user.badges.map((badge, i) => (
              <div key={i} className="badge-item">
                <div className="badge-content">{badge}</div>
              </div>
            ))}
          </div>
        </div>

        <button className="edit-button">
          <span className="button-icon">✨</span>
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default UserProfile;