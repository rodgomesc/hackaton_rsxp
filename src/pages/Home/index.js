import React from 'react';
import { Text, ScrollView } from 'react-native';

import { Container, CardWrapper, CardRow } from './styles';
import Card from '../../components/Card';

export default function Home() {
  return (
    <Container>
      <CardWrapper>
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
        <CardRow>
          <Card />
          <Card />
        </CardRow>
      </CardWrapper>
    </Container>
  );
}
