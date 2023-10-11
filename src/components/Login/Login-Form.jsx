import Form from "react-bootstrap/Form";
import styled from "styled-components";

const BotaoLogin = styled.button`
  color: #fff;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: DM Sans;
  font-size: clamp(0.625rem, 0.509rem + 0.617vw, 1.25rem);
  font-style: normal;
  font-weight: 700;
  border-radius: 9px;
  display: flex;
  padding: 2% 3%;
  align-items: center;
  gap: 8px;
  background-color: #238ca4;
  border: none;
  transition: all 0.2s ease-in-out;

  box-shadow: 0px 4px 61px 0px rgba(77, 71, 195, 0.4);

  width: 100%;
  justify-content: center;

  &:hover {
    color: #fff;
    background-color: #403e61;
  }
`;

import {
  Titulo01,
  Subtitulo01,
  Subtitulo02,
  BotaoPrimario01,
  BotaoPrimario02,
  BotaoSecundario01,
  Paragrafo01,
} from "../Comun/Comum.jsx";

function FormGroupExample() {
  return (
    <Form
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Subtitulo01 style={{ color: "#5d5a88", textAlign: "center" }}>
        Login
      </Subtitulo01>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control
          size="lg"
          type="email"
          placeholder="Enter email"
          style={{ background: "#F0EFFF", color: "#5d5a88" }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Control
          size="lg"
          type="password"
          placeholder="Password"
          style={{ background: "#F0EFFF", color: "#5d5a88" }}
        />
      </Form.Group>
      <BotaoLogin>
        Logar <i className="fas fa-arrow-right"></i>
      </BotaoLogin>
      <Paragrafo01 style={{ color: "#5d5a88", textAlign: "center", fontSize:"20px"}}>
        Ainda não possui uma conta? <br />
        Você pode <a href="">criar uma conta aqui!</a>
      </Paragrafo01>
    </Form>
  );
}

export default FormGroupExample;
