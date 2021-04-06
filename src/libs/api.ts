// eslint-disable-next-line import/prefer-default-export
import { API_URL } from '@env';
import fetch from 'node-fetch';

interface valueObject {
  [key: string]: unknown;
}

export const create = async (
  body: valueObject,
  route: string,
): Promise<unknown> => {
  const headers = {
    'Content-Type': 'application/json',
    // "x-api-key": "d41d8cd98f00b204e9800998ecf8427e",
    // "user-account-id": await getStringData("userId"),
  };

  const response = await fetch(`${API_URL}${route}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });
  return response;
};

export const get = async (route: string): Promise<unknown> => {
  const headers = {
    'Content-Type': 'application/json',
    // "x-api-key": "d41d8cd98f00b204e9800998ecf8427e",
    // "user-account-id": await getStringData("userId"),
  };

  const response = await fetch(`${API_URL}${route}`, {
    headers,
  });
  return response.json();
};

export const update = async (
  body: valueObject,
  route: string,
): Promise<unknown> => {
  const headers = {
    'Content-Type': 'application/json',
    // "x-api-key": "d41d8cd98f00b204e9800998ecf8427e",
    // "user-account-id": await getStringData("userId"),
  };
  const response = await fetch(`${API_URL}/${route}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(body),
  });
  return response;
};

export const deleteItem = async (route: string): Promise<unknown> => {
  const headers = {
    'Content-Type': 'application/json',
    // "x-api-key": "d41d8cd98f00b204e9800998ecf8427e",
    // "user-account-id": await getStringData("userId"),
  };
  const response = await fetch(`${API_URL}/${route}`, {
    method: 'DELETE',
    headers,
  });
  return response;
};
