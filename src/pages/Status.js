import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

// Components
import Card2 from "../components/Card2";

export default function City() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://pokemon-go1.p.rapidapi.com/pokemon_stats.json",
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
      <h3 className="title">Pokemon stats</h3>
      {!data || isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="card-container">
          {data.map((item, index) => {
            return (
              <article key={index}>
                <Link to={`/statusdetail/${index}`}>
                  <Card2 data={item} key={index} />
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