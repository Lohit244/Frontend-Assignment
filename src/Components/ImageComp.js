import React from 'react'
function ImageComp(props) {
    const toggle = () =>{
        if(props.id === "circ"){
            props.func(1)
        }
        if(props.id === "rect"){
            props.func(2)
        }
        if(props.id === "squa"){
            props.func(3)
        }
        if(props.id === "tria"){
            props.func(4)
        }
    }
return(
    <div>
        <img src={props.src} alt={props.id} id={props.id} onClick={toggle}></img>
    </div>
    
)
}

export default ImageComp