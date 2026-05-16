import React from 'react';
import { View, Text } from 'react-native';
import estilos from '../styleSheet/estilos';

export default function Rodape() {
  return (
    <View style={estilos.rodape}>
      <Text style={estilos.rodapeTexto}>✓ Lista de Países - Americas</Text>
      <Text style={estilos.autor}>Desenvolvido com React Native e FlatList</Text>
    </View>
  );
}
