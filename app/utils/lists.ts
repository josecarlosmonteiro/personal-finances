export function filterByProp<T>(list: T[], prop: keyof T, match: unknown) {
  return list.filter(el => el[prop] === match);
}

export function totalByProp<T>(list: T[], prop: keyof T) {
  return list.reduce((prev, current) => prev + Number(current[prop]), 0);
}