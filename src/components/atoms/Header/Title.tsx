import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Typography, Colors } from '_styles';

const { FONT_SIZE_18, FONT_SEMI_BOLD } = Typography;
const { BLACK_60 } = Colors;

interface HeaderTitleInterface {
  title: string;
}

const styles = StyleSheet.create({
  title: {
    fontSize: FONT_SIZE_18,
    color: BLACK_60,
    ...FONT_SEMI_BOLD,
  },
});

function HeaderTitle({ title }: HeaderTitleInterface): JSX.Element {
  return <Text style={styles.title}>{title}</Text>;
}

export default HeaderTitle;
