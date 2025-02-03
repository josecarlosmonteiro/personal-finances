import { IRelease, TNewRelease } from "../release/release.model";

export type TGetMonthlyPlanning = () => Promise<IRelease[]>;
export type TUpdateMonthlyPlanning = (payload: TNewRelease) => Promise<IRelease>;
export type TRemoveMonthlyPlanning = (releaseId: string) => Promise<IRelease>;