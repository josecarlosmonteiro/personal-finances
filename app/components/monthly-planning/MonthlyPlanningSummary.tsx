import { useMonthlyPlanning } from "@/app/hooks/monthly-planning/useMonthlyPlanning"
import { IRelease } from "@/app/types/release/release.model"
import { currency } from "@/app/utils/formats";

type Props = {
  releases: IRelease[]
}

export function MonthlyPlanningSummary({ releases }: Props) {
  const { revenuesSummary, expensesSummary } = useMonthlyPlanning({ releases });

  return (
    <div className="flex gap-4">
      <div className="w-full h-fit p-4 rounded bg-black bg-opacity-10">
        {
          Object.entries(revenuesSummary).map(([category, value]) => (
            <div key={category} className="flex justify-between items-center">
              <div>{category}</div>
              <div className="text-emerald-500">{currency(value)}</div>
            </div>
          ))
        }
      </div>

      <div className="w-full h-fit p-4 rounded bg-black bg-opacity-10">
        {
          Object.entries(expensesSummary).map(([category, value]) => (
            <div key={category} className="flex justify-between items-center">
              <div>{category}</div>
              <div className="text-red-500">{currency(value)}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}