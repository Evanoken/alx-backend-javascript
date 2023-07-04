export default function updateUniqueItems(map) {
  if (map.constructor !== Map) {
    throw new TypeError('Cannot process');
  }

  for (const [key, value] of map.entries()) {
    if (value === 1) {
      map.set(key, 100);
    }
  }

  return map;
}
