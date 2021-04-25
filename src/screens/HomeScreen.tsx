import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Typography, Colors } from '_styles';
import { Header, NewListButton } from '_molecules';
import { StackScreenProps } from '@react-navigation/stack';
import { ListContainer } from '_organisms';
import { searchList } from '_services';
import uuid from 'react-native-uuid';
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

export default function HomeScreen({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, 'Home'>): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isSwitchPushed, setIsSwitchPushed] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('Mes listes');
  const [myLists, setMyLists] = useState<ListInterface[]>([]);
  const [sharedLists, setSharedLists] = useState<ListInterface[]>([]);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [isCreated, setIsCreated] = useState<boolean>(true);

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

  const onPressSwitch = (value: number) => {
    if (isCreated && isCreating) {
      setIsCreating(false);
    }
    const valueBoolean = !!value;
    setIsSwitchPushed(valueBoolean);
    if (valueBoolean) {
      setTitle('Liste partagées');
    } else {
      setTitle('Mes listes');
    }
  };

  const onPressCreateList = () => {
    setIsCreated(false);
    setIsCreating(true);
    setIsSwitchPushed(false);
    setMyLists([
      {
        id: `${uuid.v4()}`,
        name: '',
        owner: {
          firstName: ownerFirstName,
          id: ownerId,
          lastName: ownerLastName,
        },
        items: [],
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
            lists={isSwitchPushed ? [...sharedLists] : myLists}
            setLists={isSwitchPushed ? setSharedLists : setMyLists}
            onPressSwitch={onPressSwitch}
            isSwitchPushed={isSwitchPushed}
            setIsCreating={setIsCreating}
            isCreating={isCreating}
            isCreated={isCreated}
            setIsCreated={setIsCreated}
            navigation={navigation}
          />
          {!isCreated ? (
            <View
              style={{
                height: 50,
                backgroundColor: Colors.GRAY_LIGHT,
                width: '100%',
              }}
            />
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
