import { HeaderTitle } from '_atoms';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '_styles';

interface HeaderInterface {
  title: string;
}
const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '15%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 5,
    backgroundColor: Colors.WHITE,
  },
});

function Header({ title }: HeaderInterface): JSX.Element {
  return (
    <View style={styles.header}>
      <HeaderTitle title={title} />
    </View>
  );
}

export default Header;
