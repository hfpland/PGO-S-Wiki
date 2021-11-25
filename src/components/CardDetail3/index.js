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
            <h4>type : {data.type}</h4>
            <h4>power : {data.power}</h4>
            <h4>duration : {data.duration} ms</h4>
            <h4>Energy gained : {data.energy_delta} %</h4>
          </div>
        </>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
}