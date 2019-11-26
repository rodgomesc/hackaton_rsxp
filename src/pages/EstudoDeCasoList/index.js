import React from 'react';
import { StatusBar, Text } from 'react-native';
import VideoCard from '../../components/VideoCard';
import { Container } from './styles';

export default function EstudoDeCasoList() {
  return (
    <Container>
      <VideoCard />
    </Container>
  );
}

EstudoDeCasoList.navigationOptions = {
  title: 'ESTUDO DE CASO',
  headerStyle: {
    height: StatusBar.currentHeight + 52,
    paddingTop: 30,
    backgroundColor: '#333',
  },
};
