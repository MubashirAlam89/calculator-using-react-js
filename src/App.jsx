import "./App.css";
import { Calculator } from "./calculator-components/calculator";

function App() {
  return (
    <>
      <Calculator />
      <footer className="mb-10 mt-6">
        <p className="text-center font-semibold text-neutral-900 text-xl">
          Made By "Mubashir Alam"
        </p>
      </footer>
    </>
  );
}

export default App;
