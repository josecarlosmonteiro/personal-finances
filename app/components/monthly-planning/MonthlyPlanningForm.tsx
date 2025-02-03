'use client'

import { useMonthlyPlanningForm } from "@/app/hooks/monthly-planning/useMonthlyPlanningForm";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { TNewRelease } from "@/app/types/release/release.model";

type Props = {
  submitFunction: (data: TNewRelease) => void;
}

export function MonthlyPlanningForm({ submitFunction }: Props) {
  const { titleInputRef, newRelease, newReleaseOptions, onChangeNewRelease, submitForm } = useMonthlyPlanningForm({ submitFunction });

  return (
    <form onSubmit={submitForm}>
      <div className="p-4 flex flex-col gap-4 bg-black bg-opacity-10 rounded-lg">
        <h1 className={`
          text-lg duration-200
          ${newRelease.type === 'revenue' ? 'text-emerald-500' : 'text-red-500'}
        `}>
          Novo lançamento
        </h1>

        <Select
          label="Tipo"
          name="type"
          onChange={e => onChangeNewRelease("type", e.target.value)}
          value={newRelease.type}
          required
        >
          <option value="revenue">Receita</option>
          <option value="expense">Despesa</option>
        </Select>

        <Select
          label="Categoria"
          name="category"
          onChange={e => onChangeNewRelease("category", e.target.value)}
          value={newRelease.category}
          required
        >
          <option value=""></option>
          {
            newReleaseOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)
          }
        </Select>

        <Input
          ref={titleInputRef}
          label="Título"
          name="title"
          onChange={e => onChangeNewRelease("title", e.target.value)}
          placeholder="salário/aluguel..."
          value={newRelease.title}
          required
        />

        <Input
          label="Valor"
          name="value"
          onChange={e => onChangeNewRelease("value", Number(e.target.value))}
          type="number"
          step={0.1}
          placeholder="0.00"
          value={newRelease.value}
          required
        />

        <Button type="submit">adicionar</Button>
      </div>
    </form>
  )
}