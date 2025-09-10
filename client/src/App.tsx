import "./App.css";
import Layout from "./components/application-layout/Layout";
import { Routes, Route, BrowserRouter } from "react-router";
import PostPage from "./pages/PostPage";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import ConnectPage from "./pages/ConnectPage";
import NewPost from "./pages/NewPost";
import NavBar from "./components/NavBar";
import Header from "./components/application-layout/Header";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ConnectPage />} />
          <Route path="/postpage" element={<PostPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/neader" element={<Header />} />
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="/singlepost" element={<SinglePost />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
