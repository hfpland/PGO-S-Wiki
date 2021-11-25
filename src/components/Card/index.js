import React from "react";

import "./index.css";

export default function index({ data, onClick }) {
  return (
    <>

    <div className="card" onClick={onClick}>
      
      {data ? (
        <>
            
            
            <div ClassName="card-info">
            <h1>{data.name}</h1>

            <h4>type  : {data.type}</h4>
            </div>
          
        </>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
    </>
  );
}