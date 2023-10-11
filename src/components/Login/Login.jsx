import styled from 'styled-components';
import LoginForm from './Login-Form';
import ImagemGarota from '../../assets/Login-Garota.png'

import React from "react";

import {
    Titulo01,
    Subtitulo01,
    Subtitulo02,
    BotaoPrimario01,
    BotaoPrimario02,
    BotaoSecundario01,
    Paragrafo01,
  } from "../Comun/Comum.jsx";





const ApoioSection01 = styled.div`
  padding: 5% 2%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  position: relative;
`;

const Garota = styled.img`
    width: 350px;
    position: absolute;
    top: auto;
    right: 0;
    transform: translate(5%, -50%);
`;




function Login() {
    return (
        <div className="Login">
            <ApoioSection01 >
                <div style={{position:'relative'}}>
                    <Garota src={ImagemGarota} alt="Garota" />
                </div>
                <LoginForm style={{position:'relative'}} />
            </ApoioSection01>
        </div>
    );
}

export default Login;



