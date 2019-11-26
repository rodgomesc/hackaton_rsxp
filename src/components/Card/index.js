import React from 'react';
import { Container, Overlay, HeaderText, FooterText } from './styles';
import cardImage from '../../assets/imgs/cardImage.png';

export default function Card({ ...rest }) {
  return (
    <Container {...rest}>
      <Overlay source={cardImage}>
        <HeaderText>header Text</HeaderText>
        <FooterText>footer Text</FooterText>
      </Overlay>
    </Container>
  );
}
