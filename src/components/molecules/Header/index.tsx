import { HeaderTitle } from '_atoms';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface HeaderInterface {
  title: string;
}
const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
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
