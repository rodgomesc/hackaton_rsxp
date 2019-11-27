import styled from 'styled-components/native';

export const Container = styled.View`
  background: #333;
  flex: 1;
`;

export const List = styled.FlatList``;
export const ListItem = styled.TouchableOpacity`
  background: rgba(0, 0, 0, 0.2);
  padding: 16px;
  border-radius: 6;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-bottom-color: rgba(255, 255, 255, 0.2);
  border-bottom-width: 1;

  color: #fff;
`;
export const VagaTitle = styled.Text`
  color: #fff;
`;
export const VagaDescription = styled.Text`
  color: #fff;
`;
export const VagaMoney = styled.Text`
  color: #fff;
`;
export const VagaRequisitos = styled.Text`
  color: #fff;
`;

export const CompanyTitle = styled.Text`
  color: #fff;
`;

export const VagaStrong = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;
