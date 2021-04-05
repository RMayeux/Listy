import { List } from '_molecules';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '_styles';

interface ListInterface {
  name: string;
  description: string;
  id: string;
}

interface ListContainerInterface {
  lists: ListInterface[];
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
  const listViews: JSX.Element[] = [];

  lists.forEach((list: ListInterface) => {
    listViews.push(
      <List
        description={list.description}
        name={list.name}
        style={{ marginBottom: 15 }}
      />,
    );
  });

  return <View style={styles.listContainer}>{listViews}</View>;
}

export default ListContainer;
