import { useRoutes } from "react-router-dom";
import Navbar from "./components/navbar";
import { router as routes } from "./routes/index";
import Footer from "./components/footer";
import { Suspense } from "react";
import Spinner from "./components/spinner";
function App() {
  const router = useRoutes(routes);
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<Spinner />}>
        {router}
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
