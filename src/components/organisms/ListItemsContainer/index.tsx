/* eslint-disable react/no-unused-prop-types */
import { ListItem, ListInput } from '_molecules';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, Dimensions } from 'react-native';
import { Colors } from '_styles';
import { ListInterface } from 'screens/HomeScreen';
import { ListItemInterface } from '../../../../types';

const { height } = Dimensions.get('window');

interface ListItemsContainerInterface {
  list: ListInterface;
  setItems: (items: ListItemInterface[]) => void;
  items: ListItemInterface[];
}

interface renderDataInterface {
  item: ListItemInterface;
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: Colors.GRAY_LIGHT,
    maxHeight: height - 160,
  },
});

function ListItemsContainer({
  setItems,
  items,
}: ListItemsContainerInterface): JSX.Element {
  const [enabledItems, setEnabledItems] = useState<ListItemInterface[]>([]);
  const [disabledItems, setDisabledItems] = useState<ListItemInterface[]>([]);

  useEffect(() => {
    setEnabledItems(items.filter((item: ListItemInterface) => item.enabled));
    setDisabledItems(items.filter((item: ListItemInterface) => !item.enabled));
  }, [items]);
  const ListItemRendering = (data: ListItemInterface[]) => {
    return (
      <FlatList
        contentContainerStyle={{ width: '100%' }}
        data={data}
        renderItem={({ item }: renderDataInterface) => (
          <ListItem
            itemName={item.name}
            enabled={item.enabled}
            onDelete={async () => {
              const newItems = [...items];
              newItems.splice(newItems.indexOf(item), 1);
              setItems(newItems);
            }}
            onPress={async (newItem: ListItemInterface) => {
              const newItems = [...items];
              const index = newItems.indexOf(item);
              newItems.splice(index, 1);
              newItems.push(newItem);
              // await createList(newItems[newItems.indexOf(item)]);
              setItems(newItems);
            }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };
  return (
    <View style={styles.listContainer}>
      <ListInput
        onEnter={async (name: string) => {
          const newItems = [...items];
          newItems.push({ name, enabled: true });
          // await createList(newItems[newItems.indexOf(item)]);
          setItems(newItems);
        }}
      />
      {ListItemRendering([...enabledItems, ...disabledItems])}
    </View>
  );
}

export default ListItemsContainer;
