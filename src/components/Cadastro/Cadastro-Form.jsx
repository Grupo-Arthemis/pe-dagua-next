import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function FormPezin() {
  const [validated, setValidated] = useState(false);
  const nomeRef = useRef(null);
  const emailRef = useRef(null);
  const cepRef = useRef(null);
  const senhaRef = useRef(null);
  const cpfRef = useRef(null);

  async function postApi() {
    const newData = {
      CEP: cepRef.current.value,
      CPF: cpfRef.current.value,
      Email: emailRef.current.value,
      Nome: nomeRef.current.value,
      Senha: senhaRef.current.value
    };

    // Faça uma solicitação GET para buscar o JSON existente
    const existingResponse = await fetch('https://pe-dagua-47d38-default-rtdb.firebaseio.com/DadosClientes.json');
    const existingData = await existingResponse.json();

    // Verifique se o JSON existe e é um objeto
    if (existingData && typeof existingData === 'object') {
      
      for(let i = 0; i < existingData.Nome.length; i++){
        if(existingData.Email[i] == emailRef.current.value || existingData.CPF[i] == cpfRef.current.value){
            console.log("Email na base: " + existingData.Email[i]);
            console.log("Email no site: " + emailRef.current.value);
            return;
        }
    }

      for (const key in newData) {
        if (newData.hasOwnProperty(key)) {
          if (!existingData[key]) {
            existingData[key] = [];
          }
          existingData[key].push(newData[key]);
        }
      }

      // Faça uma solicitação PATCH para atualizar o JSON com os novos valores
      const response = await fetch('https://pe-dagua-47d38-default-rtdb.firebaseio.com/DadosClientes.json', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(existingData)
      });

      if (response.ok) {
        console.log('Dados adicionados com sucesso');
      } else {
        console.error('Erro ao adicionar dados:', response.statusText);
      }
    } else {
      console.error('JSON existente não é válido');
    }
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    } else {
        postApi();
        event.preventDefault();
        setTimeout(() => {
            window.location.reload();
        }, 2000);

    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} style={{width: "90%", margin: "40px auto"}}>
      <Row className="mb-3">
        <Form.Group as={Col} md="5" controlId="validationCustom01">
          <Form.Control
          size="lg"
          type="Nome"
          placeholder="Nome"
          style={{ background: "#F0EFFF", color: "#5d5a88" }}
          onChange={(element) => setEmail(element.target.value)}
          required
        />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="7" controlId="validationCustom02">
          <Form.Control
            size="lg"
            type="text"
            placeholder="Email"
            ref={emailRef}
            onChange={(element) => setEmail(element.target.value)}
            style={{ background: "#F0EFFF", color: "#5d5a88" }}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="7" controlId="validationCustom02">
          <Form.Control
            size="lg"
            required
            type="number"
            placeholder="Telefone"
            ref={cepRef}
            style={{ background: "#F0EFFF", color: "#5d5a88" }}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="5" controlId="validationCustom02">
          <Form.Control
            size="lg"
            required
            type="text"
            placeholder="Senha"
            ref={senhaRef}
            style={{ background: "#F0EFFF", color: "#5d5a88" }}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Control
            size="lg"
            required
            type="text"
            placeholder="CEP favorito 1"
            ref={cepRef}
            style={{ background: "#F0EFFF", color: "#5d5a88" }}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Control
            size="lg"
            required
            type="text"
            placeholder="CEP favorito 2"
            ref={cepRef}
            style={{ background: "#F0EFFF", color: "#5d5a88" }}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button style={{width:"60%"}} type='submit' variant="success">Post</Button>{' '}
    </Form>
  );
}

export default FormPezin;