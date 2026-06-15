import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Shield, Target, Zap, Trophy, Volume2, VolumeX, Play } from 'lucide-react';

const SlamboxLanding = () => {
  const audioRef = useRef(null); // Speaker/Voiceover
  const musicRef = useRef(null); // Background Music
  const [isNarrating, setIsNarrating] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  const handleEnterBunker = () => {
    // Start ONLY background music (looping, very subtle backdrop at 8%)
    if (musicRef.current) {
      musicRef.current.volume = 0.08;
      musicRef.current.play()
        .catch(err => {
          console.log('Music play error:', err);
        });
    }
    
    // Hide splash with fade
    setShowSplash(false);
  };

  const toggleNarration = () => {
    if (!isNarrating) {
      // Pause background music
      if (musicRef.current) {
        musicRef.current.pause();
      }
      
      // Start speech overdub at full volume
      if (audioRef.current) {
        audioRef.current.volume = 1.0;
        audioRef.current.play()
          .then(() => {
            setIsNarrating(true);
          })
          .catch(err => {
            console.log('Speech play error:', err);
            // Resume music if speech fails
            if (musicRef.current) {
              musicRef.current.play();
            }
          });
      }
    }
  };

  const handleSpeechEnd = () => {
    // Resume background music when speech ends
    if (musicRef.current) {
      musicRef.current.play();
    }
    setIsNarrating(false);
  };

  return (
    <div className="slambox-hud">
      {/* Splash Overlay */}
      {showSplash && (
        <div className="splash-overlay">
          <div className="splash-content">
            <img
              src="https://customer-assets.emergentagent.com/wingman/e3acf488-cd03-4dd4-ac4f-dd98f8681e9e/attachments/04a7e26a7b8946ecbe8dd0b5ddf76adc_c78bf1e69bf9f0429723f17cb51be9be0fa6d0a8356edbc2b6403d93c9a596e4.png"
              alt="Slambox - The Game Has Changed"
              className="splash-logo"
            />
            <h1 className="splash-title">SLAMBOX CHAMPIONSHIP</h1>
            <Button 
              className="splash-button"
              onClick={handleEnterBunker}
            >
              STRIKE TO ENTER THE BUNKER
            </Button>
          </div>
        </div>
      )}

      {/* Audio Elements */}
      {/* Background Music - Looping at 0.4 volume */}
      <audio 
        ref={musicRef} 
        src="https://customer-assets.emergentagent.com/wingman/e3acf488-cd03-4dd4-ac4f-dd98f8681e9e/attachments/7474ad00808c4319b5caf9ccb00cded5_slam-box%20banger.mp3"
        loop
      />
      
      {/* Speaker/Voiceover - No loop, full volume */}
      <audio 
        ref={audioRef} 
        src="https://customer-assets.emergentagent.com/wingman/e3acf488-cd03-4dd4-ac4f-dd98f8681e9e/attachments/daf8489b969f4a4ab139792d5e35986e_slambox_pitch_v2_1_corrected.mp3"
        onEnded={handleSpeechEnd}
      />

      {/* Header */}
      <header className="hud-header">
        <div className="header-container">
          <div className="logo-group">
            <img
              src="https://customer-assets.emergentagent.com/wingman/e3acf488-cd03-4dd4-ac4f-dd98f8681e9e/attachments/04a7e26a7b8946ecbe8dd0b5ddf76adc_c78bf1e69bf9f0429723f17cb51be9be0fa6d0a8356edbc2b6403d93c9a596e4.png"
              alt="Slambox - The Game Has Changed"
              className="header-logo"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-hud">
        <div className="hero-video-container">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-video-hud"
          >
            <source
              src="https://customer-assets.emergentagent.com/wingman/e3acf488-cd03-4dd4-ac4f-dd98f8681e9e/attachments/8589da14edcd4302ac9706581eb0b8b6_slambox_v7_authentic.mp4"
              type="video/mp4"
            />
          </video>
          <div className="hero-overlay-hud"></div>
        </div>
        <div className="hero-content-hud">
          <img
            src="https://customer-assets.emergentagent.com/wingman/e3acf488-cd03-4dd4-ac4f-dd98f8681e9e/attachments/04a7e26a7b8946ecbe8dd0b5ddf76adc_c78bf1e69bf9f0429723f17cb51be9be0fa6d0a8356edbc2b6403d93c9a596e4.png"
            alt="Slambox - The Game Has Changed"
            className="hero-logo-large"
          />
          <h1 className="hero-title-hud">
            THE NEXT EVOLUTION OF BASKETBALL
          </h1>
          <p className="hero-subtitle-hud">High-flying. Relentless. Revolutionary.</p>
          <div className="hero-buttons-hud">
            <Button 
              className={`btn-audio-red ${isNarrating ? 'narrating' : ''}`}
              onClick={toggleNarration}
              disabled={isNarrating}
            >
              {isNarrating ? <VolumeX size={20} /> : <Volume2 size={20} />}
              {isNarrating ? 'NARRATING...' : 'HEAR THE VISION'}
            </Button>
          </div>
        </div>
      </section>

      {/* Lead Section */}
      <section className="lead-hud">
        <div className="container-hud">
          <div className="lead-content-hud">
            <Shield className="icon-red" size={48} />
            <h2 className="section-title-hud">
              Welcome to <span className="text-red">Slambox</span>
            </h2>
            <p className="section-description-hud">
              Where racquetball court geometry meets the explosive power of professional basketball.
              A revolutionary sport engineered for maximum intensity, strategic brilliance, and aerial dominance.
            </p>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="rules-hud">
        <div className="graffiti-bg"></div>
        <div className="container-hud">
          <h2 className="section-title-hud text-center">
            Rules of <span className="text-blue">Gameplay</span>
          </h2>
          <div className="cards-grid">
            <div className="card-hud">
              <div className="card-icon-hud bg-red">
                <Target size={32} strokeWidth={2.5} />
              </div>
              <h3 className="card-title-hud">The Court</h3>
              <p className="card-description-hud">
                Enclosed racquetball court geometry creates a high-intensity arena.
                Every wall is in play. Every angle is strategic.
              </p>
            </div>

            <div className="card-hud">
              <div className="card-icon-hud bg-blue">
                <Trophy size={32} strokeWidth={2.5} />
              </div>
              <h3 className="card-title-hud">The Goal</h3>
              <p className="card-description-hud">
                An 8-foot professional rim permanently bolted to the back wall.
                Precision meets power at the ultimate target.
              </p>
            </div>

            <div className="card-hud">
              <div className="card-icon-hud bg-red">
                <Zap size={32} strokeWidth={2.5} />
              </div>
              <h3 className="card-title-hud">The Mechanics</h3>
              <p className="card-description-hud">
                Strategic bank shots off side walls. Mid-air alley-oops.
                Chess meets combat in every possession.
              </p>
            </div>

            <div className="card-hud">
              <div className="card-icon-hud bg-blue">
                <Shield size={32} strokeWidth={2.5} />
              </div>
              <h3 className="card-title-hud">The Action</h3>
              <p className="card-description-hud">
                High-flying dunks and relentless short-form intensity.
                Pure athletic dominance in every second.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Triumvirate Section */}
      <section className="triumvirate-hud">
        <div className="container-hud">
          <h2 className="section-title-hud text-center">
            The <span className="text-red">Triumvirate</span>
          </h2>
          <p className="section-subtitle-hud">Visionaries Engineering the Future of Sport</p>
          
          <div className="cards-grid">
            <div className="card-hud">
              <div className="member-avatar bg-red">A</div>
              <h3 className="card-title-hud">Anthony Hatchett</h3>
              <p className="member-role-hud">Strategy Architect</p>
              <p className="card-description-hud">
                The mastermind behind the tactical framework. Transforming raw athletic potential
                into codified competitive excellence.
              </p>
            </div>

            <div className="card-hud">
              <div className="member-avatar bg-blue">S</div>
              <h3 className="card-title-hud">Steven Campbell</h3>
              <p className="member-role-hud">Strategic Liaison</p>
              <p className="card-description-hud">
                Bridging vision and execution. Orchestrating partnerships and pathways
                to global recognition.
              </p>
            </div>

            <div className="card-hud">
              <div className="member-avatar bg-red">R</div>
              <h3 className="card-title-hud">Robert Boettcher</h3>
              <p className="member-role-hud">Creator & Innovator</p>
              <p className="card-description-hud">
                The architect of revolution. From concept to reality,
                engineering a sport for the next generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-hud">
        <div className="graffiti-bg"></div>
        <div className="container-hud">
          <div className="vision-content-hud">
            <Trophy className="icon-blue" size={56} />
            <h2 className="section-title-hud text-center">
              The <span className="text-blue">Vision</span>
            </h2>
            <p className="vision-lead-hud">
              Codifying the future of competitive sport.
            </p>
            <p className="section-description-hud">
              Slambox isn't just a game—it's a movement. We're building the blueprint
              for a future Olympic sport. A discipline that demands athletic excellence,
              strategic mastery, and unwavering mental fortitude.
            </p>
            <Button 
              className={`btn-audio-red large ${isNarrating ? 'narrating' : ''}`}
              onClick={toggleNarration}
              disabled={isNarrating}
            >
              {isNarrating ? <VolumeX size={24} /> : <Volume2 size={24} />}
              {isNarrating ? 'NARRATING...' : 'HEAR THE VISION'}
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-hud">
        <div className="container-hud">
          <div className="cta-content-hud">
            <img
              src="https://customer-assets.emergentagent.com/wingman/e3acf488-cd03-4dd4-ac4f-dd98f8681e9e/attachments/04a7e26a7b8946ecbe8dd0b5ddf76adc_c78bf1e69bf9f0429723f17cb51be9be0fa6d0a8356edbc2b6403d93c9a596e4.png"
              alt="The Game Has Changed"
              className="cta-logo-variant"
            />
            <h2 className="cta-title-hud">
              Ready to Enter The Arena?
            </h2>
            <p className="cta-subtitle-hud">
              Join the next evolution in sport.
            </p>
            <div className="cta-buttons-hud">
              <Button className="btn-primary-blue large">
                Enter the Bunker
              </Button>
              <Button className="btn-secondary-red large">
                LET'S GET IT IN
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-hud">
        <div className="container-hud">
          <div className="footer-content-hud">
            <div className="footer-logo-group">
              <img
                src="https://customer-assets.emergentagent.com/wingman/e3acf488-cd03-4dd4-ac4f-dd98f8681e9e/attachments/04a7e26a7b8946ecbe8dd0b5ddf76adc_c78bf1e69bf9f0429723f17cb51be9be0fa6d0a8356edbc2b6403d93c9a596e4.png"
                alt="Slambox - The Game Has Changed"
                className="footer-logo-hud"
              />
            </div>
            <p className="footer-tagline-hud">The Next Evolution of Basketball</p>
            <p className="footer-copyright-hud">
              © 2025 Slambox Championship. All rights reserved.
            </p>
          </div>
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
