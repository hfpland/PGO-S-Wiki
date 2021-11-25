import React from "react";

import "./index.css";

export default function index({ data, onClick }) {
  return (
    <div className="card3" onClick={onClick}>
      {data ? (
        <>
            <div ClassName="judul">
            <h1>{data.name}</h1>
            </div>
            
          <div ClassName="aaa">
            {}
            <img src={"https://cdn-2.tstatic.net/tribunnews/foto/bank/images/logo-pokemon-go_20160724_044613.jpg"} alt={data.name} />
          </div>
          <div className="card-info">
          <h3>Name : {data.pokemon_name}</h3>
            <h3>Form : {data.form}</h3>
            <h3>Attack : {data.base_attack}</h3>
            <h3>Defense : {data.base_defense}</h3>
            <h3>Stamina : {data.base_stamina}</h3>
          </div>
        </>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
}