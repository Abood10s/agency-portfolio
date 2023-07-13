import { useRoutes } from "react-router-dom";
import Navbar from "./components/navbar";
import { router as routes } from "./routes/index";
import Footer from "./components/footer";
function App() {
  const router = useRoutes(routes);
  return (
    <div className="App">
      <Navbar />
      {router}
      <Footer />
    </div>
  );
}

export default App;
