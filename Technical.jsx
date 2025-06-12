import React from "react";

function Tecnical({language, frontend, fremwork, developertool, control}){
    console.log(language,frontend,fremwork,developertool,control)


    return(
        <div>
            <hr className="underline"/>
            <h1>Technical Skills</h1>
            <p><strong>Langauge:- </strong>{language}</p>
            <p><strong>Frontend :-</strong> {frontend}</p>
            <p><strong>Fremwork :-</strong> {fremwork}</p>
            <p><strong>Developer Tools :- </strong>{developertool}</p>
            <p><strong>Controls:- </strong>{control}</p>

        </div>
    )


}

export default Tecnical;