import React from 'react';
import { Text, StyleSheet, ViewStyle } from 'react-native';
import { Typography, Colors } from '_styles';

const { FONT_SIZE_20, FONT_SEMI_MEDIUM } = Typography;
const { BLACK_60 } = Colors;

interface ListTitleInterface {
  name: string;
  style: ViewStyle;
}

const styles = StyleSheet.create({
  name: {
    fontSize: FONT_SIZE_20,
    color: BLACK_60,
    ...FONT_SEMI_MEDIUM,
  },
});

function ListName({ name, style }: ListTitleInterface): JSX.Element {
  return <Text style={[styles.name, style]}>{name}</Text>;
}

export default ListName;
