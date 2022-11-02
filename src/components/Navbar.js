import React from "react"
import { FaAlignJustify } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
export default function Navbar(){
    const [clicked , setClick]=React.useState(false)
    const [size , setSize] = React.useState(false)
    window.onresize=()=>{if(window.innerWidth<=600) setSize(true); else setSize(false)}
    function handleClick(){
        setClick((o)=>!o)
    }
    const style ={fontSize:'20px'}
    return(
        <nav>
            <h1>MUHAMMED <br/> HESHAM</h1>
            <ul id="le" style={{left: clicked? '0' : '100%'}}>
                <li>HOME</li>
                <li>GALLERY</li>
                <li>ABOUT</li>
            </ul>
            {(size||window.innerWidth<600)&&!clicked && <FaAlignJustify style={style} onClick={handleClick}/>}
            {((size||window.innerWidth<600))&&clicked&&<FaTimes onClick={handleClick} style={style}/>}
        </nav>
    )
}