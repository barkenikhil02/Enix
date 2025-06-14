// src/styles/App.styles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginVertical: 16,
    color: '#222',
    textAlign: 'center',
  },
  userItem: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
    // elevation: 3,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
  },
  userName: {
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
  },
  sheetContent: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tab: {
    marginHorizontal: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 3,
    borderColor: 'transparent',
  },
  activeTab: {
    borderColor: '#007aff',
  },
  tabContent: {
    paddingVertical: 10,
  },
  editButton: {
    marginTop: 16,
    backgroundColor: '#007aff',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  actionsContainer: {
    marginTop: 24,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
  },
  actionButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  actionButtonText: {
    fontWeight: '500',
    color: '#333',
  },
});

export default styles;
