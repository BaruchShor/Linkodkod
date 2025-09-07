import "./App.css";
import Header from "./components/application-layout/Header";
import Footer from "./components/application-layout/Footer";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
