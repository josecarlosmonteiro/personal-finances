import { getMonthlyPlanning } from "./actions/monthly-planning/action";
import { MonthlyPlanningSummary } from "./components/monthly-planning/MonthlyPlanningSummary";
import { MonthlyPlanningTotals } from "./components/monthly-planning/MonthlyPlanningTotals";

export default async function Home() {
  const monthlyPlanning = await getMonthlyPlanning();

  return (
    <main className="p-4">

      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl text-yellow-500">Planejamento Mensal</h1>
          <br />
          <MonthlyPlanningTotals releases={monthlyPlanning} />
          <MonthlyPlanningSummary releases={monthlyPlanning} />
        </div>
      </div>
    </main>
  );
}
