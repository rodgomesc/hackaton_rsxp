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
  Thumbnail,
} from './styles';

import api from '../../services/api';

export default function EstudoDeCasoList({ navigation }) {
  const [audios, setAudios] = useState();
  const [videoEmbed, setVideoEmbed] = useState();
  const [body, setBody] = useState();
  const [companyName, setCompanyName] = useState();
  const [author, setAuthor] = useState();
  const [coverUrl, setCoverUrl] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const identity = navigation.getParam('id');
        const response = await api.get(`/cases/${identity}`);

        setAudios(response.data.audios);
        setVideoEmbed(response.data.videoUrl);
        setBody(response.data.body);
        setCoverUrl(response.data.coverUrl);
        setCompanyName(response.data.company);
        setAuthor(response.data.author);
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
      {videoEmbed && <VideoCard url={videoEmbed} />}

      <InfoWrapper>
        <InfoTextWrapper>
          <InfoTitle>{body}</InfoTitle>
          {/* <InfoDescription>Description Here</InfoDescription> */}
        </InfoTextWrapper>

        <Thumbnail
          source={{
            uri: `https://sejadev.nyc3.digitaloceanspaces.com/${coverUrl}`,
          }}
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
