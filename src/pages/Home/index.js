import React from 'react';
import { StatusBar } from 'react-native';

import {
  Container,
  CardWrapper,
  CardRow,
  VideoCardWrapper,
  CardWrapperTitle,
} from './styles';
import Card from '../../components/Card';
import VideoCard from '../../components/VideoCard';

export default function Home({ navigation }) {
  return (
    <Container>
      <VideoCardWrapper>
        <VideoCard showDetails={false} />
      </VideoCardWrapper>
      <CardWrapperTitle>Outros casos de uso</CardWrapperTitle>
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
