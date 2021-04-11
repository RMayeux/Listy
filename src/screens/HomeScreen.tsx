import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Typography, Colors } from '_styles';
import { Header, NewListButton } from '_molecules';
import { StackScreenProps } from '@react-navigation/stack';
import { ListContainer } from '_organisms';
import { searchList } from '_services';
import uuid from 'react-native-uuid';
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
  namew: string;
  owner: OwnerInterface;
  listId?: string;
}
interface OwnerInterface {
  id: string;
  firstName: string;
  lastName: string;
}

export default function HomeScreen({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, 'Home'>): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('Mes listes');
  const [myLists, setMyLists] = useState<ListInterface[]>([]);
  const [sharedLists, setSharedLists] = useState<ListInterface[]>([]);
  const [isCreating, setIsCreating] = useState<boolean>(false);

  const ownerId = '1234id';
  const ownerFirstName = 'Rémi';
  const ownerLastName = 'Mayeux';

  useEffect(() => {
    searchList().then((results: ListInterface[]) => {
      setSharedLists(results.filter(list => ownerId !== list.owner.id));
      setMyLists(results.filter(list => ownerId === list.owner.id));
      setIsLoading(false);
    });
  }, []);

  const onPressSwitch = () => {
    setIsEnabled(!isEnabled);
    if (isEnabled) {
      setTitle('Mes listes');
    } else {
      setTitle('Liste partagées');
    }
  };

  const onPressCreateList = () => {
    setIsCreating(true);
    setIsEnabled(false);
    setMyLists([
      {
        id: `${uuid.v4()}`,
        name: '',
        owner: {
          firstName: ownerFirstName,
          id: ownerId,
          lastName: ownerLastName,
        },
      },
      ...myLists,
    ]);
  };

  return (
    <View style={styles.container}>
      {!isLoading ? (
        <>
          <Header title={title} />
          <ListContainer
            lists={isEnabled ? [...sharedLists] : myLists}
            setLists={isEnabled ? setSharedLists : setMyLists}
            onPressSwitch={onPressSwitch}
            isEnabled={isEnabled}
            setIsCreating={setIsCreating}
          />
          {isCreating ? (
            <></>
          ) : (
            <NewListButton
              style={{ color: Colors.WHITE }}
              title="Créer une liste"
              onPressCreateList={onPressCreateList}
            />
          )}
        </>
      ) : (
        <></>
      )}
    </View>
  );
}
