import React from 'react';
import { Text, StyleSheet, ViewStyle } from 'react-native';
import { Typography, Colors } from '_styles';

const { FONT_SIZE_16, FONT_SEMI_BOLD } = Typography;
const { PRIMARY } = Colors;

interface ListTitleInterface {
  name: string;
  style: ViewStyle;
}

const styles = StyleSheet.create({
  name: {
    fontSize: FONT_SIZE_16,
    color: PRIMARY,
    ...FONT_SEMI_BOLD,
  },
});

function ListName({ name, style }: ListTitleInterface): JSX.Element {
  return <Text style={[styles.name, style]}>{name}</Text>;
}

export default ListName;
