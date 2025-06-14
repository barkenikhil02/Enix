import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { User } from '../types/user';
import styles from '../styles/App.styles';

interface Props {
  user: User;
  onPress: (user: User) => void;
}

const UserItem = ({ user, onPress }: Props) => (
  <TouchableOpacity style={styles.userItem} onPress={() => onPress(user)}>
    <Text style={styles.userName}>{user.name}</Text>
  </TouchableOpacity>
);

export default UserItem;
