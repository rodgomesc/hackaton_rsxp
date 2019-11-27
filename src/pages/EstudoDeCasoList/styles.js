import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
export const Container = styled.View`
  flex: 1;
  background: #232323;
`;

export const InfoWrapper = styled.View`
  flex-direction: row;
  width: 100px;
  border: 1px solid green;
  position: relative;
  margin-top: 244px;
  width: ${Dimensions.get('window').width - 110};
`;

export const InfoTextWrapper = styled.View``;

export const InfoTitle = styled.Text`
  color: #fff;
`;

export const InfoDescription = styled.Text`
  color: #fff;
`;

export const List = styled.FlatList`
  color: #fff;
`;

export const ListItem = styled.View`
  background: #232323;
  color: #fff;
  flex-direction: row;
  border-bottom-color: red;
  border-bottom-width: 2;
`;

export const ListCounter = styled.Text``;

export const PlayIcon = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: 24px;
  width: 24px;
`;
