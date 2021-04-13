/* eslint-disable react/no-unused-prop-types */
import { List, ListSwitch } from '_molecules';
import React, { Dispatch, SetStateAction } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Colors } from '_styles';
import { deleteList } from '_services';
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
  navigation,
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
              await deleteList();
              const newLists = [...lists];
              newLists.splice(newLists.indexOf(item), 1);
              setLists(newLists);
            }}
            isEnabled={isEnabled}
          />
        )}
      />
    </View>
  );
}

export default ListContainer;
