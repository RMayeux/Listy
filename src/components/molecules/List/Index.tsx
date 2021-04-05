import { ListDescription, ListName } from '_atoms';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Colors } from '_styles';

interface ListInterface {
  name: string;
  description: string;
  style: ViewStyle;
}
const styles = StyleSheet.create({
  list: {
    padding: 10,
    width: '90%',
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 3,
  },
});

function List({ name, description, style }: ListInterface): JSX.Element {
  return (
    <View style={[styles.list, style]}>
      <ListName name={name} style={{ marginBottom: 10 }} />
      <ListDescription description={description} />
    </View>
  );
}

export default List;
