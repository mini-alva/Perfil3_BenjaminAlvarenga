import { View, Text, Image, StyleSheet } from 'react-native';

export default function CharacterCard({ name, image, status, species }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text>Estado: {status}</Text>
        <Text>Especie: {species}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 12, marginBottom: 12, overflow: 'hidden', elevation: 2 },
  image: { width: 90, height: 90 },
  info: { flex: 1, padding: 10, justifyContent: 'center' },
  name: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
});