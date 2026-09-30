import { FlatList, StyleSheet } from 'react-native';
import useCharacters from '../hooks/useCharacters';
import CharacterCard from '../components/CharacterCard';
import StatusMessage from '../components/StatusMessage';

export default function CharactersScreen() {
  const { characters, loading, error } = useCharacters();

  if (loading || error) return <StatusMessage loading={loading} error={error} />;

  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <CharacterCard name={item.name} image={item.image} status={item.status} species={item.species} />
      )}/>
  );
}

const styles = StyleSheet.create({ list: { padding: 16 } });