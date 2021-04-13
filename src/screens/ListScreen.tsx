import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Typography } from '_styles';
import { Header } from '_molecules';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    ...Typography.FONT_LIGHT,
    fontSize: Typography.FONT_SIZE_16,
  },
});

export interface ListInterface {
  id: string;
  name: string;
  owner: OwnerInterface;
  listId?: string;
}
interface OwnerInterface {
  id: string;
  firstName: string;
  lastName: string;
}

export default function ListScreen({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, 'ListScreen'>): JSX.Element {
  const { list } = route.params;

  return (
    <View style={styles.container}>
      <Header title={list.name} />
    </View>
  );
}
