export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true;
    let task2 = false;
    // These variables are now block-scoped and won't affect the outer variables
  }

  return [task, task2];
}
