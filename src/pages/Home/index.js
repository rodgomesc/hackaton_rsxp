import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import api from '../../services/api';
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
  const [cardsData, setCardsData] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/cases');
        console.log(response.data[0]);
        setCardsData(response.data);
      } catch (error) {
        alert(error);
      }
    }
    fetchData();
  }, []);
  return (
    <Container>
      <VideoCardWrapper>
        <VideoCard showDetails={false} />
      </VideoCardWrapper>
      <CardWrapperTitle>Outros casos de uso</CardWrapperTitle>

      {cardsData && (
        <CardWrapper>
          <CardRow>
            <Card
              cardImage={`https://sejadev.nyc3.digitaloceanspaces.com/images/shawee-img.jpg`}
              onPress={() => navigation.navigate('EstudoDeCasoListScreen')}
            />
            <Card
              cardImage={`https://sejadev.nyc3.digitaloceanspaces.com/images/hotmart-img.jpg"`}
              onPress={() => navigation.navigate('EstudoDeCasoListScreen')}
            />
          </CardRow>
        </CardWrapper>
      )}
    </Container>
  );
}
