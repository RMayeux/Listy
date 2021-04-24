import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Colors, Typography } from '_styles';
import { Ionicons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { ListItemInterface } from '../../../../types';

interface ListSwitchInterface {
  itemName: string;
  onDelete: () => void;
  onPress: (newItem: ListItemInterface) => void;
  enabled: boolean;
}
const { width } = Dimensions.get('window');

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
    ...Typography.FONT_REGULAR,
    width: width - 25,
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
    backgroundColor: Colors.PRIMARY,
    opacity: 0.4,
  },
  textDisabled: {
    color: Colors.BLACK_60,
  },
});

function ListItem({
  itemName,
  enabled,
  onDelete,
  onPress,
}: ListSwitchInterface): JSX.Element {
  const [name, setName] = useState<string>('');

  useEffect(() => {
    setName(itemName);
  }, [itemName]);

  return (
    <View
      style={enabled ? styles.listItem : [styles.listItem, styles.disabled]}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          onPress({ name, enabled: !enabled });
        }}
        style={{ height: '100%', justifyContent: 'center' }}
      >
        <Text
          style={
            enabled ? styles.listName : [styles.listName, styles.textDisabled]
          }
        >
          {itemName}
        </Text>
      </TouchableWithoutFeedback>
      <View
        style={{
          position: 'absolute',
          right: 0,
          flexDirection: 'row',
          marginRight: 15,
        }}
      >
        <TouchableWithoutFeedback
          style={{ width: 50 }}
          onPress={() => onDelete()}
        >
          <Ionicons
            name="md-trash-bin-outline"
            size={20}
            color={enabled ? Colors.PRIMARY : Colors.BLACK_60}
            style={enabled ? styles.icon : [styles.icon]}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

export default ListItem;
