import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { User } from './src/types/user';
import UserList from './src/components/UserList';
import UserBottomSheet from './src/components/UserBottomSheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import styles from './src/styles/App.styles';

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<'profile' | 'contact'>('profile');
  const [error, setError] = useState<string | null>(null);


  const bottomSheetRef = useRef<BottomSheetMethods>(null);

  useEffect(() => {
  axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (response.data.length > 0) {
        setUsers(response.data);
        setError(null);
      } else {
        setError('No data found.');
      }
    })
    .catch(err => {
      console.error(err);
      setError('Unable to fetch data. Please check your internet connection.');
    })
    .finally(() => {
      setLoading(false);
    });
}, []);
useEffect(() => {
  if (selectedUser) {
    console.log(selectedUser.name);
    // Defer the expand until after render
    const timeout = setTimeout(() => {
      bottomSheetRef.current?.expand();
    }, 0);
    return () => clearTimeout(timeout);
  }
}, [selectedUser]);


  const openBottomSheet = (user: User) => {
  setSelectedUser(user);
  setActiveTab('profile');
};



  const handleSheetChange = useCallback((index: number) => {
    if (index === -1) setSelectedUser(null);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>User List</Text>
        <UserList users={users} loading={loading} error={error} onUserSelect={(user)=>{openBottomSheet(user)}} />
        <UserBottomSheet
          user={selectedUser}
          sheetRef={bottomSheetRef}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onChange={handleSheetChange}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
