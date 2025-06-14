import React from 'react';
import { FlatList, View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { User } from '../types/user';
import styles from '../styles/App.styles';

interface Props {
  users: User[];
  loading: boolean;
  error: string | null;
  onUserSelect: (user: User) => void;
}

const UserList: React.FC<Props> = ({ users, loading, error, onUserSelect }) => {
  if (loading) {
    return <ActivityIndicator size="large" color="#000" />;
  }

  if (error) {
    return (
      <View style={{ alignItems: 'center', marginTop: 40 }}>
        <Text style={{ fontSize: 16, color: 'red', textAlign: 'center' }}>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.userItem} onPress={() => onUserSelect(item)}>
          <Text style={styles.userName}>{item.name}</Text>
        </TouchableOpacity>
      )}
      contentContainerStyle={{ paddingBottom: 100 }}
    />
  );
};

export default UserList;
