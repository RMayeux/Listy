import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { Typography } from '_styles';

const { FONT_SIZE_20, FONT_MEDIUM } = Typography;

interface Title20Interface {
  title: string;
  style: TextStyle;
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
