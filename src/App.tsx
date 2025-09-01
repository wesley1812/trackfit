import { useState } from "react";
import { Header } from "./components/header";
import { WorkoutList } from "./components/workout-list";
import type { Workout } from "./types/workout";

function App() {
  const [listWorkout, setListWorkout] = useState<Workout[]>([
    {
      id: "1",
      date: "20/06/2026",
      durationMinutes: 60,
      intensity: 5,
      title: "Aula de zumba",
    },
    {
      id: "2",
      date: "21/06/2026",
      durationMinutes: 45,
      intensity: 3,
      title: "Aula de fitdance",
    },
    {
      id: "3",
      date: "22/06/2026",
      durationMinutes: 55,
      intensity: 4,
      title: "Aula de axé",
    },
  ]);

  return (
    <>
      <Header />
      <main>
        <button
          onClick={() =>
            setListWorkout([
              ...listWorkout,
              {
                id: "3",
                date: "22/06/2026",
                durationMinutes: 50,
                intensity: 5,
                title: "Aula jiu-jitsu",
              },
            ])
          }
        >
          Adicionar treino
        </button>

        <WorkoutList workoutList={listWorkout} />
      </main>
    </>
  );
}

export default App;
