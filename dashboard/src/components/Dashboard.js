import React from "react";
import "./Dashboard.css";

const user = {
  name: "Jane Doe",
  email: "jane@example.com",
  photo: "https://i.pravatar.cc/100?img=47",
  hours: 124,
  badges: ["🌱 Eco Hero", "📚 Knowledge Giver"],
  interests: ["Education", "Environment"],
  joinedOpportunities: [
    { title: "Tree Plantation", date: "2025-06-15" },
    { title: "Reading Buddy", date: "2025-06-21" },
  ],
};

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        {/* Hero Section */}
        <section className="user-overview">
          <div className="profile-card">
            <div className="profile-image-container">
              <img src={user.photo} alt="Profile" className="profile-pic" />
              <div className="status-indicator"></div>
            </div>
            <div className="user-info">
              <h1 className="user-name">{user.name}</h1>
              <p className="user-email">{user.email}</p>
              <div className="user-title">Volunteer Ambassador</div>
            </div>
          </div>
          
          <div className="stats-grid">
            <div className="stat-card hours">
              <div className="stat-icon">⏰</div>
              <div className="stat-number">{user.hours}</div>
              <div className="stat-label">Hours Volunteered</div>
            </div>
            <div className="stat-card badges">
              <div className="stat-icon">🏆</div>
              <div className="stat-number">{user.badges.length}</div>
              <div className="stat-label">Badges Earned</div>
            </div>
            <div className="stat-card interests">
              <div className="stat-icon">💡</div>
              <div className="stat-number">{user.interests.length}</div>
              <div className="stat-label">Active Interests</div>
            </div>
          </div>
        </section>

        <div className="content-grid">
          {/* Matched Opportunities */}
          <section className="card matches-card">
            <div className="card-header">
              <h3>🎯 Matched Opportunities</h3>
              <span className="card-subtitle">Perfect matches for you</span>
            </div>
            <div className="opportunities-list">
              {user.interests.includes("Education") && (
                <div className="opportunity-item education">
                  <div className="opportunity-icon">📚</div>
                  <div className="opportunity-content">
                    <h4>Local School Tutor</h4>
                    <p>Help students excel in their studies</p>
                    <span className="match-percentage">95% match</span>
                  </div>
                  <button className="apply-btn">Apply</button>
                </div>
              )}
              {user.interests.includes("Environment") && (
                <div className="opportunity-item environment">
                  <div className="opportunity-icon">🌳</div>
                  <div className="opportunity-content">
                    <h4>Community Garden Project</h4>
                    <p>Build sustainable green spaces</p>
                    <span className="match-percentage">88% match</span>
                  </div>
                  <button className="apply-btn">Apply</button>
                </div>
              )}
            </div>
          </section>

          {/* Joined Opportunities */}
          <section className="card joined-card">
            <div className="card-header">
              <h3>🤝 Your Commitments</h3>
              <span className="card-subtitle">Active volunteering roles</span>
            </div>
            <div className="joined-list">
              {user.joinedOpportunities.map((opp, idx) => (
                <div key={idx} className="joined-item">
                  <div className="joined-icon">✨</div>
                  <div className="joined-content">
                    <h4>{opp.title}</h4>
                    <p className="joined-date">Started: {new Date(opp.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</p>
                  </div>
                  <div className="status-badge active">Active</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Badges Section */}
        <section className="card badges-card">
          <div className="card-header">
            <h3>🏅 Achievement Badges</h3>
            <span className="card-subtitle">Your volunteer journey milestones</span>
          </div>
          <div className="badges-grid">
            {user.badges.map((badge, idx) => (
              <div key={idx} className="badge-item">
                <div className="badge-content">
                  <span className="badge-emoji">{badge.split(' ')[0]}</span>
                  <span className="badge-text">{badge.split(' ').slice(1).join(' ')}</span>
                </div>
                <div className="badge-shine"></div>
              </div>
            ))}
            {/* Placeholder for next badge */}
            <div className="badge-item next-badge">
              <div className="badge-content">
                <span className="badge-emoji">🎖️</span>
                <span className="badge-text">Time Master</span>
              </div>
              <div className="progress-ring">
                <div className="progress-fill" style={{transform: 'rotate(180deg)'}}></div>
              </div>
              <span className="badge-progress">76 hours to go</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;