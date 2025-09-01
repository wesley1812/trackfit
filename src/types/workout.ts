export interface Workout {
  id: string;
  title: string;
  durationMinutes: number;
  intensity: 1 | 2 | 3 | 4 | 5;
  date: string;
}
