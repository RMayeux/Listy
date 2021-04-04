import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Typography, Colors } from '_styles';

const { FONT_SIZE_14, FONT_LIGHT } = Typography;
const { BLACK_60 } = Colors;

interface ListContainerDescriptionInterface {
  description: string;
}

const styles = StyleSheet.create({
  description: {
    fontSize: FONT_SIZE_14,
    color: BLACK_60,
    ...FONT_LIGHT,
  },
});

function ListContainerDescription({
  description,
}: ListContainerDescriptionInterface): JSX.Element {
  return <Text style={styles.description}>{description}</Text>;
}

export default ListContainerDescription;
