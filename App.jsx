

import React from "react";
import Tecnical from "./technical";
import Project from "./Project";

import './style.css';

function App(){

  return (
    <div className="resume">
        <div className="head">
        <h1>BALRAM</h1>
            <div>
              <img src="./src/assets/hydra.jpg" alt="ProfilePhoto"
               width="100px"
                height="100px"
                style={{
                  borderRadius:"50%"
                }}
                
                 />
            </div>
          <span>Haryana India | </span>
          <span>+91 8882181398 | </span>
          <span>balramrawatcbs@gmail.com | </span>
          <span>Linkdin | </span>
          <span>Github.</span>
        </div>

        <div className="carrer-object">
        <hr className="underline"/>
          <h2>CAREER OBJECT</h2>
          
          <p>Seking an entry level position to begin my career in a high level profession environment proficient in administrative task, data management, and record keeping. <strong>Strong technical skill in various computer appplication and software tools.</strong></p>
        </div>


    <Tecnical 
    language="c | java | javascript | sql | "
    frontend="html | css | javascript | Bootstrap"
    fremwork="React js"
    developertool="vsCode, Figma"
    control="Git | Github."
    color="red"
    />

    <Project
      Company="Amazon, Facebook, Spotify, Rapido Ride etc..." 
      Skills="HTML, CSS, JAVASCRIPT"
      frontend="HTML | CSS | JAVASCRIPT | BOOTSTRAP"
      library="REACT JS"
      internCompany="Mantornix Consulting service Pvt. Ltd."
      
    />


    </div>
  )

}

export default App;