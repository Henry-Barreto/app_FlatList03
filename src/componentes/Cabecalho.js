import React from 'react';
import { View, Text } from 'react-native';
import estilos from '../styleSheet/estilos';

export default function Cabecalho() {
  return (
    <View style={estilos.cabecalho}>
      <Text style={estilos.cabecalhoTexto}>🌎 Países das Américas</Text>
    </View>
  );
}
