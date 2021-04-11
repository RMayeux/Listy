import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          login: {
            screens: {
              loginScreen: 'login',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'home',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
