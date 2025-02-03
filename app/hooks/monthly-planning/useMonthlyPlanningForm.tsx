import { FormEvent, useRef, useState } from "react";

import { EXPENSES_OPTIONS, REVENUES_OPTIONS } from "@/app/constants/CATEGORIES";
import { TNewRelease } from "@/app/types/release/release.model";

type Props = {
  submitFunction: (data: TNewRelease) => void;
}

const defaultValues: TNewRelease = {
  title: "",
  category: "",
  type: 'revenue',
  value: 0,
};

export function useMonthlyPlanningForm({ submitFunction }: Props) {
  const [newRelease, setNewRelease] = useState<TNewRelease>(defaultValues);
  const titleInputRef = useRef<HTMLInputElement>(null);

  const newReleaseOptions = newRelease?.type === 'revenue'
    ? REVENUES_OPTIONS
    : EXPENSES_OPTIONS;

  const onChangeNewRelease = (prop: keyof TNewRelease, value: unknown) => {
    setNewRelease(state => ({ ...state, [prop]: value }));
  }

  const submitForm = (e: FormEvent) => {
    e.preventDefault();

    submitFunction(newRelease);

    setNewRelease(state => ({
      ...state,
      title: '',
      value: 0,
    }));

    titleInputRef.current?.focus();
  }

  return {
    titleInputRef,
    newRelease,
    newReleaseOptions,
    onChangeNewRelease,
    submitForm,
  }
}