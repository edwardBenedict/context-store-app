import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import { StoreContextProvider } from "./contexts/StoreContext";

function App() {
  return (
    <StoreContextProvider>
      <div className="app">
        <Router>
          <Home />
        </Router>
      </div>
    </StoreContextProvider>
  );
}

export default App;
