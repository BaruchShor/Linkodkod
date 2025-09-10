import "./App.css";
import Layout from "./components/application-layout/Layout";
import { Routes, Route, BrowserRouter } from "react-router";
import PostPage from "./pages/PostPage";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import ConnectPage from "./pages/ConnectPage";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ConnectPage />} />
          <Route path="/postpage" element={<PostPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
