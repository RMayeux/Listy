import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, Typography } from '_styles';
import { Ionicons, Feather } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface ListSwitchInterface {
  itemName: string;
  onDelete: () => void;
}

const styles = StyleSheet.create({
  listItem: {
    height: 55,
    elevation: 1,
    marginBottom: 1,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    paddingLeft: 15,
    flexDirection: 'row',
    position: 'relative',
  },
  listName: {
    color: Colors.BLACK_60,
    fontSize: Typography.FONT_SIZE_18,
    ...Typography.FONT_MEDIUM,
  },
  icon: {
    margin: 5,
  },
});

function ListItem({ itemName, onDelete }: ListSwitchInterface): JSX.Element {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listName}>{itemName}</Text>
      <View
        style={{
          position: 'absolute',
          right: 0,
          flexDirection: 'row',
          marginRight: 15,
        }}
      >
        <Feather
          name="edit-2"
          size={20}
          color={Colors.PRIMARY}
          style={styles.icon}
        />
        <TouchableWithoutFeedback onPress={() => onDelete()}>
          <Ionicons
            name="md-trash-bin-outline"
            size={20}
            color={Colors.PRIMARY}
            style={styles.icon}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

export default ListItem;
