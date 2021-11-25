import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";

// Components
import Card from "../components/Card";

export default function CMove() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://pokemon-go1.p.rapidapi.com/charged_moves.json",
          {
            headers: {
              "x-rapidapi-host": "pokemon-go1.p.rapidapi.com",
              "x-rapidapi-key":
                "0ad0e78e7dmsh7ac78f1399d8c56p1ed9efjsn1c9063a1643e",
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
      <div className="title">Charged Moves</div>
      <div class="agartidaktenggelam"></div> 
      {!data || isLoading ? (
        <p >Loading...</p>
      ) : (
        <div className="card-container">
          {data.map((item, index) => {
            return (
              <article key={index}>
                <Link to={`/cmovedetail/${index}`}>
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