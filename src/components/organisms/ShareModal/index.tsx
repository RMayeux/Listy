import React, { useState } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { Colors, Typography } from '_styles';
import { TextInput } from 'react-native-gesture-handler';

interface ShareModalInterface {
  onEnter: (userName: string) => void;
}
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  shareModalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 50,
    width,
    zIndex: 1,
    backgroundColor: Colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareButtonText: {
    ...Typography.FONT_MEDIUM,
    fontSize: Typography.FONT_SIZE_18,
    color: Colors.WHITE,
    margin: 15,
  },
});

function ShareModal({ onEnter }: ShareModalInterface): JSX.Element {
  const [userName, setUserName] = useState<string>('');
  return (
    <View style={styles.shareModalContainer}>
      <TextInput
        autoFocus
        onChangeText={text => setUserName(text)}
        onBlur={() => onEnter(userName)}
        placeholder="Nom de l'utilisateur"
        style={{
          fontSize: Typography.FONT_SIZE_20,
          color: Colors.WHITE,
          ...Typography.FONT_REGULAR,
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
          width: '70%',
          height: '100%',
        }}
      />
    </View>
  );
}

export default ShareModal;
