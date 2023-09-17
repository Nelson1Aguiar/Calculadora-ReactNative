import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Calculadora= () =>{
  const [resultado,setResultado]=useState("");

  const limparTela = () =>{
    setResultado('');
  }
  const adicionarDigito = (num) =>{
    setResultado(resultado+num);
  }

   const calcularResultado= () =>{
    setResultado(eval(resultado));
   }

  return (
    <View style={styles.container}>
      <Text style={styles.resultado}>{resultado}</Text>
      <View style={styles.botoes}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => adicionarDigito('7')} style={styles.botao}>
            <Text style={styles.botaoTexto}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => adicionarDigito('8')} style={styles.botao}>
            <Text style={styles.botaoTexto}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => adicionarDigito('9')} style={styles.botao}>
            <Text style={styles.botaoTexto}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => adicionarDigito('/')} style={styles.botaoOperador}>
            <Text style={styles.botaoTexto}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => adicionarDigito('4')} style={styles.botao}>
            <Text style={styles.botaoTexto}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => adicionarDigito('5')} style={styles.botao}>
            <Text style={styles.botaoTexto}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => adicionarDigito('6')} style={styles.botao}>
            <Text style={styles.botaoTexto}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => adicionarDigito('*')} style={styles.botaoOperador}>
            <Text style={styles.botaoTexto}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => adicionarDigito('1')} style={styles.botao}>
            <Text style={styles.botaoTexto}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => adicionarDigito('2')} style={styles.botao}>
            <Text style={styles.botaoTexto}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => adicionarDigito('3')} style={styles.botao}>
            <Text style={styles.botaoTexto}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => adicionarDigito('-')} style={styles.botaoOperador}>
            <Text style={styles.botaoTexto}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => adicionarDigito('0')} style={styles.botao}>
            <Text style={styles.botaoTexto}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => limparTela()} style={styles.botaoLimpar}>
            <Text style={styles.botaoTexto}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>calcularResultado()} style={styles.botaoIgual}>
            <Text style={styles.botaoTexto}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => adicionarDigito('+')} style={styles.botaoOperador}>
            <Text style={styles.botaoTexto}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  resultado: {
    fontSize: 48,
    marginBottom: 20,
  },
  botoes: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  botao: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 40,
    margin: 5,
  },
  botaoOperador: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff9a00',
    borderRadius: 40,
    margin: 5,
  },
  botaoLimpar: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 40,
    margin: 5,
  },
  botaoIgual: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff5c5c',
    borderRadius: 40,
    margin: 5,
  },
  botaoTexto: {
    fontSize: 24,
  },
});

export default Calculadora;
