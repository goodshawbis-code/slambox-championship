import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Shield, Target, Zap, Trophy, ChevronDown } from 'lucide-react';

const SlamboxLanding = () => {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    document.getElementById('lead-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="slambox-container">
      {/* Hero Section with Video Background */}
      <section className="hero-section">
        <div className="video-background">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
          >
            <source
              src="https://customer-assets.emergentagent.com/wingman/e3acf488-cd03-4dd4-ac4f-dd98f8681e9e/attachments/8589da14edcd4302ac9706581eb0b8b6_slambox_v7_authentic.mp4"
              type="video/mp4"
            />
          </video>
          <div className="video-overlay"></div>
        </div>

        <header className="site-header">
          <div className="header-content">
            <img
              src="https://static.prod-images.emergentagent.com/jobs/e3acf488-cd03-4dd4-ac4f-dd98f8681e9e/images/7350e834fb6d95194d53b5c0314939006a2ddf64940c9cc3c25b907dd1f35a1f.png"
              alt="Slambox Shield"
              className="logo-shield"
            />
            <h1 className="logo-text">SLAMBOX</h1>
          </div>
        </header>

        <div className="hero-content">
          <div className="hero-text-container">
            <h1 className="hero-title">
              <span className="title-line">THE NEXT</span>
              <span className="title-line gold-text">EVOLUTION</span>
              <span className="title-line">OF BASKETBALL</span>
            </h1>
            <p className="hero-subtitle">High-flying. Relentless. Revolutionary.</p>
            <Button
              onClick={scrollToContent}
              className="hero-cta"
              size="lg"
            >
              <ChevronDown className="bounce-icon" />
              <span>Discover The Game</span>
            </Button>
          </div>
        </div>
      </section>

      {/* The Lead Section */}
      <section id="lead-section" className="lead-section">
        <div className="section-container">
          <div className="lead-content fade-in-up">
            <Shield className="section-icon" size={64} />
            <h2 className="section-title">
              Welcome to <span className="gold-text">Slambox</span>
            </h2>
            <p className="lead-text">
              The Next Evolution of Basketball.
            </p>
            <p className="lead-description">
              Where racquetball court geometry meets the explosive power of professional basketball.
              A revolutionary sport engineered for maximum intensity, strategic brilliance, and aerial dominance.
            </p>
          </div>
        </div>
      </section>

      {/* The Rules Section */}
      <section className="rules-section">
        <div className="section-container">
          <h2 className="section-title fade-in-up">
            The <span className="gold-text">Mechanics</span>
          </h2>
          <div className="rules-grid">
            <div className="rule-card fade-in-up delay-1">
              <div className="rule-icon-wrapper">
                <Target size={40} />
              </div>
              <h3 className="rule-title">The Court</h3>
              <p className="rule-description">
                Enclosed racquetball court geometry creates a high-intensity arena.
                Every wall is in play. Every angle is strategic.
              </p>
            </div>

            <div className="rule-card fade-in-up delay-2">
              <div className="rule-icon-wrapper">
                <Trophy size={40} />
              </div>
              <h3 className="rule-title">The Goal</h3>
              <p className="rule-description">
                An 8-foot professional rim permanently bolted to the back wall.
                Precision meets power at the ultimate target.
              </p>
            </div>

            <div className="rule-card fade-in-up delay-3">
              <div className="rule-icon-wrapper">
                <Zap size={40} />
              </div>
              <h3 className="rule-title">The Mechanics</h3>
              <p className="rule-description">
                Strategic bank shots off side walls. Mid-air alley-oops.
                Chess meets combat in every possession.
              </p>
            </div>

            <div className="rule-card fade-in-up delay-4">
              <div className="rule-icon-wrapper">
                <Shield size={40} />
              </div>
              <h3 className="rule-title">The Action</h3>
              <p className="rule-description">
                High-flying dunks and relentless short-form intensity.
                Pure athletic dominance in every second.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Triumvirate Section */}
      <section className="triumvirate-section">
        <div className="section-container">
          <h2 className="section-title fade-in-up">
            The <span className="gold-text">Triumvirate</span>
          </h2>
          <p className="section-subtitle fade-in-up">
            Visionaries Engineering the Future of Sport
          </p>

          <div className="triumvirate-grid">
            <div className="triumvirate-card fade-in-up delay-1">
              <div className="card-header">
                <div className="member-initial">A</div>
              </div>
              <h3 className="member-name">Anthony Hatchett</h3>
              <p className="member-role">Strategy Architect</p>
              <p className="member-description">
                The mastermind behind the tactical framework. Transforming raw athletic potential
                into codified competitive excellence.
              </p>
            </div>

            <div className="triumvirate-card fade-in-up delay-2">
              <div className="card-header">
                <div className="member-initial">S</div>
              </div>
              <h3 className="member-name">Steven Campbell</h3>
              <p className="member-role">Strategic Liaison</p>
              <p className="member-description">
                Bridging vision and execution. Orchestrating partnerships and pathways
                to global recognition.
              </p>
            </div>

            <div className="triumvirate-card fade-in-up delay-3">
              <div className="card-header">
                <div className="member-initial">R</div>
              </div>
              <h3 className="member-name">Robert Boettcher</h3>
              <p className="member-role">Creator & Innovator</p>
              <p className="member-description">
                The architect of revolution. From concept to reality,
                engineering a sport for the next generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Vision Section */}
      <section className="vision-section">
        <div className="section-container">
          <div className="vision-content fade-in-up">
            <Trophy className="section-icon" size={64} />
            <h2 className="section-title">
              The <span className="gold-text">Vision</span>
            </h2>
            <p className="vision-text">
              Codifying the future of competitive sport.
            </p>
            <p className="vision-description">
              Slambox isn't just a game—it's a movement. We're building the blueprint
              for a future Olympic sport. A discipline that demands athletic excellence,
              strategic mastery, and unwavering mental fortitude.
            </p>
            <div className="vision-stats">
              <div className="stat-item">
                <div className="stat-number">8ft</div>
                <div className="stat-label">Professional Rim</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">360°</div>
                <div className="stat-label">Court Geometry</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">∞</div>
                <div className="stat-label">Possibilities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content fade-in-up">
          <h2 className="cta-title">
            Ready to Enter <span className="gold-text">The Arena?</span>
          </h2>
          <p className="cta-subtitle">
            Join the vanguard of the next evolution in sport.
          </p>
          <div className="cta-buttons">
            <Button className="cta-primary" size="lg">
              Enter the Bunker
            </Button>
            <Button className="cta-secondary" size="lg" variant="outline">
              Join the Vanguard
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img
              src="https://static.prod-images.emergentagent.com/jobs/e3acf488-cd03-4dd4-ac4f-dd98f8681e9e/images/7350e834fb6d95194d53b5c0314939006a2ddf64940c9cc3c25b907dd1f35a1f.png"
              alt="Slambox Shield"
              className="footer-shield"
            />
            <span className="footer-text">SLAMBOX</span>
          </div>
          <p className="footer-tagline">The Next Evolution of Basketball</p>
          <p className="footer-copyright">
            © 2025 Slambox. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <SlamboxLanding />
    </div>
  );
}

export default App;
