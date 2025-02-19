import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './pages/Home/App'
import DetailMovie from "./pages/DetailMovie/DetailMovie";
import ShowMoreMovie from "./pages/ShowMoreMovie/ShowMoreMovie";
import ShowMoreTrending from "./pages/ShowMoreTrending/ShowMoreTrending";
import ShowMorePeople from "./pages/ShowMorePeople/ShowMorePeople";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/detail-movie/:id" element={<DetailMovie />} />
      <Route path="/show-more-movie" element={<ShowMoreMovie />} />
      <Route path="/show-more-trending" element={<ShowMoreTrending />} />
      <Route path="/show-more-people" element={<ShowMorePeople />} />
    </Routes>
  </BrowserRouter>
);