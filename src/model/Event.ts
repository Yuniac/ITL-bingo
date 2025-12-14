export interface Event {
  id: number;
  name: string;
  description: string;
  host: string;
  date: string;
  participants: Array<{
    id: number;
    name: string;
    standing: number;
    prize: {
      name: string;
      steam: string;
    } | null;
    points?: number
  }>;
  logo: string;
  vod: string;
}
