import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";

// Components
import Card from "../components/Card3";

export default function FMove() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://pokemon-go1.p.rapidapi.com/fast_moves.json",
          {
            headers: {
              "x-rapidapi-host": "pokemon-go1.p.rapidapi.com",
              "x-rapidapi-key":
                "c0e74beb49msh5fb9f73548dbcb7p17dc83jsnc4cf606b221d",
            },
          }
        );
        if (response.status === 200) {
          setData(response.data);
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
          <div class="agartidaktenggelam"></div> 
      <div className="title">Fast Moves</div>
      <div class="agartidaktenggelam"></div> 
      {!data || isLoading ? (
        <p >Loading...</p>
      ) : (
        <div className="card-container">
          {data.map((item, index) => {
            return (
              <article key={index}>
                <Link to={`/fmovedetail/${index}`}>
                  <Card data={item} key={index} />
                </Link>
              </article>
            );
          })}
        </div>
      )}
      <p class="agartidaktenggelam"></p>
    </main>
  );
}