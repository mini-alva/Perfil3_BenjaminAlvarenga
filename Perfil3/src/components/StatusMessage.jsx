import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function StatusMessage({ loading, error }) {
  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#2563eb" />}
      {loading && <Text style={styles.text}>Cargando...</Text>}
      {error && <Text style={[styles.text, styles.error]}>Error: {error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  text: { marginTop: 10, fontSize: 16 },
  error: { color: '#dc2626' },
});