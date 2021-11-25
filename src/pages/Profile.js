import React from "react";
import "./MainMenu.css";
import "./Profile.css";
import { FaGitAlt } from "react-icons/fa";

export default function Profile({ data, onClick }) {
  return (
    <>
      <p class="agartidaktenggelam"></p>
      <p class="title">Profile</p>
      <div className="card4" >
          
            <div ClassName="card-info">
            <h3>Haickal Fattih Pratama
            </h3>
            <div className="tempatfoto1">
            <img className="tempatfoto" src={"https://avatars.githubusercontent.com/u/57544938?v=4"}  />
            </div>
            <h3>Tugas Akhir Praktikum
            </h3>
            <h3>Mobile Device Programming 
            </h3>
            <h3>2021
            </h3>
            </div>
            <a href="https://github.com/hfpland/" className>
            <h3><FaGitAlt/> </h3>
          </a>
            </div>
      
    </>
  );
}