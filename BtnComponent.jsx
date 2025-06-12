import React from "react";
// import "./style.css"


const BtnComponent = ({name, price, color, naam}) => {
//   console.log(props.name) // {name: "Apple", color: "red"}


    return (
        <div 
        style={{
            
            backgroundColor: color
        }}
        >
            <button className="btn">{name}</button>
            <p className="pp">Price is {price}</p>
            <p className="pp">my name is {naam}</p>

            {/* <button className="btn">click</button>
            <p>my name is balram</p> */}
        </div>
    )
    
}



export default BtnComponent;