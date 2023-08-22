import React from "react";

//imports
import styles from './styles.css'

export default function Elipse({size, opacity, styles}){

    //objeto de estilo
    const circleStyle = {
        width: `${size}px`,
        height: `${size}px`,
        opacity: opacity,
    }

    return(
        <div style={circleStyle} className={`circle ${styles}`}></div>
    );
}