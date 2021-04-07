import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Typography, Colors } from '_styles';
import SwitchSelector from 'react-native-switch-selector';

interface ListSwitchInterface {
  onPress: () => void;
}

const styles = StyleSheet.create({
  listSwitch: {
    width: '60%',
    marginBottom: 25,
    elevation: 4,
    backgroundColor: '#ffffff',
    borderRadius: 22,
  },
});

function ListSwitch({ onPress }: ListSwitchInterface): JSX.Element {
  const options = [
    { label: 'Mes listes', value: 0 },
    { label: 'Liste partagées', value: 1 },
  ];
  return (
    <>
      <SwitchSelector
        initial={0}
        onPress={() => onPress()}
        options={options}
        textColor={Colors.BLACK_60}
        selectedColor={Colors.WHITE}
        buttonColor={Colors.PRIMARY}
        borderColor={Colors.PRIMARY}
        bold
        height={45}
        style={styles.listSwitch}
      />
    </>
  );
}

export default ListSwitch;
