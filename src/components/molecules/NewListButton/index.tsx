import { Title20 } from '_atoms';
import React from 'react';
import { StyleSheet, View, TextStyle } from 'react-native';
import { Colors } from '_styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface NewListButtonInterface {
  title: string;
  style: TextStyle;
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.PRIMARY,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function NewListButton({ title, style }: NewListButtonInterface): JSX.Element {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <Title20 title={title} style={style} />
      </View>
    </TouchableOpacity>
  );
}

export default NewListButton;
