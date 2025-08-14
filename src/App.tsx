import { Header } from "./components/header";
import { WorkoutCard } from "./components/workout-card";

function App() {
  return (
    <>
      <Header />

      <WorkoutCard
        id="1"
        date="15/08/2025"
        durationMinutes={60}
        intensity={5}
        title="Zumba"
      />

      <WorkoutCard
        id="2"
        date="16/08/2025"
        durationMinutes={45}
        intensity={3}
        title="FitDance"
      />
    </>
  );
}

export default App;
