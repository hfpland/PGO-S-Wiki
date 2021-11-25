import React from "react";
import "./MoveMenu.css";

export default function MoveMenu({ data, onClick }) {
  return (
    <div className="carddd" href="Division" onClick={onClick}>
        <div className="atasan">Pokemon GO</div>
        <p className="lanjutan">Move Menu</p>
        <a href="FMove" className="button">Fast Move</a>
        <a href="CMove" className="button">Charged Move</a>
        <div class="agartidaktenggelam"></div>  
    </div>
    
  );
}