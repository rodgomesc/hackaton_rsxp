import React, { useEffect, useState } from 'react';
import { StatusBar, Text } from 'react-native';
import playIcon from '../../assets/imgs/playicon.png';
import VideoCard from '../../components/VideoCard';

import {
  Container,
  InfoWrapper,
  InfoTitle,
  InfoDescription,
  InfoTextWrapper,
  List,
  ListItem,
  ListCounter,
  PlayIcon,
} from './styles';

import api from '../../services/api';
import { Thumbnail } from 'react-native-thumbnail-video';

export default function EstudoDeCasoList() {
  const [audios, setAudios] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/cases/${1}`);
      setAudios(response.data.audios);
    }
    fetchData();
  });

  return (
    <Container>
      <VideoCard />
      <InfoWrapper>
        <InfoTextWrapper>
          <InfoTitle>
            Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum
            dolor
          </InfoTitle>
          <InfoDescription>Description Here</InfoDescription>
        </InfoTextWrapper>

        <Thumbnail
          url="https://www.youtube.com/watch?v=lgj3D5-jJ74"
          showPlayIcon={false}
          style={{ width: 100, height: 104 }}
        />
      </InfoWrapper>
      {audios && (
        <List
          data={audios}
          renderItem={({ item, index }) => (
            <ListItem

            //id={item.id}
            //title={item.title}
            //selected={!!selected.get(item.id)}
            //onSelect={onSelect}
            >
              <ListCounter>{index + 1}</ListCounter>
              <Text>{item.title}</Text>
              <Text>0:00</Text>
              <PlayIcon source={playIcon} />
            </ListItem>
          )}
          keyExtractor={item => item.id}
          //extraData={selected}
        />
      )}
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
