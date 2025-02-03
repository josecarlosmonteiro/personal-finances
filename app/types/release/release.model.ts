export interface IRelease {
  id: string;
  title: string;
  value: number;
  category: string;
  type: "revenue" | "expense";
}

export type TNewRelease = Omit<IRelease, 'id'>;