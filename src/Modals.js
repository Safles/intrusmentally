import React from "react";

function Modals({ visible }){
    if (!visible){
        return (null)
    }
    return(
        <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center">

        </div>
    )
}
export default Modals;