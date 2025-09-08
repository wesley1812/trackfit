import { Link } from "react-router-dom";
import type { Workout } from "../types/workout";

interface WorkoutResumeProps {
  workout: Workout;
}

export function WorkoutResume({ workout }: WorkoutResumeProps) {
  return (
    <div
      style={{
        marginTop: "0.5rem",
        border: "1px solid #ccc",
        width: "80%",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <h2>{workout.title}</h2>
        <Link to={`/workout/${workout.id}`} state={{ workout }}>
          Detalhes
        </Link>
      </div>

      <h3>Data: {workout.date}</h3>
    </div>
  );
}