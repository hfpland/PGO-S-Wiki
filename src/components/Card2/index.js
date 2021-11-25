import React from "react";

import "./index.css";

export default function index({ data, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      {data ? (
        <>
            <div ClassName="judul">
            <h1>{data.name}</h1>
            </div>
          <div ClassName="card-info">
            <h3>Name  : {data.pokemon_name}</h3>
            <h4>Form  : {data.form}</h4>
            </div>
        </>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
}