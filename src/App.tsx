// main App.tsx
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className=" overflow-x-hidden">
        <NavBar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
