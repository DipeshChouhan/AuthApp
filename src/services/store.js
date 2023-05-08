import * as SecureStore from "expo-secure-store";


const saveValue = async (key, value) => {
  await SecureStore.setItemAsync(key, value);
}

const getValueFor = async (key) => {
  let value = await SecureStore.getItemAsync(key);
  return value;
}

const deleteValueFor = async (key) => {
  await SecureStore.deleteItemAsync(key);
}


export {saveValue, getValueFor, deleteValueFor};
