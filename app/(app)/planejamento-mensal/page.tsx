import { getMonthlyPlanning, removeMonthlyPlanning, updateMonthlyPlanning } from "@/app/actions/monthly-planning/action";
import { MonthlyPlanningForm } from "@/app/components/monthly-planning/MonthlyPlanningForm";
import { MonthlyPlanningList } from "@/app/components/monthly-planning/MonthlyPlanningList";

export default async function MonthlyPlanningPage() {
  const monthlyPlanning = await getMonthlyPlanning();

  return (
    <main className="p-4">
      <h1>Planejamento mensal</h1>
      <hr /><br />

      <div className="grid grid-cols-3 gap-6">
        <MonthlyPlanningForm
          submitFunction={updateMonthlyPlanning} />

        <div className="col-span-2">
          <MonthlyPlanningList
            releases={monthlyPlanning}
            removeRelease={removeMonthlyPlanning}
          />
        </div>
      </div>
    </main>
  )
}