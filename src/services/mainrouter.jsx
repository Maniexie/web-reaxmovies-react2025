import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './pages/Home/App'
import DetailMovie from "./pages/DetailMovie/DetailMovie";
import ShowMoreMovie from "./pages/ShowMoreMovie/ShowMoreMovie";
import ShowMoreTrending from "./pages/ShowMoreTrending/ShowMoreTrending";
import ShowMorePeople from "./pages/ShowMorePeople/ShowMorePeople";
import DetailCard from "./pages/DetailCard/DetailCard";
import DetailPeople from "./pages/DetailPeople/DetailPeople";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} index />
      <Route path="/detail-movie/:id" element={<DetailMovie />} />
      <Route path="/detail-people/:id" element={<DetailPeople />} />
      <Route path="/show-more-movie" element={<ShowMoreMovie />} />
      <Route path="/show-more-trending" element={<ShowMoreTrending />} />
      <Route path="/show-more-people" element={<ShowMorePeople />} />
      <Route path="/detail/:id" element={<DetailCard />} />
    </Routes>
  </BrowserRouter>
);