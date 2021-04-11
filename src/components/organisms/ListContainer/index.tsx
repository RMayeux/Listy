/* eslint-disable react/no-unused-prop-types */
import { List, ListSwitch } from '_molecules';
import React, { Dispatch, SetStateAction } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Colors } from '_styles';
import { createList, deleteList } from '_services';
import { ListInterface } from 'screens/HomeScreen';

interface ListContainerInterface {
  lists: ListInterface[];
  setLists: Dispatch<SetStateAction<ListInterface[]>>;
  onPressSwitch: () => void;
  isEnabled: boolean;
}
interface renderDataInterface {
  item: ListInterface;
}
const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.GRAY_LIGHT,
    paddingTop: 25,
  },
});

function ListContainer({
  lists,
  setLists,
  onPressSwitch,
  isEnabled,
}: ListContainerInterface): JSX.Element {
  return (
    <View style={styles.listContainer}>
      <ListSwitch onPress={onPressSwitch} />
      <FlatList
        contentContainerStyle={{ flex: 1, alignItems: 'center' }}
        data={lists}
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
            }}
            isEnabled={isEnabled}
          />
        )}
      />
    </View>
  );
}

export default ListContainer;
