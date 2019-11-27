import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #333;
`;

export const CardWrapper = styled.ScrollView`
  flex: 1;
  margin-top: 10px;
  flex-direction: column;
`;

export const CardRow = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const VideoCardWrapper = styled.View``;

export const CardWrapperTitle = styled.Text`
  color: #c3c3c3;
  align-self: center;
  font-size: 18;
  margin-top: 10px;
  margin-bottom: 15px;
`;
