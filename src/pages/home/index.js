import React from "react";

//imports
import styles from './styles.css';

import Elipse from "../../components/Elipse";

export default function Home(){
    return(
        <>
            <header className="container">
                <div className="elipse-container">
                    {/* esquerda */}
                    <div className="elipse-left">
                        <Elipse size={120} opacity={0.8} styles={'circle-left-one'}/>
                    </div>

                    {/* direita */}
                    <div className="elipse-right"></div>
                </div>

            </header>
        </>
    )
}