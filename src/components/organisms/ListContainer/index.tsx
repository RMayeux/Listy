/* eslint-disable react/no-unused-prop-types */
import { List, ListSwitch } from '_molecules';
import React, { Dispatch, SetStateAction } from 'react';
import { FlatList, StyleSheet, View, Dimensions } from 'react-native';
import { Colors } from '_styles';
import { createList, deleteList } from '_services';
import { ListInterface } from 'screens/HomeScreen';
import { HomeScreenNavigationProp } from '../../../../types';

const { height } = Dimensions.get('window');

interface ListContainerInterface {
  lists: ListInterface[];
  setLists: Dispatch<SetStateAction<ListInterface[]>>;
  onPressSwitch: (value: number) => void;
  setIsCreating: (isCreating: boolean) => void;
  isSwitchPushed: boolean;
  isCreating: boolean;
  isCreated: boolean;
  setIsCreated: (isCreated: boolean) => void;
  navigation: HomeScreenNavigationProp;
}
interface renderDataInterface {
  item: ListInterface;
}

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
    backgroundColor: Colors.GRAY_LIGHT,
    height: height - 160,
    minHeight: height - 160,
    maxHeight: height - 160,
    position: 'relative',
  },
});

function ListContainer({
  lists,
  setLists,
  onPressSwitch,
  navigation,
  isSwitchPushed,
  isCreating,
  setIsCreated,
  isCreated,
}: ListContainerInterface): JSX.Element {
  return (
    <View style={styles.listContainer}>
      <ListSwitch
        onPress={onPressSwitch}
        isSwitchPushed={isSwitchPushed}
        isCreating={isCreating}
        isCreated={isCreated}
      />
      <FlatList
        style={{
          width: '100%',
          overflow: 'scroll',
          maxHeight: height - 255,
        }}
        data={lists}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }: renderDataInterface) => (
          <List
            list={item}
            style={{}}
            onSwipe={async () => {
              if (item.name) {
                await deleteList(item.id);
              }
              const newLists = [...lists];
              newLists.splice(newLists.indexOf(item), 1);
              setLists(newLists);
            }}
            onEnter={async (name: string) => {
              if (name) {
                const newLists = [...lists];
                newLists[newLists.indexOf(item)].name = name;
                await createList(newLists[newLists.indexOf(item)]);
                setLists(newLists);
              } else {
                const newLists = [...lists];
                newLists.splice(newLists.indexOf(item), 1);
                setLists(newLists);
              }
              setIsCreated(true);
            }}
            isSwitchPushed={isSwitchPushed}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
}

export default ListContainer;
