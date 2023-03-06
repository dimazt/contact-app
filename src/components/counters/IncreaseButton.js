import React from "react";

function IncreaseButton({increase}){
    return (
        <div>
            <button onClick={increase}>+ Increase</button>
        </div>
    )
}

export default IncreaseButton