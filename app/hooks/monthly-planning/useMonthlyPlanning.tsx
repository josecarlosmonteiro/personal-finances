import { IRelease } from "@/app/types/release/release.model"
import { filterByProp, totalByProp } from "@/app/utils/lists";

type Props = {
  releases: IRelease[];
}

export function useMonthlyPlanning({ releases }: Props) {
  const revenues = filterByProp(releases, 'type', 'revenue');
  const totalRevenues = totalByProp(revenues, 'value');

  const expenses = filterByProp(releases, 'type', 'expense');
  const totalExpenses = totalByProp(expenses, 'value');

  return {
    revenues,
    totalRevenues,
    expenses,
    totalExpenses,
  }
}