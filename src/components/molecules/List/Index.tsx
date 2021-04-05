import { ListDescription, ListName } from '_atoms';
import React from 'react';
import { StyleSheet, View, ViewStyle, Text } from 'react-native';
import { Colors } from '_styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';

interface ListInterface {
  name: string;
  description: string;
  style: ViewStyle;
}
const styles = StyleSheet.create({
  list: {
    padding: 10,
    width: '95%',
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

function LeftActions() {
  return (
    <View>
      <Text>Add to cart</Text>
    </View>
  );
}

function List({ name, description, style }: ListInterface): JSX.Element {
  return (
    <Swipeable
      containerStyle={{ flex: 1, alignItems: 'center' }}
      renderLeftActions={LeftActions}
    >
      <View style={[styles.list, style]}>
        <ListName name={name} style={{ marginBottom: 10 }} />
        <ListDescription description={description} />
      </View>
    </Swipeable>
  );
}

export default List;
