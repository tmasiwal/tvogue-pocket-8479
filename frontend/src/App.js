import "./App.css";
import Navbar from "./Components/Navbar";
import MainRoutes from "./Routes/MainRoutes";
import Footer from "./Components/Footer";
import Exercise from "./Pages/Exercise"

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Footer />
      <Exercise />
    </div>
  );
}

export default App;
