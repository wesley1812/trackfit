import { useState } from "react";
import { Header } from "./components/header";
import { WorkoutForm } from "./components/workout-form";
import { WorkoutList } from "./components/workout-list";
import type { Workout } from "./types/workout";

function App() {
  const [listWorkout, setListWorkout] = useState<Workout[]>([]);

  function addWorkout(workout: Workout): void {
    setListWorkout((previous) => [...previous, workout]);
  }

  return (
    <>
      <Header />
      <main>
        <WorkoutForm onAdd={addWorkout} />
        <WorkoutList workoutList={listWorkout} />
      </main>
    </>
  );
}

export default App;
