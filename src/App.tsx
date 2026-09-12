import { AnimatedOutlet } from "./Components/layout/AnimatedOutlet";
import { Footer } from "./Components/layout/Footer";
import { LoadingScreen } from "./Components/layout/LoadingScreen";

export const App = () => (
  <div className="flex min-h-screen flex-col bg-paper">
    <LoadingScreen />
    <main className="flex-1">
      <AnimatedOutlet />
    </main>
    <Footer />
  </div>
);

export default App;
