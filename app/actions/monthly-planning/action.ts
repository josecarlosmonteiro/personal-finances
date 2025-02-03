'use server';

import { FETCH_TAGS } from "@/app/constants/FETCH_TAGS";
import { monthlyPlanningService } from "@/app/services/monthly-planning/monthly-planning.service";
import { TNewRelease } from "@/app/types/release/release.model";
import { revalidateTag } from "next/cache";

export async function getMonthlyPlanning() {
  const response = await monthlyPlanningService.getMonthlyPlanning();
  return response;
}

export async function updateMonthlyPlanning(payload: TNewRelease) {
  const { title, value, category, type } = payload;

  if (!title || !value || !category || !type)
    return { notification: "Preencha todos os campos do lançamento." };

  await monthlyPlanningService.updateMonthlyPlanning(payload);

  revalidateTag(FETCH_TAGS.MONTHLY_PLANNING);
}

export async function removeMonthlyPlanning(releaseId: string) {
  await monthlyPlanningService.removeMonthlyPlanning(releaseId);

  revalidateTag(FETCH_TAGS.MONTHLY_PLANNING);
}