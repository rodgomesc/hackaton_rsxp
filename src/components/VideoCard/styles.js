import styled from 'styled-components/native';
import { WebView } from 'react-native-webview';

export const Container = styled.View`
  height: 300px;
`;

export const VideoFooter = styled.View`
  display: ${props => (props.showDetails ? 'flex' : 'none')};
`;
export const VideoFooterTitle = styled.Text`
  color: #fff;
`;
export const VideoFooterSubTitle = styled.Text`
  color: #fff;
`;

export const YoutubeVideo = styled(WebView)`
  flex: 1;
`;
