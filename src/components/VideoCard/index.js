import React from 'react';

import {
  Container,
  VideoFooter,
  VideoFooterTitle,
  VideoFooterSubTitle,
  YoutubeVideo,
} from './styles';

export default function VideoCard({ showDetails, url }) {
  return (
    <Container>
      <YoutubeVideo source={{ uri: url }} />
      <VideoFooter showDetails={showDetails}>
        <VideoFooterTitle> Ep01 - Entrevista Motivacional</VideoFooterTitle>
        <VideoFooterSubTitle>Diego Fernandes</VideoFooterSubTitle>
      </VideoFooter>
    </Container>
  );
}
