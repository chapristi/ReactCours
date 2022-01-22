import React, { useState } from 'react';
import "./PopuUp.css"


const PopUp = ()=>{
    const [showPopup,setShowPopup] = useState(false)

    return(
        <div className="body">
        <button className={`${showPopup ? 'green' : "red" }`}
                onClick={()=>{
            if (!showPopup){
                setShowPopup(true)
                console.log(showPopup)
                //document.body.style.filter= "blur(1px)"
            }else {
                setShowPopup(false)
                //document.body.style.filter= "blur(0px)"
            }
        }}>show</button>
            {showPopup &&
            <div style={{ display:"block",zIndex : "1000000000" ,backgroundColor : "red",width : "250px",height:"250px",
               }}>
                <h1>inscription</h1>
                <form action="">
                    <div>
                        <input type="text"/>
                    </div>
                    <div>
                        <button type="submit">send </button>
                    </div>
                </form>

            </div>}
        </div>
    )
}
export default PopUp;