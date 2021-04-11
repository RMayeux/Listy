// import { Ionicons } from '@expo/vector-icons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import * as React from 'react';
// import { Image } from 'react-native';
// import { Colors } from '../Constants';
// import { BottomTabParamList, HomeScreenParamList } from '../../types';
// import { HomeScreen } from '../screens/HomeScreen';
// import { View } from '../components/Themed';

// const BottomTab = createBottomTabNavigator<BottomTabParamList>();

// export default function BottomTabNavigator() {
//   return (
//     <BottomTab.Navigator
//       initialRouteName="Home"
//       tabBarOptions={{
//         activeTintColor: Colors.orange,
//         style: {
//           backgroundColor: 'white',
//           borderTopWidth: 0,
//           elevation: 0,
//           shadowColor: '#5bc4ff',
//           shadowOpacity: 0,
//           shadowOffset: {
//             height: 0,
//           },
//           shadowRadius: 0,
//           paddingBottom: 10,
//         },
//       }}
//     >
//       <BottomTab.Screen
//         name="Home"
//         component={homeNavigator}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <TabBarIcon name="md-home" color={Colors.pink} />
//           ),
//           tabBarLabel: '',
//         }}
//       />
//     </BottomTab.Navigator>
//   );
// }

// // You can explore the built-in icon families and icons on the web at:
// // https://icons.expo.fyi/
// function TabBarIcon(props: { name: string; color: string }) {
//   return (
//     <View
//       style={{
//         width: 65,
//         height: 65,
//         borderRadius: 15,
//         elevation: 4,
//         marginBottom: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <Image
//         source={require('../assets/home.png')}
//         style={{ width: 50, height: 50 }}
//       />
//     </View>
//   );
// }

// // Each tab has its own navigation stack, you can read more about this pattern here:
// // https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
// const HomeStack = createStackNavigator<HomeScreenParamList>();

// function homeNavigator() {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen
//         name="HomeScreen"
//         component={HomeScreen}
//         options={{ headerShown: false }}
//       />
//     </HomeStack.Navigator>
//   );
// }
