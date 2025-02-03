import { IRelease } from "@/app/types/release/release.model"
import { filterByProp, getUniqueTotals, totalByProp } from "@/app/utils/lists";

type Props = {
  releases: IRelease[];
}

export function useMonthlyPlanning({ releases }: Props) {
  const revenues = filterByProp(releases, 'type', 'revenue');
  const totalRevenues = totalByProp(revenues, 'value');

  const expenses = filterByProp(releases, 'type', 'expense');
  const totalExpenses = totalByProp(expenses, 'value');

  const revenuesSummary = getUniqueTotals(revenues, 'category', 'value');
  const expensesSummary = getUniqueTotals(expenses, 'category', 'value');

  return {
    revenues,
    totalRevenues,
    revenuesSummary,
    expenses,
    totalExpenses,
    expensesSummary,
  }
}