import React, { useEffect, useState } from 'react';
import { StatusBar, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import VideoCard from '../../components/VideoCard';
import SoundPlayer from 'react-native-sound-player';

import {
  Container,
  InfoWrapper,
  InfoTitle,
  InfoDescription,
  InfoTextWrapper,
  List,
  ListItem,
  ListCounter,
  ListContentTitle,
  ListContentDuration,
} from './styles';

import api from '../../services/api';

import { Thumbnail } from 'react-native-thumbnail-video';

export default function EstudoDeCasoList() {
  const [audios, setAudios] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/cases/${1}`);

        setAudios(response.data.audios);
        console.log(response.data.audios);
      } catch (error) {
        alert(error);
      }
    }
    fetchData();
  }, []);

  async function handleSoundPlay(pressedItemId, audioUrl) {
    const setFalseAll = await audios.map(item => ({
      ...item,
      playing: null,
    }));
    setAudios(setFalseAll);

    const currentPlayingStatus = await audios.map(item =>
      item.id === pressedItemId ? { ...item, playing: true } : item
    );
    setAudios(currentPlayingStatus);

    try {
      SoundPlayer.playUrl(
        `https://sejadev.nyc3.digitaloceanspaces.com/${audioUrl}`
      );
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }
  }

  async function getInfoSound() {
    // You need the keyword `async`
    try {
      const info = await SoundPlayer.getInfo(); // Also, you need to await this because it is async
      console.log('getInfo', info); // {duration: 12.416, currentTime: 7.691}
    } catch (e) {
      console.log('There is no song playing', e);
    }
  }

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
              <ListContentTitle>{item.title}</ListContentTitle>
              <ListContentDuration>0:00</ListContentDuration>
              {item.playing ? (
                <Icon
                  name="pause-circle"
                  size={30}
                  color="#fff"
                  onPress={() => handleSoundPlay(item.id, item.audioUrl)}
                />
              ) : (
                <Icon
                  name="play-circle"
                  size={30}
                  color="#fff"
                  onPress={() => handleSoundPlay(item.id, item.audioUrl)}
                />
              )}
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
