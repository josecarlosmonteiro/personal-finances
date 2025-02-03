'use client'

import { useMonthlyPlanning } from "@/app/hooks/monthly-planning/useMonthlyPlanning";
import { IRelease } from "@/app/types/release/release.model"
import { currency } from "@/app/utils/formats";
import { Button } from "../ui/Button";

type Props = {
  releases: IRelease[];
  removeRelease: (releaseId: string) => void;
}

export function MonthlyPlanningList({ releases, removeRelease }: Props) {
  const { revenues, totalRevenues, expenses, totalExpenses, } = useMonthlyPlanning({ releases });

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="flex justify-between text-xl mb-1 text-emerald-500 p-2 rounded">
          <span>Receitas</span>
          <span>{currency(totalRevenues)}</span>
        </h2>
        <table className="w-full text-center p-2 rounded bg-black bg-opacity-10">
          <thead>
            <tr>
              <th className="pl-2 text-start">Lançamento</th>
              <th>Categoria</th>
              <th>Valor</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              revenues.map(el => (
                <tr key={el.id}>
                  <td className="pl-2 text-start">{el.title}</td>
                  <td>{el.category}</td>
                  <td className="pr-2 text-end">{currency(el.value)}</td>
                  <td>
                    <Button
                      type="button"
                      className="p-1 my-1 text-xs"
                      onClick={() => removeRelease(el.id)}
                    >
                      remover
                    </Button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="flex justify-between text-xl mb-1 text-red-500 p-2 rounded">
          <span>Despesas</span>
          <span>{currency(totalExpenses)}</span>
        </h2>
        <table className="w-full text-center p-2 rounded bg-black bg-opacity-10">
          <thead>
            <tr>
              <th className="text-start pl-2">Lançamento</th>
              <th>Categoria</th>
              <th>Valor</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              expenses.map(el => (
                <tr key={el.id}>
                  <td className="text-start pl-2">{el.title}</td>
                  <td>{el.category}</td>
                  <td className="text-end pr-2">{currency(el.value)}</td>
                  <td>
                    <Button
                      type="button"
                      className="p-1 my-1 text-xs"
                      onClick={() => removeRelease(el.id)}
                    >
                      remover
                    </Button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}