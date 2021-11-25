import React, { useEffect, useState } from "react";
// import { useParams, useHistory } from "react-router-dom";
import { useParams} from "react-router-dom";
import axios from "axios";
import "./style.css";

import CardDetail from "../components/CardDetail3";

export default function FMoveDetail(){
    const { index } = useParams();
    const [indexused] = useState(index) ;
    // return <h1>{indexused}</h1>
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
        {!data || isLoading ? (
            <p>Loading...</p>
        ) : (
            <div className="card-container">
                {data.map((item, index) => {
                    return (
                        <>
                        { index==indexused ?(
                            <CardDetail data={item} key={index} />
                        ) : (
                            <p></p>
                        )
                }</>
                    );
                })}
            </div>
        )}
        <p class="agartidaktenggelam"></p>
        </main>
        
    );
}