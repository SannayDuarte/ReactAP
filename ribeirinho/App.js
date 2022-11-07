import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function Clientes({ navigation }) {
  const [Clientes, setClientes] = useState([]);

  useEffect(() => {
    async function fetchRibeirinhoViagem() {
      const response = await fetch('http://localhost:3306/ribeirinhomd6/cliente');
      setClientes(await response.json());
    }
    fetchRibeirinhoViagem();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={styles.fixToText}>
        <Button color='#0f291e'
          title=" Verificar Clientes de Ribeirinho Viagem"
          onPress={() => navigation.navigate('Clientes')}
        />
      </View>
      <View style={styles.fixToList}>
        <Text style={{ width: '10%' }}>Id</Text>
        <Text style={{ width: '30%' }}>Nome</Text>
        <Text style={{ width: '60%' }}>Sobrenome</Text>
        <Text style={{ width: '30%' }}>Rg</Text>
        <Text style={{ width: '30%' }}>Cpf</Text>
        <Text style={{ width: '80%' }}>Data De Nascimento</Text>
        <Text style={{ width: '50%' }}>Celular</Text>
        <Text style={{ width: '60%' }}>Sexualidade</Text>
        <Text style={{ width: '30%' }}>Email</Text>
        <Text style={{ width: '30%' }}>Senha</Text>

        <Text style={{ width: '30%' }}>Cep</Text>
        <Text style={{ width: '40%' }}>Estado</Text>
        <Text style={{ width: '40%' }}>Cidade</Text>
        <Text style={{ width: '40%' }}>Bairro</Text>
        <Text style={{ width: '30%' }}>Rua</Text>

        <Text style={{ width: '80%' }}>Cidade de Destino</Text>
        <Text style={{ width: '70%' }}>Cidade Origem</Text>
        <Text style={{ width: '70%' }}>Data da Viagem</Text>

        <Text style={{ width: '80%' }}>Id Da Passagem</Text>
        <Text style={{ width: '80%' }}>Metodo de Viagem</Text>
        <Text style={{ width: '40%' }}>Valor</Text>
      </View>
      {Clientes.map(cli => (
        <View>
          <View style={styles.fixToList}>
            <Text style={{ width: '10%' }}>{cli.id}</Text>
            <Text style={{ width: '30%' }}>{cli.nome}</Text>
            <Text style={{ width: '60%' }}>{cli.sobrenome}</Text>
            <Text style={{ width: '30%' }}>{cli.rg}</Text>
            <Text style={{ width: '30%' }}>{cli.cpf}</Text>
            <Text style={{ width: '30%' }}>{cli.datadenascimento}</Text>
            <Text style={{ width: '30%' }}>{cli.celular}</Text>
            <Text style={{ width: '30%' }}>{cli.sexualidade}</Text>
            <Text style={{ width: '30%' }}>{cli.email}</Text>
            <Text style={{ width: '30%' }}>{cli.senha}</Text>

            <Text style={{ width: '30%' }}>{cli.cep}</Text>
            <Text style={{ width: '30%' }}>{cli.estado}</Text>
            <Text style={{ width: '30%' }}>{cli.cidade}</Text>
            <Text style={{ width: '30%' }}>{cli.bairro}</Text>
            <Text style={{ width: '30%' }}>{cli.rua}</Text>

            <Text style={{ width: '30%' }}>{cli.cidadeDestino}</Text>
            <Text style={{ width: '30%' }}>{cli.cidadeOrigem}</Text>
            <Text style={{ width: '30%' }}>{cli.dtViagem}</Text>

            <Text style={{ width: '30%' }}>{cli.idPas}</Text> 
            <Text style={{ width: '30%' }}>{cli.mdtViagem}</Text>
            <Text style={{ width: '30%' }}>{cli.valor}</Text>
          </View>
          <Separator />
        </View>
      ))}
    </View>
  );
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Clientes"
          component={Clientes}
          options={{
            title: 'Ribeirinho Viagem',
            headerStyle: { backgroundColor: 'burlywood', }, headerTintColor: '#0f291e'
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f291e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo1: {
    fontWeight: 'bold',
    fontSize: 150,
    marginBottom: 80,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    fontSize: 150,
  },
  fixToList: {
    justifyContent: 'space-between',
    flexDirection: 'colum',
    fontSize: 150,
  },
});