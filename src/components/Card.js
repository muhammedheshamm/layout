import React, {useState} from "react";
export default function Card(props) {

    let [items,func]=useState(props.itemsLeft)

    function handleClick(e){
        let span=e.target.nextSibling
        
        func(items+1);
        span.innerText='Thank you for that!'
        span.style.opacity='1'
        span.style.color='darkred'
        
        setTimeout(()=>{span.style.opacity='0'},2000)
    }

    return (
        <div className='card'>
            <div className='sold-out'>
                {items + " LIKES"}
            </div>   
            
            <img src={props.img} alt="Img"/>
            <h3 className='main-heading'>{props.mainheading}</h3>
            <p className='main-p'>{props.mainp}</p>
            <button onClick={handleClick}>APPRECIATE!</button>
            <span className="s-or-f" id="s-or-f"></span>
        </div>
    )
}
