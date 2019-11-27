import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #232323;
`;

export const InfoWrapper = styled.View`
  margin-left: 15px;
  flex-direction: row;
  width: 100px;
  position: relative;
  margin-top: 24px;
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
  border-bottom-color: rgba(255, 255, 255, 0.2);
  border-bottom-width: 1;
  padding-right: 15px;
  align-items: center;
  height: 60px;
`;

export const ListCounter = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18;
  margin-left: 15px;
`;

export const ListContentTitle = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  flex: 1;
  margin-left: 15px;
`;
export const ListContentDuration = styled.Text`
  color: rgba(255, 255, 255, 0.4);
  margin-right: 10px;
`;

export const Thumbnail = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: 80px;
  width: 80px;
  margin-left: 15px;
`;
