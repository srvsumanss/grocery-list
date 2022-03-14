import React from "react";
const Grocery = (prop)=>{
    return (
        <div>
            <li>{prop.list}</li>
            <button onClick={()=>{
                prop.onSelect(prop.id)
            }}>Delete</button>
        </div>
    )
}

export default Grocery ;