import React from 'react';
import { View, FlatList, Text } from 'react-native';
import paises from '../dados/paises.json';
import estilos from '../styleSheet/estilos';

const recuperaId = (item) => item.id;

const mostraItem = ({ item }) => (
  <View style={estilos.itemContainer}>
    <Text style={estilos.bandeira}>{item.bandeira}</Text>
    <View style={estilos.conteudoItem}>
      <Text style={estilos.nomePais}>{item.pais}</Text>
      <Text style={estilos.capital}>Capital: {item.capital}</Text>
      <Text style={estilos.populacao}>População: {item.populacao}</Text>
    </View>
  </View>
);

const mostraSeparador = () => <View style={estilos.separador} />;

export default function Conteudo() {
  return (
    <FlatList
      style={estilos.lista}
      data={paises}
      keyExtractor={recuperaId}
      renderItem={mostraItem}
      ItemSeparatorComponent={mostraSeparador}
      scrollIndicatorInsets={{ right: 1 }}
    />
  );
}
