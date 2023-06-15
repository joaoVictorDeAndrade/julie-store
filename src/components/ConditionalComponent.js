export default function ConditionalComponent({condition, value1, value2}) {
  if (condition) {
    return value1;
  }
  return value2;
}
