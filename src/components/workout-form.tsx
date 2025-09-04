import { useState } from "react";
import type { Intensity } from "../types/intensity";
import type { Workout } from "../types/workout";

interface WorkoutFormProps {
  onAdd: (workout: Workout) => void;
}

export function WorkoutForm({ onAdd }: WorkoutFormProps) {
  const [title, setTitle] = useState("");
  const [durationMinutes, setDurationMinutes] = useState(0);
  const [intensity, setIntensity] = useState<Intensity>(1);
  const [date, setDate] = useState("");

  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();

    const workout: Workout = {
      id: crypto.randomUUID(),
      title: title,
      date: date,
      durationMinutes: durationMinutes,
      intensity: intensity,
    };

    onAdd(workout);

    setTitle("");
    setDurationMinutes(0);
    setIntensity(1);
    setDate("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        gap: "0.5rem",
      }}
    >
      <label htmlFor="workout-title">Título do treino</label>
      <input
        type="text"
        id="workout-title"
        placeholder="Título do treino"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label htmlFor="workout-duration">Duração (min)</label>
      <input
        type="number"
        id="workout-duration"
        placeholder="Duração (min)"
        onChange={(e) => setDurationMinutes(Number(e.target.value))}
        value={durationMinutes}
      />

      <label htmlFor="workout-intensity">Intensidade</label>
      <input
        type="number"
        id="workout-intensity"
        placeholder="Intensidade"
        onChange={(e) => setIntensity(Number(e.target.value) as Intensity)}
        value={intensity}
        min={1}
        max={5}
      />

      <label htmlFor="workout-date">Dia do treino</label>
      <input
        type="date"
        id="workout-date"
        placeholder="Dia de treino"
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />

      <button type="submit">Adicionar treino</button>
    </form>
  );
}
