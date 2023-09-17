import { StyleSheet, Text, View } from 'react-native';
import "./src/components/calculadora/index";
import Calculadora from "./src/components/calculadora/index";

export default function App() {
  return (
    <View style={styles.container}>
    <Calculadora />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
