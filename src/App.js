import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./pages/AppRouter";
import { StoreContextProvider } from "./contexts/StoreContext";

function App() {
  return (
    <StoreContextProvider>
      <div className="app">
        <Router>
          <AppRouter />
        </Router>
      </div>
    </StoreContextProvider>
  );
}

export default App;
