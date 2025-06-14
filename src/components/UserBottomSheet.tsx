import React, { useCallback, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { User } from '../types/user';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import styles from '../styles/App.styles';

interface Props {
  user: User | null;
  sheetRef: React.RefObject<BottomSheetMethods | null>;
  activeTab: 'profile' | 'contact';
  setActiveTab: React.Dispatch<React.SetStateAction<'profile' | 'contact'>>;
  onChange: (index: number) => void;
}

const UserBottomSheet = ({ user, sheetRef, activeTab, setActiveTab, onChange }: Props) => {
  const snapPoints = useMemo(() => ['50%'], []);

  const renderBackdrop = useCallback((props: any) => (
    <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} pressBehavior="close" />
  ), []);

  if (!user) return null;

  return (
    <BottomSheet
      ref={sheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
      onChange={onChange}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetView style={styles.sheetContent}>
        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={() => setActiveTab('profile')} style={[styles.tab, activeTab === 'profile' && styles.activeTab]}>
            <Text>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('contact')} style={[styles.tab, activeTab === 'contact' && styles.activeTab]}>
            <Text>Contact</Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'profile' ? (
          <View style={styles.tabContent}>
            <Text>Name: {user.name}</Text>
            <Text>Username: {user.username}</Text>
            <Text>Company: {user.company.name}</Text>
            <Text>Website: {user.website}</Text>
            <Text>Address: {`${user.address.city}, ${user.address.street}, ${user.address.suite}, ${user.address.zipcode}`}</Text>
            <TouchableOpacity style={styles.editButton}><Text>Edit</Text></TouchableOpacity>
          </View>
        ) : (
          <View style={styles.tabContent}>
            <Text>Email: {user.email}</Text>
            <Text>Phone: {user.phone}</Text>
            <Text>Skype: Not Available</Text>
            <TouchableOpacity style={styles.editButton}><Text>Edit</Text></TouchableOpacity>
          </View>
        )}

        <View style={styles.actionsContainer}>
          <Text>Actions</Text>
          <View style={styles.actionsRow}>
            <TouchableOpacity style={styles.actionButton}><Text>Send Message</Text></TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}><Text>Block</Text></TouchableOpacity>
          </View>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default UserBottomSheet;
