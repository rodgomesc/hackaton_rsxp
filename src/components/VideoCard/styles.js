import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100px;
  border: 1px solid red;
`;

export const VideoFooter = styled.View`
  display: ${props => (props.showDetails ? 'flex' : 'none')};
  border: 1px solid red;
`;
export const VideoFooterTitle = styled.Text`
  color: #fff;
`;
export const VideoFooterSubTitle = styled.Text`
  color: #fff;
`;
