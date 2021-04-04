import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Typography, Colors } from '_styles';

const { FONT_SIZE_18, FONT_SEMI_BOLD } = Typography;
const { PRIMARY } = Colors;

interface ListTitleInterface {
  title: string;
}

const styles = StyleSheet.create({
  title: {
    fontSize: FONT_SIZE_18,
    color: PRIMARY,
    ...FONT_SEMI_BOLD,
  },
});

function ListTitle({ title }: ListTitleInterface): JSX.Element {
  return <Text style={styles.title}>{title}</Text>;
}

export default ListTitle;
