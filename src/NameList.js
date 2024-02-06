import React from "react";

function NameList(){

    const namelist = ["Peter" , "Micheal" , "Alex" , "Ruby"]

    return(
        <div>
        <h1>Array of name</h1>
        {
        namelist.map((item) =>
        <ul><li>{item}</li></ul>
        )
    }

    </div>
    )
}

export default NameList ;