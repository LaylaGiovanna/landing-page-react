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
                                <input type="text" className="input" id="firstName"></input>
                                <label htmlFor="firstName" className="label-input">Primeiro nome</label>
                            </div>
                            
                            <div className="form-input">
                                <input type="text" className="input" id="lastName"></input>
                                <label htmlFor="lastName" className="label-input">Sobrenome</label>
                            </div>

                            <div className="form-input">
                                <input type="text" className="input" id="email"></input>
                                <label htmlFor="email" className="label-input">Email</label>
                            </div>

                            <div className="form-text">
                                <span>
                                    Inscreva-se para receber em primeira mão as melhores dicas e receitas saudáveis 
                                    que irão transformar sua alimentação e melhorar sua qualidade de vida.
                                </span>
                            </div>

                            {/* OPTION - serve para dizer que pode selecionar um ou outro, se não tiver, é possivel marcar os dois */}
                            <div className="form-enquete">
                                <input type="radio" id="formYes" name="option"></input>
                                <label htmlFor='formYes'>Sim, eu quero me escrever!</label>
                            </div>

                            <div className='form-enquete'>
                                <input type="radio" id='formNo' name='option'></input>
                                <label htmlFor='formNo'>Não, Estou bem obrigado!</label>
                            </div>

                            <button className="form-button">Download E-book</button>
                        </form>
                    </div>
                </div>

            </header>
        </>
    )
}