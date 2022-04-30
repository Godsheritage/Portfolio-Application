import React from "react";
import "./Profile.css";
import Typical from "react-typical";
// import {motion} from 'framer-motion'
import { motion } from "framer-motion/dist/es/index";
import ScrollService from ".././../../utilities/ScrollService";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <motion.div
          className="profile-details"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 4 }}
        >
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
              Hello, I'M{" "}
              <span>
                <span className="selected-header-option">'</span>Godsherit
                <span className="selected-header-option">age.</span>
              </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev😎",
                    5000,
                    "Full Stack Developer!💻",
                    1000,
                    "MERN Stack Dev💻",
                    1000,
                    "Photographer 📸",
                    1000,
                    "UI / UX Designer 🖥",
                    1000,
                    "Software Engineer💻",
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
            <a
              href="Godsheritage's Resume.pdf"
              download="Godsheritage's Resume.pdf"
            >
              <button className="btn highlighted-btn"> Get Resume </button>
            </a>
          </div>
        </motion.div>
        <motion.div
          className="profile-picture"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 4 }}
        >
          <div className="profile-picture-background"></div>
        </motion.div>
      </div>
    </div>
  );
};
export default Profile;
