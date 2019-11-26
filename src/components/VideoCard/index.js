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
        videoId="AXUI6d8hZwA" // The YouTube video ID
        play // control playback of video with true/false
        fullscreen // control whether the video should play in fullscreen or inline
        loop // control whether the video should loop when ended
        onReady={e => this.setState({ isReady: true })}
        onChangeState={e => this.setState({ status: e.state })}
        onChangeQuality={e => this.setState({ quality: e.quality })}
        onError={e => this.setState({ error: e.error })}
        style={{ alignSelf: 'stretch', height: 300 }}
      />
      <VideoFooter>
        <VideoFooterTitle> Ep01 - Entrevista Motivacional</VideoFooterTitle>
        <VideoFooterSubTitle>Diego Fernandes</VideoFooterSubTitle>
      </VideoFooter>
    </Container>
  );
}
