/* eslint-disable react/no-unused-prop-types */
import { List } from '_molecules';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Colors } from '_styles';

interface ListInterface {
  name: string;
  description: string;
  id: string;
}

interface ListContainerInterface {
  lists: ListInterface[];
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

function ListContainer({ lists }: ListContainerInterface): JSX.Element {
  return (
    <View style={styles.listContainer}>
      <FlatList
        contentContainerStyle={{ flex: 1, alignItems: 'center' }}
        data={lists}
        renderItem={({ item }: renderDataInterface) => (
          <List
            name={item.name}
            description={item.description}
            style={{ marginBottom: 15 }}
          />
        )}
      />
    </View>
  );
}

export default ListContainer;
