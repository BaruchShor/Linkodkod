import "./App.css";
import Layout from "./components/application-layout/Layout";
import { Routes, Route, BrowserRouter } from "react-router";
import PostPage from "./pages/PostPage";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/" element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
