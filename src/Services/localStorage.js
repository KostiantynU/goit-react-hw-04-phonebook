export function saveToLocal(key, value) {
  try {
    const savedArray = JSON.stringify(value);
    localStorage.setItem(key, savedArray);
  } catch (error) {
    console.log('Write to LocalStorage error: ', error.message);
  }
}
export function loadFromLocal(key) {
  try {
    const readArray = localStorage.getItem(key);
    return readArray === null ? undefined : JSON.parse(readArray);
  } catch (error) {
    console.log('Read from LocalStorage error: ', error.message);
  }
}
