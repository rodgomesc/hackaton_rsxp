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
        <VideoCard
          showDetails={false}
          url="https://www.youtube.com/embed/1Ia29mi8rUI"
        />
      </VideoCardWrapper>
      <CardWrapperTitle>Casos de uso</CardWrapperTitle>

      {cardsData && (
        <CardWrapper>
          <CardRow>
            <Card
              cardImage={`https://sejadev.nyc3.digitaloceanspaces.com/images/shawee-img.jpg`}
              onPress={() =>
                navigation.navigate('EstudoDeCasoListScreen', { id: 1 })
              }
            />
            <Card
              cardImage={`https://sejadev.nyc3.digitaloceanspaces.com/images/hotmart-img.jpg`}
              onPress={() =>
                navigation.navigate('EstudoDeCasoListScreen', { id: 2 })
              }
            />
          </CardRow>
          <CardRow>
            <Card
              cardImage={`https://sejadev.nyc3.digitaloceanspaces.com/images/linkapi-img.jpg`}
              onPress={() =>
                navigation.navigate('EstudoDeCasoListScreen', { id: 3 })
              }
            />
            <Card
              cardImage={`https://sejadev.nyc3.digitaloceanspaces.com/images/zup-img.jpg`}
              onPress={() =>
                navigation.navigate('EstudoDeCasoListScreen', { id: 4 })
              }
            />
          </CardRow>
        </CardWrapper>
      )}
    </Container>
  );
}
