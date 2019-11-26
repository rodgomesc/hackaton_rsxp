import React from 'react';
import { StatusBar } from 'react-native';

import { Container, CardWrapper, CardRow } from './styles';
import Card from '../../components/Card';

export default function Home({ navigation }) {
  return (
    <Container>
      <CardWrapper>
        <CardRow>
          <Card onPress={() => navigation.navigate('EstudoDeCasoListScreen')} />
          <Card />
        </CardRow>
        <CardRow>
          <Card />
          <Card />
        </CardRow>
        <CardRow>
          <Card />
          <Card />
        </CardRow>
        <CardRow>
          <Card />
          <Card />
        </CardRow>
        <CardRow>
          <Card />
          <Card />
        </CardRow>
      </CardWrapper>
    </Container>
  );
}
