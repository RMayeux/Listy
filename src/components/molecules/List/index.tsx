/* eslint-disable react/jsx-props-no-spreading */
import { ListName, ListAction } from '_atoms';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  Dimensions,
  TextInput,
} from 'react-native';
import { Colors, Typography } from '_styles';
import Animated, {
  abs,
  add,
  call,
  clockRunning,
  cond,
  eq,
  not,
  set,
  useCode,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  State,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {
  clamp,
  snapPoint,
  timing,
  useClock,
  usePanGestureHandler,
  useValue,
  minus,
} from 'react-native-redash';
import { HomeScreenNavigationProp } from '../../../../types';

const { FONT_SIZE_20, FONT_REGULAR } = Typography;
const { BLACK_60 } = Colors;

const { width } = Dimensions.get('window');
const snapPoints = [-width, -100, 0];
const HEIGHT = 55;
interface ListComponentInterface {
  list: ListInterface;
  style: ViewStyle;
  onSwipe: (args: readonly never[]) => void;
  onEnter: (string: string) => void;
  isSwitchPushed: boolean;
  navigation: HomeScreenNavigationProp;
}
export interface ListInterface {
  id: string;
  name: string;
  owner: OwnerInterface;
  listId?: string;
  items: Array<string>;
}

interface OwnerInterface {
  id: string;
  firstName: string;
  lastName: string;
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: 0,
    minWidth: '100%',
    backgroundColor: Colors.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 3,
    height: 55,
    position: 'relative',
    justifyContent: 'center',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#E1E2E3',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
    height: HEIGHT,
  },
});

function List({
  list,
  onSwipe,
  style,
  onEnter,
  navigation,
}: ListComponentInterface): JSX.Element {
  const [name, setName] = useState<string>('');
  const {
    gestureHandler,
    translation,
    velocity,
    state,
  } = usePanGestureHandler();
  const translateX = useValue(0);
  const offsetX = useValue(0);
  const height = useValue(HEIGHT);
  const deleteOpacity = useValue(1);
  const clock = useClock();
  const to = snapPoint(translateX, velocity.x, snapPoints);
  const shouldRemove = useValue(0);
  useCode(
    () => [
      cond(
        eq(state, State.ACTIVE),
        set(
          translateX,
          add(offsetX, clamp(translation.x, -9999, minus(offsetX))),
        ),
      ),
      cond(eq(state, State.END), [
        set(translateX, timing({ clock, from: translateX, to })),
        set(offsetX, translateX),
        cond(eq(to, -width), set(shouldRemove, 1)),
      ]),
      cond(shouldRemove, [
        set(height, timing({ from: HEIGHT, to: 0 })),
        set(deleteOpacity, 0),
        cond(not(clockRunning(clock)), call([], onSwipe)),
      ]),
    ],
    [onSwipe],
  );
  return (
    <View>
      <View style={styles.background}>
        <TouchableWithoutFeedback onPress={() => shouldRemove.setValue(1)}>
          <ListAction x={abs(translateX)} {...{ deleteOpacity }} />
        </TouchableWithoutFeedback>
      </View>
      <PanGestureHandler
        failOffsetY={[-5, 5]}
        activeOffsetX={[-5, 5]}
        {...gestureHandler}
      >
        <Animated.View style={{ height, transform: [{ translateX }] }}>
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate('ListScreen', {
                list,
              })
            }
            style={[styles.list, style]}
          >
            {list.name ? (
              <ListName name={list.name} style={{ marginLeft: 10 }} />
            ) : (
              <TextInput
                autoFocus
                onChangeText={text => setName(text)}
                onBlur={() => {
                  onEnter(name);
                }}
                style={{
                  fontSize: FONT_SIZE_20,
                  color: BLACK_60,
                  ...FONT_REGULAR,
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  height: '100%',
                  marginLeft: 10,
                }}
              />
            )}
          </TouchableWithoutFeedback>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

export default List;
