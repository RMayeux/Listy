import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '_styles';
import SwitchSelector from 'react-native-switch-selector';

interface ListSwitchInterface {
  onPress: (value: number) => void;
  isSwitchPushed: boolean;
  isCreating: boolean;
  isCreated: boolean;
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

function ListSwitch({
  onPress,
  isSwitchPushed,
  isCreating,
  isCreated,
}: ListSwitchInterface): JSX.Element {
  const options = [
    { label: 'Mes listes', value: 0 },
    { label: 'Liste partagées', value: 1 },
  ];
  // if (isCreating) {
  //   console.log('???');
  //   return (
  //     <SwitchSelector
  //       disableValueChangeOnPress
  //       value={isSwitchPushed ? 1 : 0}
  //       initial={0}
  //       onPress={value => onPress(value)}
  //       options={options}
  //       textColor={Colors.BLACK_60}
  //       selectedColor={Colors.WHITE}
  //       buttonColor={Colors.PRIMARY}
  //       borderColor={Colors.PRIMARY}
  //       bold
  //       height={45}
  //       style={styles.listSwitch}
  //     />
  //   );
  // }
  return (
    <>
      <SwitchSelector
        disabled={!isCreated}
        disableValueChangeOnPress
        // eslint-disable-next-line no-nested-ternary
        value={isCreating ? (isSwitchPushed ? 1 : 0) : undefined}
        initial={0}
        onPress={value => onPress(value)}
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
