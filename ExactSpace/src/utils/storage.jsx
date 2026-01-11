import AsyncStorage from "@react-native-async-storage/async-storage";

const SEARCH_KEY = "saved_search";

export const saveSearch = async (value) => {
  await AsyncStorage.setItem(SEARCH_KEY, value);
};

export const getSavedSearch = async () => {
  return await AsyncStorage.getItem(SEARCH_KEY);
};
