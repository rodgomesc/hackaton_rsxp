import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Linking } from 'react-native';

import {
  Container,
  List,
  ListItem,
  VagaTitle,
  VagaDescription,
  VagaMoney,
  VagaRequisitos,
  CompanyTitle,
  VagaStrong,
} from './styles';

export default function Vagas() {
  const [vagas, setVagas] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/jobs');
      setVagas(response.data);
    }

    fetchData();
  }, []);
  return (
    <Container>
      {vagas && (
        <List
          data={vagas}
          renderItem={({ item, index }) => (
            <ListItem onPress={() => Linking.openURL(item.linkUrl)}>
              <VagaTitle>
                <VagaStrong>Vaga: </VagaStrong>
                {item.name}
              </VagaTitle>
              <CompanyTitle>
                <VagaStrong>Empresa: </VagaStrong>
                {item.company}
              </CompanyTitle>
              <VagaDescription>
                <VagaStrong>Descrição: </VagaStrong>
                {item.description}
              </VagaDescription>
              <VagaMoney>
                <VagaStrong>Faixa salarial: </VagaStrong>
                {item.money}
              </VagaMoney>
              <VagaRequisitos>
                <VagaStrong>Skills: </VagaStrong>
                {item.skill}
              </VagaRequisitos>
            </ListItem>
          )}
          keyExtractor={item => item.id}
        />
      )}
    </Container>
  );
}
