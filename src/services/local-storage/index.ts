/* eslint-disable import/no-anonymous-default-export */
const PREFIX = `local::`;

function set<T = object>(key: string, value: T): void {
  if (!localStorage) {
    return;
  }

  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(PREFIX + key, serializedValue);
  } catch (error) {
    throw new Error('store serialization failed');
  }
}

function get<T = object>(key: string): T | undefined {
  if (!localStorage) {
    return;
  }

  try {
    const serializedValue = localStorage.getItem(PREFIX + key);
    if (!serializedValue) {
      return;
    }
    return JSON.parse(serializedValue);
  } catch (error) {
    throw new Error('store deserialization failed');
  }
}

function removeItem(key: string) {
  if (!localStorage) {
    return;
  }
  try {
    localStorage.removeItem(PREFIX + key);
  } catch (error) {
    throw new Error('store deserialization failed');
  }
}

function removeAllItem() {
  if (!localStorage) {
    return;
  }
  try {
    localStorage.clear();
  } catch (error) {
    throw new Error('store deserialization failed');
  }
}

export const OAUTH_TOKEN = 'char_access_token';
export const REFRESH_TOKEN = 'char_Refresh_token';
export const LANGUAGE = 'language';

export default {
  get,
  set,
  removeItem,
  removeAllItem,
  OAUTH_TOKEN,
  REFRESH_TOKEN,
  LANGUAGE,
};
