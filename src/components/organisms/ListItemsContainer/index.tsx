/* eslint-disable react/no-unused-prop-types */
import { ListItem } from '_molecules';
import React, { Dispatch, SetStateAction } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Colors } from '_styles';
import { createList, deleteList } from '_services';
import { ListInterface } from 'screens/HomeScreen';
import { identityMatrix4 } from 'react-native-redash';

interface ListItemsContainerInterface {
  list: ListInterface;
  setItems: (items: string[]) => void;
  items: Array<string>;
}

interface renderDataInterface {
  item: string;
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: Colors.GRAY_LIGHT,
  },
});

function ListItemsContainer({
  list,
  setItems,
  items,
}: ListItemsContainerInterface): JSX.Element {
  return (
    <View style={styles.listContainer}>
      <FlatList
        contentContainerStyle={{ flex: 1, width: '100%' }}
        data={items}
        renderItem={({ item }: renderDataInterface) => (
          <ListItem
            itemName={item}
            onDelete={async () => {
              const newItems = [...items];
              newItems.splice(newItems.indexOf(item), 1);
              setItems(newItems);
            }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default ListItemsContainer;
