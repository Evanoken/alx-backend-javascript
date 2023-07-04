export default function cleanSet(set, startString) {
  const present = [];

  for (const element of set) {
    if (element.startsWith(startString) && startString !== '') {
      present.push(element.slice(3));
    }
  }

  return present.join('-');
}
