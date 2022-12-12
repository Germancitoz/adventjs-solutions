function selectSleigh(distance, sleighs) {
  return [
    { name: null, consumption: null },
    ...sleighs.filter(s => s.consumption * distance <= 20)
  ].at(-1).name
}
