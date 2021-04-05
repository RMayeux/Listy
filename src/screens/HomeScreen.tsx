import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Typography } from '_styles';
import { Header } from '_molecules';
import { StackScreenProps } from '@react-navigation/stack';
import { ListContainer } from '_organisms';
import { searchList, listInterface } from '../services/list/searchList';
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

export default function HomeScreen({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, 'Home'>): JSX.Element {
  const [lists, setLists] = useState<listInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLists(await searchList());
      setIsLoading(false);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {!isLoading ? (
        <>
          <Header title="Listes" />
          <ListContainer lists={lists} />
        </>
      ) : (
        <></>
      )}
    </View>
  );
}
