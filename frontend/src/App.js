import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Shield, Target, Zap, Trophy, Layers, Award } from 'lucide-react';

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
          <div className="video-overlay-bunker"></div>
        </div>

        <header className="site-header">
          <div className="header-content">
            <img
              src="https://static.prod-images.emergentagent.com/jobs/e3acf488-cd03-4dd4-ac4f-dd98f8681e9e/images/7350e834fb6d95194d53b5c0314939006a2ddf64940c9cc3c25b907dd1f35a1f.png"
              alt="Slambox Shield"
              className="logo-shield"
            />
            <h1 className="logo-text-bunker">SLAMBOX</h1>
          </div>
        </header>

        <div className="hero-content">
          <div className="hero-text-container">
            <div className="bunker-badge">STRIKE 13.0</div>
            <h1 className="hero-title-bunker">
              <span className="title-line">WELCOME TO</span>
              <span className="title-line red-text">THE BUNKER</span>
              <span className="title-line-small">UNDERGROUND X-GAMES EVOLUTION</span>
            </h1>
            <p className="hero-subtitle-bunker">3 Walls. Infinite Angles. Pure Chaos.</p>
            <Button
              onClick={scrollToContent}
              className="hero-cta-bunker"
              size="lg"
            >
              <span>ENTER THE ARENA</span>
            </Button>
          </div>
        </div>
      </section>

      {/* The Lead Section */}
      <section id="lead-section" className="lead-section-bunker">
        <div className="section-container">
          <div className="lead-content fade-in-up">
            <Shield className="section-icon-red" size={64} />
            <h2 className="section-title-bunker">
              The <span className="red-text">Bunker</span> Revolution
            </h2>
            <p className="lead-text-bunker">
              Where Architecture Becomes Strategy.
            </p>
            <p className="lead-description-bunker">
              A 3-wall enclosed combat zone with an open rear-wall for cinematic 3D camera angles.
              Light hardwood geometry framed by a red hexagonal boundary. Black matte sponsor panels
              with red strike zones. Every surface teaches. Every angle counts.
            </p>
          </div>
        </div>
      </section>

      {/* The Bunker Mechanics Section */}
      <section className="mechanics-section-bunker">
        <div className="section-container">
          <h2 className="section-title-bunker fade-in-up">
            Bunker <span className="red-text">Mechanics</span>
          </h2>
          <p className="section-subtitle-bunker fade-in-up">
            Strike 13.0 Specifications
          </p>
          <div className="mechanics-grid-bunker">
            <div className="mechanic-card-bunker fade-in-up delay-1">
              <div className="mechanic-icon-wrapper-bunker">
                <Layers size={40} />
              </div>
              <h3 className="mechanic-title-bunker">The Bunker Layout</h3>
              <p className="mechanic-description-bunker">
                <strong>3-wall enclosed box</strong> with open rear-wall for 3D cinematic camera views.
                Maximum visibility. Maximum intensity. Zero escape.
              </p>
            </div>

            <div className="mechanic-card-bunker fade-in-up delay-2">
              <div className="mechanic-icon-wrapper-bunker">
                <Target size={40} />
              </div>
              <h3 className="mechanic-title-bunker">Hardwood Geometry</h3>
              <p className="mechanic-description-bunker">
                Light hardwood floor with <strong className="red-text">Red Hexagonal Boundary</strong> frame.
                Stark white walls. Clean lines. Brutal geometry.
              </p>
            </div>

            <div className="mechanic-card-bunker fade-in-up delay-3">
              <div className="mechanic-icon-wrapper-bunker">
                <Award size={40} />
              </div>
              <h3 className="mechanic-title-bunker">Sponsor Trick-Shot Targets</h3>
              <p className="mechanic-description-bunker">
                Vertical <strong>black side-wall panels with red stripes</strong> = Bonus Point Zones.
                Hit sponsor targets off the wall. Bank it. Own it.
              </p>
            </div>

            <div className="mechanic-card-bunker fade-in-up delay-4">
              <div className="mechanic-icon-wrapper-bunker">
                <Trophy size={40} />
              </div>
              <h3 className="mechanic-title-bunker">Self-Teaching Walls</h3>
              <p className="mechanic-description-bunker">
                Scoring rules painted on <strong>matte black frames</strong>:<br />
                <span className="scoring-rule">1pt Lay-ins</span> |
                <span className="scoring-rule">2pt Shots</span> |
                <span className="scoring-rule red-text">3pt DUNKS</span>
              </p>
            </div>

            <div className="mechanic-card-bunker fade-in-up delay-5">
              <div className="mechanic-icon-wrapper-bunker">
                <Zap size={40} />
              </div>
              <h3 className="mechanic-title-bunker">Underground Aesthetic</h3>
              <p className="mechanic-description-bunker">
                Stark white walls. Vibrant <strong className="red-text">red branding</strong>.
                Matte black sponsor frames. Pure X-Games energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scoring System Highlight */}
      <section className="scoring-section-bunker">
        <div className="section-container">
          <div className="scoring-content-bunker fade-in-up">
            <h2 className="section-title-bunker">
              The <span className="red-text">Scoring System</span>
            </h2>
            <div className="scoring-breakdown">
              <div className="score-item">
                <div className="score-number">1<span className="score-label">PT</span></div>
                <div className="score-description">Lay-ins</div>
              </div>
              <div className="score-divider"></div>
              <div className="score-item">
                <div className="score-number">2<span className="score-label">PT</span></div>
                <div className="score-description">Shots</div>
              </div>
              <div className="score-divider"></div>
              <div className="score-item score-item-highlight">
                <div className="score-number-red">3<span className="score-label">PT</span></div>
                <div className="score-description-red">DUNKS</div>
              </div>
            </div>
            <p className="scoring-tagline">
              Painted directly on the walls. <strong>The Bunker teaches itself.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* The Triumvirate Section */}
      <section className="triumvirate-section-bunker">
        <div className="section-container">
          <h2 className="section-title-bunker fade-in-up">
            The <span className="red-text">Triumvirate</span>
          </h2>
          <p className="section-subtitle-bunker fade-in-up">
            Engineering the Underground Revolution
          </p>

          <div className="triumvirate-grid-bunker">
            <div className="triumvirate-card-bunker fade-in-up delay-1">
              <div className="card-header">
                <div className="member-initial-bunker">A</div>
              </div>
              <h3 className="member-name-bunker">Anthony Hatchett</h3>
              <p className="member-role-bunker">Strategy Architect</p>
              <p className="member-description-bunker">
                The mastermind behind the tactical framework. Transforming raw athletic potential
                into codified competitive excellence.
              </p>
            </div>

            <div className="triumvirate-card-bunker fade-in-up delay-2">
              <div className="card-header">
                <div className="member-initial-bunker">S</div>
              </div>
              <h3 className="member-name-bunker">Steven Campbell</h3>
              <p className="member-role-bunker">Strategic Liaison</p>
              <p className="member-description-bunker">
                Bridging vision and execution. Orchestrating partnerships and pathways
                to global domination.
              </p>
            </div>

            <div className="triumvirate-card-bunker fade-in-up delay-3">
              <div className="card-header">
                <div className="member-initial-bunker">R</div>
              </div>
              <h3 className="member-name-bunker">Robert Boettcher</h3>
              <p className="member-role-bunker">Creator & Innovator</p>
              <p className="member-description-bunker">
                The architect of revolution. From underground concept to X-Games reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Vision Section */}
      <section className="vision-section-bunker">
        <div className="section-container">
          <div className="vision-content-bunker fade-in-up">
            <Trophy className="section-icon-red" size={64} />
            <h2 className="section-title-bunker">
              The <span className="red-text">Vision</span>
            </h2>
            <p className="vision-text-bunker">
              From Underground to Olympic Gold.
            </p>
            <p className="vision-description-bunker">
              Slambox isn't just a game—it's a cultural earthquake. We're building the blueprint
              for a future X-Games staple and Olympic sport. A discipline that demands raw power,
              geometric precision, and underground grit.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-bunker">
        <div className="cta-content-bunker fade-in-up">
          <h2 className="cta-title-bunker">
            Ready to <span className="red-text">Storm the Bunker?</span>
          </h2>
          <p className="cta-subtitle-bunker">
            Join the underground revolution. Strike 13.0 is live.
          </p>
          <div className="cta-buttons">
            <Button className="cta-primary-bunker" size="lg">
              ENTER THE BUNKER
            </Button>
            <Button className="cta-secondary-bunker" size="lg" variant="outline">
              JOIN THE VANGUARD
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer-bunker">
        <div className="footer-content">
          <div className="footer-logo">
            <img
              src="https://static.prod-images.emergentagent.com/jobs/e3acf488-cd03-4dd4-ac4f-dd98f8681e9e/images/7350e834fb6d95194d53b5c0314939006a2ddf64940c9cc3c25b907dd1f35a1f.png"
              alt="Slambox Shield"
              className="footer-shield"
            />
            <span className="footer-text-bunker">SLAMBOX</span>
          </div>
          <p className="footer-tagline-bunker">Strike 13.0 — The Bunker Revolution</p>
          <p className="footer-copyright">
            © 2025 Slambox. Underground X-Games Evolution.
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
