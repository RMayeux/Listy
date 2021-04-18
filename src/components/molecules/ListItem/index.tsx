import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors, Typography } from '_styles';
import { Ionicons } from '@expo/vector-icons';
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { ListItemInterface } from '../../../../types';

interface ListSwitchInterface {
  itemName: string;
  onDelete: () => void;
  onPress: (newItem: ListItemInterface) => void;
  enabled: boolean;
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
  nameInput: {
    fontSize: Typography.FONT_SIZE_18,
    color: Colors.BLACK_60,
    ...Typography.FONT_MEDIUM,
    height: '100%',
  },
  disabled: {
    opacity: 0.8,
  },
});

function ListItem({
  itemName,
  enabled,
  onDelete,
  onPress,
}: ListSwitchInterface): JSX.Element {
  const [isBeingEdited, setIsBeingEdited] = useState<boolean>();
  const [name, setName] = useState<string>('');

  useEffect(() => {
    setName(itemName);
  }, [itemName]);

  return (
    <TouchableWithoutFeedback
      style={enabled ? styles.listItem : [styles.listItem, styles.disabled]}
      onPress={() => {
        if (!isBeingEdited) {
          onPress({ name, enabled: !enabled });
        }
      }}
    >
      <View>
        <Text
          style={enabled ? styles.listName : [styles.listName, styles.disabled]}
        >
          {itemName}
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          right: 0,
          flexDirection: 'row',
          marginRight: 15,
        }}
      >
        <TouchableWithoutFeedback onPress={() => onDelete()}>
          <Ionicons
            name="md-trash-bin-outline"
            size={20}
            color={Colors.PRIMARY}
            style={enabled ? styles.icon : [styles.icon, styles.disabled]}
          />
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ListItem;
