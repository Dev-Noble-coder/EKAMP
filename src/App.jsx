import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Waitlist from "./components/Waitlist";
import NotFoundPage from "./pages/NotFoundPage";
import { Toaster } from "react-hot-toast";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        {/* Add other routes here */}
      </Route>

      <Route path="/waitlist" element={<Waitlist />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>

    <Toaster position="top-right" />
  </Router>
);

export default App;
