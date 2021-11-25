import React from "react";
import "./MainMenu.css";

export default function MainMenu({ data, onClick }) {
  return (
    <div className="carddd" href="Division" onClick={onClick}>
        <div className="atasan">Pokemon GO</div>
        <p className="lanjutan">Scuffed Wiki</p>
        <a href="MoveMenu" className="button">Move</a>
        <a href="Status" className="button">Pokemon</a>
        <a href="Profile" className="button">Profile</a>
        <div class="agartidaktenggelam"></div>  
    </div>
    
  );
}