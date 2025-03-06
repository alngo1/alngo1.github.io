import React from "react"
import slides from "./slides.js";
import { clsx } from "clsx"

export default function Carosel(){
    const [activeIndex, setActiveIndex] = React.useState(0);

    function slideRight(){
        setActiveIndex(prevActiveIndex => {
            return (activeIndex < slides.length-1) ? prevActiveIndex + 1 : 0;
        });
    }

    function slideLeft(){
        setActiveIndex(prevActiveIndex => {
            return (activeIndex > 0) ? prevActiveIndex - 1 : slides.length-1;
        });
    }

    const imageBlocks = slides.map((obj, index) => {
        return (
            <li key={index} className={clsx("slide", (index == activeIndex) && "active-slide")}>
                <img 
                    className="what-is-db-img" 
                    src={obj.img} 
                    alt="" 
                />
            </li>
        )
    });

    return(
        <div className="carosel">
            <ul>
                {imageBlocks}
            </ul>
            <button onClick={slideLeft} className="button-left">
                <span className="material-icons">
                    arrow_back_ios_new
                </span>
            </button>
            <button onClick={slideRight} className="button-right">
                <span className="material-icons">
                    arrow_forward_ios
                </span>
            </button>
            
        </div>
    )
}