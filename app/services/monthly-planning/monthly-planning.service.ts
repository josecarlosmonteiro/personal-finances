import { FETCH_TAGS } from "@/app/constants/FETCH_TAGS";
import { TGetMonthlyPlanning, TRemoveMonthlyPlanning, TUpdateMonthlyPlanning } from "@/app/types/monthly-planning/monthly-planning.contracts";

const baseUrl = 'http://localhost:5050/monthly-planning';

const getMonthlyPlanning: TGetMonthlyPlanning = async () => {
  const response = await fetch(baseUrl, {
    cache: 'no-cache',
    next: {
      tags: [FETCH_TAGS.MONTHLY_PLANNING]
    }
  });
  const data = await response.json();

  return data;
}

const updateMonthlyPlanning: TUpdateMonthlyPlanning = async (payload) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  return data;
}

const removeMonthlyPlanning: TRemoveMonthlyPlanning = async (releaseId) => {
  const response = await fetch(`${baseUrl}/${releaseId}`, {
    method: "DELETE",
  });

  const data = await response.json();

  return data;
}

export const monthlyPlanningService = {
  getMonthlyPlanning,
  updateMonthlyPlanning,
  removeMonthlyPlanning,
}