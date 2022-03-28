import React from "react";
import ScrollService from ".././../../utilities/ScrollService";
import "./Profile.css";
import Typical from "react-typical";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
          
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="https://www.linkedin.com/in/godsheritage/">
                <i className="fa fa-linkedin" />
              </a>
              <a href="https://github.com/Godsheritage">
                <i className="fa fa-github" />
              </a>
              <a href="https://twitter.com/kyng_Herit">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M  <span><span className = 'selected-header-option'>'</span>Godsherit<span className = 'selected-header-option'>age.</span></span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1
               
              >
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev😎",
                    1000,
                    "Full Stack Developer!💻",
                    1000,
                    "MERN Stack Dev💻",
                    1000,
                    "Photographer 📸",
                    1000,
                    "UI / UX Designer 🖥",
                    1000,
                    "React Developer📱",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>
            <a href="Godsheritage's Resume.pdf" download="Godsheritage's Resume.pdf">
              <button className="btn highlighted-btn"> Get Resume </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
