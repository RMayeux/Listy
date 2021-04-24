import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Colors, Typography } from '_styles';
import { Entypo } from '@expo/vector-icons';

interface ListSwitchInterface {
  onPress: () => void;
}

const styles = StyleSheet.create({
  shareButton: {
    position: 'absolute',
    width: '100%',
    backgroundColor: Colors.PRIMARY,
    bottom: 0,
    left: 0,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  shareButtonText: {
    ...Typography.FONT_MEDIUM,
    fontSize: Typography.FONT_SIZE_18,
    color: Colors.WHITE,
    margin: 15,
  },
});

function ShareButton({ onPress }: ListSwitchInterface): JSX.Element {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.shareButton}>
      <Text style={styles.shareButtonText}>Partager la liste</Text>
      <Entypo name="share" size={18} color={Colors.WHITE} />
    </TouchableOpacity>
  );
}

export default ShareButton;
