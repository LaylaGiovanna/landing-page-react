import React from "react";

//imports
import styles from './styles.css';

import Elipse from '../../components/Elipse';

import ebook from '../../image/ebook.png';

export default function Home(){
    return(
        <>
            <header className="container">
                <div className="elipse-container">
                    {/* esquerda */}
                    <div className="elipse-left">
                        <Elipse size={120} opacity={0.2} styles={'circle-left-one'}/>
                        <Elipse size={120} opacity={0.4} styles={'circle-left-two'}/>
                        <Elipse size={180} opacity={0.6} styles={'circle-left-three'}/>
                    </div>

                    {/* direita */}
                    <div className="elipse-right">
                        <Elipse size={120} opacity={0.2} styles={'circle-right-one'}/>
                        <Elipse size={120} opacity={0.5} styles={'circle-right-two'}/>
                        <Elipse size={180} opacity={0.6} styles={'circle-right-three'}/>
                        <Elipse size={180} opacity={0.98} styles={'circle-right-four'}/>
                    </div>
                </div>

                {/* INFOS E FORM */}
                <div className="information-container">
                    <div className="information-left">
                        <div className="information-text">
                            <h3>Descubra</h3>
                            <h1>
                                Transforme sua alimentação e <br/>
                                tenha mais qualidade de vida!
                            </h1>

                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                            </p>

                            <h4>
                                Não perca essa oportunidade de mudar seus hábitos 
                            </h4>

                            <p>
                                .There are many variations of passages of Lorem Ipsum available
                            </p>

                            <p>
                                .There are many variations of passages
                            </p>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content
                            </p>
                            <p>
                                .There are many variations of passages
                            </p>
                        </div>  {/* information-text */}
                        <div className="information-img">
                            <img src={ebook} alt="imagem de E-book"></img>
                        </div>
                        
                    </div>

                    <div className="information-right">
                        <form>
                            <div className="form-input">
                                <input type="text" className="form-input" id="firstName"></input>
                                <label htmlFor="firstName">Primeiro nome</label>
                            </div>
                        </form>
                    </div>
                </div>

            </header>
        </>
    )
}