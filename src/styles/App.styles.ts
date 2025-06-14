// src/styles/App.styles.ts
import { StyleSheet, Platform } from 'react-native';

const colors = {
  primary: '#4A90E2',
  accent: '#50E3C2',
  background: '#F2F5F9',
  surface: '#FFFFFF',
  textPrimary: '#1C1C1C',
  textSecondary: '#666666',
  border: '#E0E0E0',
  cardShadow: '#00000022',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginVertical: 24,
    color: colors.textPrimary,
    textAlign: 'center',
  },

  userItem: {
    backgroundColor: colors.surface,
    padding: 20,
    marginVertical: 10,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    ...Platform.select({
      ios: {
        shadowColor: colors.cardShadow,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  userName: {
    fontSize: 20,
    color: colors.textPrimary,
    fontWeight: '600',
  },

  sheetContent: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.surface,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },

  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  tab: {
    marginHorizontal: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 3,
    borderColor: 'transparent',
  },
  activeTab: {
    borderColor: colors.primary,
  },
  tabContent: {
    paddingVertical: 12,
    paddingHorizontal: 4,
  },

  editButton: {
    marginTop: 20,
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  editButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },

  actionsContainer: {
    marginTop: 32,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  actionButton: {
    backgroundColor: '#EDF2F7',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  actionButtonText: {
    fontWeight: '500',
    color: colors.textSecondary,
    fontSize: 15,
  },
});

export default styles;
