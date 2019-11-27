import React from 'react';
import YouTube from 'react-native-youtube';

import {
  Container,
  VideoFooter,
  VideoFooterTitle,
  VideoFooterSubTitle,
} from './styles';

export default function VideoCard() {
  return (
    <Container>
      <YouTube
        apiKey="AIzaSyCHobmIRMrGgd5mdTpZaRFdhdGxZCZ-uSQ"
        videoId="AXUI6d8hZwA" // The YouTube video ID
        play // control playback of video with true/false
        fullscreen={false} // control whether the video should play in fullscreen or inline
        loop // control whether the video should loop when ended
        onReady={e => console.log({ isReady: true })}
        onChangeState={e => console.log({ status: e.state })}
        onChangeQuality={e => console.log({ quality: e.quality })}
        onError={e => console.log({ error: e.error })}
        style={{ alignSelf: 'stretch', height: 300 }}
      />
      <VideoFooter>
        <VideoFooterTitle> Ep01 - Entrevista Motivacional</VideoFooterTitle>
        <VideoFooterSubTitle>Diego Fernandes</VideoFooterSubTitle>
      </VideoFooter>
    </Container>
  );
}
