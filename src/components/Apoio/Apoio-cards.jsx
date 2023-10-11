import * as React from 'react';
import Card from 'react-bootstrap/Card';

import {
  Subtitulo02,
} from "../Comun/Comum.jsx";

function ActionAreaCard({ title, description, image, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card style={{ maxWidth: 345, height: "100%"}}>
        <Card.Img variant="top" src={image} />
        <Card.Body style={{display:"grid", gridTemplateRows: "40% 60%"}}>
          <Subtitulo02 style={{color:"#5d5a88"}}>{title}</Subtitulo02>
          <Card.Text style={{textAlign:"justify"}}>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
}

export default ActionAreaCard;