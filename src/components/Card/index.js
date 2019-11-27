import React from 'react';
import { Container, Overlay, HeaderText, FooterText } from './styles';

export default function Card({ cardImage, ...rest }) {
  console.log;
  return (
    <Container {...rest}>
      <Overlay source={{ uri: cardImage }}></Overlay>
    </Container>
  );
}
