import { ListDescription, ListName } from '_atoms';
import React from 'react';
import { StyleSheet, View, ViewStyle, Dimensions } from 'react-native';
import { Colors } from '_styles';
import Animated, {
  abs,
  add,
  call,
  clockRunning,
  cond,
  eq,
  min,
  not,
  set,
  useCode,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  State,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { snapPoint, clamp } from 'react-native-redash';
import {
  timing,
  useClock,
  usePanGestureHandler,
  useValue,
  minus,
} from 'react-native-redash/lib/module/v1';

const { width } = Dimensions.get('window');
const snapPoints = [-width, -100, 0];
const HEIGHT = 55;
interface ListInterface {
  name: string;
  description: string;
  style: ViewStyle;
}
const styles = StyleSheet.create({
  list: {
    padding: 10,
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
    height: HEIGHT,
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

function List({ name, description, style }: ListInterface): JSX.Element {
  const {
    gestureHandler,
    translation,
    velocity,
    state,
  } = usePanGestureHandler();
  const translateX = useValue(0);
  const offsetX = useValue(0);
  const height = useValue(HEIGHT);
  const to = snapPoint(translateX, velocity.x, snapPoints);
  const clock = useClock();
  const shouldRemove = eq(to, -width);
  useCode(
    () => [
      cond(
        eq(state, State.ACTIVE),
        set(translateX, add(offsetX, min(translation.x, 0))),
      ),
      cond(eq(state, State.END), [
        set(translateX, timing({ clock, from: translateX, to })),
        set(offsetX, translateX),
        cond(shouldRemove, [set(height, timing({ from: HEIGHT, to: 0 }))]),
      ]),
    ],
    [],
  );
  return (
    <View>
      <View style={styles.background} />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <PanGestureHandler {...gestureHandler}>
        <Animated.View style={{ height, transform: [{ translateX }] }}>
          <View style={[styles.list, style]}>
            <ListName name={name} style={{ marginBottom: 10 }} />
          </View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

export default List;
