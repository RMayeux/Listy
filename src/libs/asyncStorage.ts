import AsyncStorage from '@react-native-community/async-storage';

interface valueObject {
  [key: string]: unknown;
}

export const storeStringData = async (
  key: string,
  value: string,
): Promise<unknown> => {
  return AsyncStorage.setItem(key, value);
};

export const storeObjectData = async (
  key: string,
  value: valueObject,
): Promise<unknown> => {
  const jsonValue = JSON.stringify(value);
  return AsyncStorage.setItem(key, jsonValue);
};

export const getStringData = async (key: string): Promise<unknown> => {
  return AsyncStorage.getItem(key);
};

export const getObjectData = async (key: string): Promise<unknown> => {
  const jsonValue = await AsyncStorage.getItem(key);
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};

export const removeValue = async (key: string): Promise<unknown> => {
  return AsyncStorage.removeItem(key);
};
