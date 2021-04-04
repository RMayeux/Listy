import { ListDescription, ListTitle } from '_atoms';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '_styles';

const { PRIMARY } = Colors;

interface ListInterface {
  title: string;
  description: string;
}
const styles = StyleSheet.create({
  list: {
    borderColor: PRIMARY,
    borderWidth: 2,
    padding: 5,
  },
});

function List({ title, description }: ListInterface): JSX.Element {
  return (
    <View style={styles.list}>
      <ListTitle title={title} />
      <ListDescription description={description} />
    </View>
  );
}

export default List;
