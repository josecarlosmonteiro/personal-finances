export function filterByProp<T>(list: T[], prop: keyof T, match: unknown) {
  return list.filter(el => el[prop] === match);
}

export function totalByProp<T>(list: T[], prop: keyof T) {
  return list.reduce((prev, current) => prev + Number(current[prop]), 0);
}

export function getUniqueTotals<T = unknown>(list: T[], summaryProp: keyof T, propToSum: keyof T) {
  const summary: Record<string, number> = {};

  list.forEach(el => {
    const value = summary[el[summaryProp]];

    if (!value && value !== 0)
      summary[el[summaryProp]] = el[propToSum];
    else
      summary[el[summaryProp]] = value + el[propToSum];
  });

  return summary;
}