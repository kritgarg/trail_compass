import AsyncStorage from "@react-native-async-storage/async-storage";
const KEY = "TRAIL_COMPASS_PINS_V1";

// TODO: Load the saved pins
export async function loadPins() {
  try {
    const json = await AsyncStorage.getItem(KEY);
    return json ? JSON.parse(json) : [];
  } catch(e) {
    console.warn("Failed to load pins:", e);
    return [];
  }
}

// TODO: Save the pins locally
export async function savePins(pins) {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(pins));
  } catch(e){
    console.warn("Failed to save pins:", e);
  }
}