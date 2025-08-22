import React, { useState } from "react";
import Navbar from "../../components/user/Navbar";
import "../../style.css";
import Arrow from "../../assets/right-arrow.png";
import arrow from "../../assets/left-arrow.png";
import calf from "../../assets/calf.png";

function Train() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
        <div className="Homs">
            <div className="training_box">
            <div className="arrow">
                <a href="#" className="arrow_link">
                <img src={arrow} alt="left" />
                </a>
                <span className="arrow_link disabled">
                <img src={arrow} alt="left" />
                </span>
            </div>
            <div className="box_train">
                <h1>Lower Day</h1>
            </div>
            <div className="arrow">
                <a href="#" className="arrow_link">
                <img src={Arrow} alt="right" />
                </a>
                <span className="arrow_link disabled">
                <img src={Arrow} alt="right" />
                </span>
            </div>
            </div>
            <div className="cardd">
            <div className="card_container">
                <div className="card">
                <img src={calf} alt="exercise" />
                <div className="card_conten">
                    <h3>Push Up</h3>
                    <button className="btn" onClick={openModal}>
                    Detail
                    </button>
                </div>
                </div>
            </div>
            </div>

            <div className={`modal ${isModalOpen ? "show" : ""}`}>
            <div className="modal-content">
                <span className="close" onClick={closeModal}>
                ✕
                </span>
                <h2>Detail</h2>
                <img src={calf} alt="exercise" />
                <div className="modal-txt">
                <p>
                    <strong>Tutorial:</strong> Mpuss
                </p>
                </div>
            </div>
            </div>

            <div className="footer-setting">
            <footer className="footer2">
                <p></p>
            </footer>
            </div>
        </div>
    </>
  );
}

export default Train;
