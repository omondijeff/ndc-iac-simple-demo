import React from "react";
import logoImg from "/Users/jeff/Desktop/Dev/Tajilabs/ndc-iac-simple-demo/app/src/assets/img/community-logo.png";
import speakerImg from "/Users/jeff/Desktop/Dev/Tajilabs/ndc-iac-simple-demo/app/src/assets/img/speaker.jpg";

function App() {
  return (
    <div className="container">
      <header>
        <img src={logoImg} alt="Community Logo" />
        <h1>Welcome to the Nairobi DevOps Community</h1>
        <p className="subtitle">Join us for a Terra-rific time!</p>
        <p>Infrastructure as Code (IaC) Session - Terraform Demonstration</p>
      </header>
      <main>
        <section className="session-info">
          <h2>Session Details</h2>
          <ul>
            <li>Date: March 20, 2024</li>
            <li>Time: 10:00 AM - 12:00 PM</li>
            <li>Location: Nairobi, Kenya</li>
          </ul>
        </section>
        <section className="speaker-info">
          <h2>About the Speaker</h2>
          <div className="speaker">
            <img src={speakerImg} alt="Speaker" />
            <div className="speaker-details">
              <h3>Jeff</h3>
              <p className="position">DevOps Engineer</p>
              <p className="bio">
                While not a frontend wizard, Jeff enjoys sprinkling a bit of
                magic into UI design!
              </p>
            </div>
          </div>
        </section>
        <section className="description">
          <h2>Session Description</h2>
          <p>
            Get ready for a journey into the cloud! Join us for an inspiring
            session on Infrastructure as Code (IaC) using Terraform. Let's
            terraform the way we build and deploy applications together!
          </p>
        </section>
        <section className="registration">
          <h2>Registration</h2>
          <p>
            Secure your spot in the cloud castle! Registration is free. Don't
            miss out on this opportunity to level up your DevOps skills!
          </p>
          <button>Claim Your Cloud Throne</button>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Nairobi DevOps Community</p>
        {/* Social Handles */}
        <div className="social-handles">
          <a href="https://twitter.com/NairobiDevOps">Twitter</a>
          <a href="https://www.facebook.com/NairobiDevOps">Facebook</a>
          <a href="https://www.linkedin.com/company/nairobi-devops-community">
            LinkedIn
          </a>
          {/* Add more social handles as needed */}
        </div>
      </footer>
    </div>
  );
}

export default App;
