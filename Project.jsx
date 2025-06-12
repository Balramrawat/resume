import React from "react";
import Tecnical from "./technical";

function Project({Company, Skills, library, frontend, internCompany}){

    return(
        <div>
            <hr className="underline"/>
            <h2>PROJECT</h2>
            
            <ul>
                <li><strong>Assignment Tool</strong> 
                    <p>{Company} and deiffrent web clone with help of {Skills} and provide a clear overview of the user performance.</p>
                </li>

                <li><strong>Portfolio Website</strong>
                    <p> my potfolio show case a collection of project developer with help of <strong>{frontend} and {library}</strong> . Each other project highlight my proficient in front end developer , demostrative my ability to creat response , intractive and visually appealing web application..</p>
                </li>
            </ul>
            

            <div className="internship">
                <hr className="underline"/>
                <h2>INTERNSHIP & EXPERIENCE</h2>
                <h4>{internCompany}</h4>
                <ul>
                    <li><strong>Front-End Developer</strong>
                    <p>Frontend Developer  building responsive and interactive web applications using React.js, JavaScript, HTML5, and CSS3. Passionate about creating seamless user experiences with modern UI/UX practices. Strong problem-solving skills and a keen eye for detail.front end developer , demostrative my ability to creat response , intractive and visually appealing web application..</p>
                    </li>
                </ul>
            </div>


            <div className="education"
            style={{
                backgroundColor:"", color:"black", marginRight:"20px"
                
            }}
            >
                <hr className="underline"/>
                <h2>EDUCATION</h2>
                <h4>Haryana Board Of School Education (Bhiwani)</h4>
                <ul>
                    <li>10<sup>th</sup> Passed in 2016 from HBSE.<span className="cgpa"><strong>CGPA:- 7.2</strong></span></li>
                    <li>12<sup>th</sup> Passed in 2021 from HBSE.<span className="cgpa"><strong>CGPA:- 6.9</strong></span></li>
                </ul>
                <h4>Maharshi dayanand University Rohtak (Haryana, india) </h4>
                <ul>
                    <li>Pursuing <strong>B.Tech</strong> in Computer Science and Engineering. 
                        <span className="btech-cgpa"><strong>(Jul'2021 - Oct'2025)</strong></span>
                    </li>
                </ul>
                <hr className="underline" style={{backgroundColor:"red"}}/>
            </div>
            <br /><br />

        </div>
    )

}

export default Project;


