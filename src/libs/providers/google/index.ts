import * as Google from 'expo-google-app-auth';
import { getStringData } from '../../asyncStorage';

interface Props {
  [key: string]: unknown;
}

export const logIn = async (): Promise<unknown> => {
  return Google.logInAsync({
    iosClientId: IOS_CLIENT_ID,
    androidClientId: ANDROID_CLIENT_ID,
    scopes: ['profile', 'email'],
  });
};

export const redirectIfLoggedIn = async ({
  navigation,
}: Props): Promise<unknown> => {
  const isLoggedIn = !!(await getStringData('userId'));
  if (isLoggedIn) {
    return navigation.navigate('Profile');
  }
  return null;
};
