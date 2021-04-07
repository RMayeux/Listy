import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Typography } from '_styles';
import { Header } from '_molecules';
import { StackScreenProps } from '@react-navigation/stack';
import { ListContainer } from '_organisms';
import { searchList } from '_services';
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
}

export default function HomeScreen({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, 'Home'>): JSX.Element {
  const [lists, setLists] = useState<ListInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('Mes listes');

  useEffect(() => {
    (async () => {
      setLists(await searchList());
      setIsLoading(false);
    })();
  }, []);

  const onPressSwitch = () => {
    setIsEnabled(!isEnabled);
    if (isEnabled) {
      setTitle('Mes listes');
    } else {
      setTitle('Liste partagées');
    }
  };

  return (
    <View style={styles.container}>
      {!isLoading ? (
        <>
          <Header title={title} />
          <ListContainer
            lists={lists}
            setLists={setLists}
            onPressSwitch={onPressSwitch}
          />
        </>
      ) : (
        <></>
      )}
    </View>
  );
}
