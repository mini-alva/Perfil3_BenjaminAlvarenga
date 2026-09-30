import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Benjamín Alvarenga</Text>
      <Text style={styles.line}>Carnet: 20240080</Text>
      <Text style={styles.line}>Sección y grupo: 2A</Text>
      <PrimaryButton title="Ver personajes" onPress={() => navigation.navigate('Characters')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, gap: 12 },
  title: { fontSize: 26, fontWeight: 'bold' },
  line: { fontSize: 18 },
});