import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.TouchableOpacity`
  border: 1px solid yellow;
  width: ${Dimensions.get('window').width / 2 - 10};
  height: 240px;
  margin-left: 8px;
  margin-top: 10px;
`;

export const Overlay = styled.ImageBackground.attrs({ resizeMode: 'cover' })`
  flex: 1;
`;

export const HeaderText = styled.Text``;

export const FooterText = styled.Text``;
