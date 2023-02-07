import React from 'react';
import { Container, CardImg } from 'react-bootstrap';
import logo from '../images/logo.webp';

function Logo() {
  return (
    <Container
      style={ { height: '170px' } }
    >
      <CardImg
        style={ { objectFit: 'cover' } }
        height={ 170 }
        src={ logo }
      />
    </Container>
  );
}

export default Logo;
