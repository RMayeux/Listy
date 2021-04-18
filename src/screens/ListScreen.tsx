import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Typography } from '_styles';
import { Header } from '_molecules';
import { StackScreenProps } from '@react-navigation/stack';
import { ListItemsContainer } from '_organisms';
import { ListItemInterface, RootStackParamList } from '../../types';

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
  items: ListItemInterface;
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
  const [items, setItems] = useState<string[]>([]);
  const { list } = route.params;

  useEffect(() => {
    setItems([
      ...list.items.filter((item: ListItemInterface) => item.enabled),
      ...list.items.filter((item: ListItemInterface) => !item.enabled),
    ]);
  }, [list]);

  return (
    <View style={styles.container}>
      <Header title={list.name} />
      <ListItemsContainer list={list} setItems={setItems} items={items} />
    </View>
  );
}
