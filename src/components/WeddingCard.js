import React, { useState } from "react";
import { motion } from "framer-motion";
import Countdown from "react-countdown";
import weddingImage from "./assets/b-g-image.png";
import "./WeddingCard.css";

const WeddingCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => setIsOpen(!isOpen);

  const renderCountdown = ({ days, hours, minutes, seconds }) => (
    <span>
      {days} Days {hours}:{minutes}:{seconds}
    </span>
  );

  const weddingDate = new Date("December 14, 2024 17:00:00");

  return (
    <div className="card-container">
      <motion.div
        className="card"
        animate={{ rotateY: isOpen ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onClick={toggleCard}
      >
        {/* Back Content */}
        {isOpen && (
          <motion.div className="card-back">
            <motion.div>
              <img
                src={weddingImage}
                alt="Wedding"
                className="background-image"
              />
            </motion.div>
            <h1 className="back-title">Join Us!</h1>
            <div className="event-info">
              <div className="event-item">
                <div>
                  <strong>Haldi</strong>
                  <p>13th December 2024 at 6:30 PM</p>
                </div>
              </div>
              <div className="event-item">
                <div>
                  <strong>Wedding</strong>
                  <p>14th December 2024 at 12:29 PM</p>
                </div>
              </div>
            </div>
            <motion.div className="map-container">
              <h3 className="map-title">
                <span className="map-icon">📍</span>Yash Palace, Yeola
              </h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d976754.1902229226!2d73.56762418732956!3d19.26477521941963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d18.474534!2d73.7964859!4m5!1s0x3bdc39e7f6980c27%3A0x3397ceb311ea1c6b!2syash%20palace%20yeola!3m2!1d20.0570229!2d74.4793791!5e1!3m2!1sen!2sin!4v1733589646806!5m2!1sen!2sin"
                width="700"
                height="550"
                className="map"
                allowfullscreen=""
                loading="lazy"
                title="Wedding Location Map"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </motion.div>
        )}

        {/* Timer Overlay */}
        {!isOpen && (
          <motion.div className="timer-overlay">
            <h2 className="timer">
              {<Countdown date={weddingDate} renderer={renderCountdown} />}
            </h2>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default WeddingCard;
