import type { Intensity } from "./intensity";

export interface Workout {
  id: string;
  title: string;
  durationMinutes: number;
  intensity: Intensity;
  date: string;
}
