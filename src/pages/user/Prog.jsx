import React from 'react'
import "../../prog.css";
import calf from "../../assets/calf.png";

function Prog() {
  return (
    <main className="containerr">
      <div className="left_side">
        <img src={calf} alt="" />
        <h4 className="title">Push Up</h4>
        <div className="list">
          <a href="#" className="nav-item">
            <span>-</span>
          </a>
        </div>
      </div>
      <div className="right_side">
        <div className="data-box" id="" >
          <div className="box_ttl">
            <h4 className="number">1</h4>
            <h4 className="number_text">Pungli</h4>
          </div>
          <div className="imag">
            <img src={calf} />
          </div>
          <div className="text_warp">
            <p>Blawa</p>
            <p>Otot yang dilatih:</p>
            <div className="list_otot">
              <ul>
                <li>mnfaat</li>
              </ul>
            </div>
            <p>joijods</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Prog
