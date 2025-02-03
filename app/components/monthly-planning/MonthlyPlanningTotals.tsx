'use client'

import { useMonthlyPlanning } from "@/app/hooks/monthly-planning/useMonthlyPlanning";
import { IRelease } from "@/app/types/release/release.model"
import { currency } from "@/app/utils/formats";

type Props = {
  releases: IRelease[];
}

export function MonthlyPlanningTotals({ releases }: Props) {
  const { totalRevenues, totalExpenses, } = useMonthlyPlanning({ releases });

  return (
    <div className="flex gap-4 text-xl">
      <div className="p-4 w-full flex justify-between items-center rounded-lg shadow bg-black bg-opacity-20 text-emerald-600">
        <div>Receitas</div>
        <div>{currency(totalRevenues)}</div>
      </div>

      <div className="p-4 w-full flex justify-between items-center rounded-lg shadow bg-black bg-opacity-20 text-red-600">
        <div>Despesas</div>
        <div>{currency(totalExpenses)}</div>
      </div>
    </div>
  )
}