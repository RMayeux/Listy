import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Colors, Typography } from '_styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface ListInputInterface {
  onEnter: (name: string) => void;
}

const styles = StyleSheet.create({
  listItem: {
    height: 65,
    elevation: 1,
    marginBottom: 1,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    paddingLeft: 15,
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
    minWidth: '100%',
  },
});

function ListItem({ onEnter }: ListInputInterface): JSX.Element {
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const inputRef = useRef(null);
  useEffect(() => {
    if (!isCreating) {
      setName('');
    }
  }, [isCreating]);

  return (
    <TouchableWithoutFeedback
      style={styles.listItem}
      onPress={() => {
        setIsCreating(true);
      }}
    >
      <TextInput
        autoFocus
        ref={inputRef}
        value={name}
        onChangeText={text => {
          setName(text);
          setIsCreating(true);
        }}
        onBlur={() => {
          if (name) {
            onEnter(name);
            inputRef.current.focus();
          }
          setIsCreating(false);
        }}
        style={
          !isCreating
            ? {
                fontSize: Typography.FONT_SIZE_18,
                color: 'rgba(0,0,0,0.3)',
                ...Typography.FONT_REGULAR,
                height: '100%',
                width: '100%',
              }
            : {
                fontSize: Typography.FONT_SIZE_18,
                color: Colors.BLACK_60,
                ...Typography.FONT_REGULAR,
                height: '100%',
                width: '100%',
              }
        }
        placeholder="Ajouter un objet"
      />
    </TouchableWithoutFeedback>
  );
}

export default ListItem;
