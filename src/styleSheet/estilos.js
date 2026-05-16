import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f4f8',
  },
  cabecalho: {
    backgroundColor: '#1e90ff',
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#0066cc',
  },
  cabecalhoTexto: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  lista: {
    flex: 1,
    paddingVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  bandeira: {
    fontSize: 40,
    marginRight: 15,
  },
  conteudoItem: {
    flex: 1,
  },
  nomePais: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e90ff',
    marginBottom: 4,
  },
  capital: {
    fontSize: 14,
    color: '#555',
    marginBottom: 3,
  },
  populacao: {
    fontSize: 12,
    color: '#888',
    fontStyle: 'italic',
  },
  separador: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 8,
  },
  rodape: {
    backgroundColor: '#1e90ff',
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderTopWidth: 3,
    borderTopColor: '#0066cc',
  },
  rodapeTexto: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  autor: {
    fontSize: 12,
    color: '#e0e0e0',
    marginTop: 5,
  },
});

export default estilos;
