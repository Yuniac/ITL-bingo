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
  }>;
  logo: string;
  vod: string;
}
