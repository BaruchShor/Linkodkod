import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.tsx";
import PostPage from "./pages/PostPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/postpage" element={<PostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
