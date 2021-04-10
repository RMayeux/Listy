import React from 'react';
import { Text, StyleSheet, ViewStyle } from 'react-native';
import { Typography, Colors } from '_styles';

const { FONT_SIZE_20, FONT_MEDIUM } = Typography;
const { BLACK_60 } = Colors;

interface Title20Interface {
  title: string;
  style: ViewStyle;
}

const styles = StyleSheet.create({
  title: {
    fontSize: FONT_SIZE_20,
    ...FONT_MEDIUM,
  },
});

function Title20({ title, style }: Title20Interface): JSX.Element {
  return <Text style={[styles.title, { ...style }]}>{title}</Text>;
}

export default Title20;
