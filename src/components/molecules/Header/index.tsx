/* eslint-disable react/require-default-props */
import { Title22 } from '_atoms';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '_styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

interface HeaderInterface {
  title: string;
  goBack?: unknown;
}
const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 110,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 5,
    backgroundColor: Colors.WHITE,
    position: 'relative',
    paddingTop: 30,
  },
  goBack: {
    position: 'absolute',
    left: 0,
    top: 0,
    paddingLeft: 15,
    width: 70,
    height: 110,
  },
});

function Header({ title, goBack }: HeaderInterface): JSX.Element {
  return (
    <View style={styles.header}>
      <View style={styles.goBack}>
        {goBack ? (
          <TouchableWithoutFeedback
            style={{
              width: '100%',
              height: '100%',
              paddingTop: 32,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => goBack()}
          >
            <Ionicons name="arrow-back" size={22} color={Colors.BLACK_60} />
          </TouchableWithoutFeedback>
        ) : (
          <></>
        )}
      </View>
      <Title22 title={title} />
    </View>
  );
}

export default Header;
